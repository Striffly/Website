import React, { Component } from 'react';
import {
    Map, TileLayer, ZoomControl, Marker, Popup
} from 'react-leaflet';
import MapRouting from "./MapRouting";
import LocateControl from './Shared/LocateUser';
import DiscreteSlider from './Shared/Slider';
import Search from './Shared/Search';
import { FaAmbulance } from 'react-icons/fa';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import classes from "./Map.scss"

class LeafletMap extends Component {

    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            //default lat and lng are Paris coordinates
            lat: 48.8566,
            lng: 2.3522,
            markerLat: 0,
            markerLng: 0,
            zoom: 5,
            radius: 0.03,
            isMapInit: false,
            hospitalSelected: false,
            //list of hospitals
            nearestHospitals: [],
            hospitalMarkers: [],
            userPos: null,
            //in case userPos != route start pos
            routeFrom: [46.5, 2.618787],
            routeTo: [48.85412, 2.4065929]
        };
        this.addMarker = this.addMarker.bind(this);
    }

    getNearestHospitals() {
        let url = this.state.userPos ? "https://www.kwili.fr:8080/urgences?radius=" + this.state.radius + "&lat=" + this.state.userPos.lat
                + "&long=" + this.state.userPos.lng : "https://www.kwili.fr:8080/urgences?radius=" + this.state.radius + "&lat=" + this.state.lat
                + "&long=" + this.state.lng;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({nearestHospitals: result.msg});
                    if (result.msg !== undefined && result.msg[0] !== undefined && result.msg[0].geo !== undefined) {
                        this.createHospitalMarkers();
                        this.setState({routeTo: [result.msg[0].geo[1], result.msg[0].geo[0]]});
                        this.setState({selectedHospital: true});
                    }
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    componentDidMount() {
        document.title = 'Kwili | Urgences à proximité';
        if (this.state.isMapInit === false) {
            this.setState({
                isMapInit: true
            });
            this.getNearestHospitals();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.state.userPos !== prevState.userPos)) {
            this.getNearestHospitals();
        } else if ((this.state.radius !== prevState.radius)) {
            this.getNearestHospitals();
        }
    }

    updateUserPosition(pos) {
        this.setState({userPos: pos});
    }

    addMarker(x, y) {
        this.setState({ markerLat: x, markerLng: y });
    }

    saveMap = (map) => {
        this.map = map;
    };

    onClick = (pos) => {
        this.child.updateHospital(pos);// do stuff
    };

    setRadius(val) {
        this.setState({radius: val});
    }

    createHospitalMarkers() {

        if (this.state.nearestHospitals !== []) {
            let markers = [];
            let self = this;
            const iconMarkup = renderToStaticMarkup(<FaAmbulance className={classes.hospitalIcon}/>);
            const customIcon = divIcon({
                html: iconMarkup,
                className: 'hospitalIcon'
            });

            this.state.nearestHospitals.forEach(function (hospital) {
                markers.push(
                    <Marker position={[hospital.geo[1], hospital.geo[0]]} key={hospital.id} icon={customIcon}
                            onClick={() => self.onClick([hospital.geo[1], hospital.geo[0]])}>
                        <Popup>
                            {hospital.n}
                        </Popup>
                    </Marker>
                );
            });
            this.setState({hospitalSelected: true, hospitalMarkers: markers});
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map
                    zoomControl={false}
                    center={position}
                    zoom={this.state.zoom}
                    style={{ height: '90vh' }}
                    minZoom={2}
                    max Zoom={19}
                    ref={this.saveMap}
                    onLocationFound={event => {this.updateUserPosition(event.latlng)}}
                    onLocationError={() => this.setState({userPos: position})}
                >
                    <TileLayer
                        attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp;copy <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    {(this.state.markerLat !== 0 && this.state.markerLng !== 0) ?
                        (
                            <Marker position={[this.state.markerLat, this.state.markerLng]} />
                        ) : null
                    }
                    <ZoomControl position="bottomleft" />
                    <Search />
                    <LocateControl startDirectly/>
                    {
                        //only display routing when user is geolocated and an hospital is clicked
                        //or use default coordinates if user refused geolocation
                        this.state.isMapInit && this.state.userPos && this.state.selectedHospital && <MapRouting
                            routeFrom={this.state.userPos}
                            routeTo={this.state.routeTo}
                            map={this.map}
                            updateUserPos={(pos) => this.setState({userPos: pos})}
                            onRef={ref => (this.child = ref)}
                        />
                    }
                    {this.state.hospitalMarkers}
                </Map>
                <DiscreteSlider setRadius={(val) => this.setState({radius: val})}/>
            </div>
        );
    }
}

export default LeafletMap;
