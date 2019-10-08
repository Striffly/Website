import React, { Component } from 'react';
import {
    Map, TileLayer, ZoomControl, Marker
} from 'react-leaflet';
import MapRouting from "./MapRouting";
import LocateControl from './Shared/LocateUser';
import DiscreteSlider from './Shared/Slider';
import Search from './Shared/Search';

class LeafletMap extends Component {

    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
        this.state = {
            lat: 46.5,
            lng: 2.618787,
            markerLat: 0,
            markerLng: 0,
            zoom: 5,
            isMapInit: false,
            userPos: null,
            //in case userPos != route start pos
            routeFrom: [46.5, 2.618787],
            routeTo: [48.85412, 2.4065929]
        };
        this.addMarker = this.addMarker.bind(this);
    }

    componentDidMount() {
        document.title = 'Kwili | Urgences à proximité';
        if (this.state.isMapInit === false) {
            this.setState({
                isMapInit: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.map.contextValue.layerContainer._lastCenter !== this.state.routeFrom)
            this.setState({routeFrom: this.map.contextValue.layerContainer._lastCenter});
    }

    updateUserPosition(event) {
        this.setState({userPos: event.latlng});
    }


    addMarker(x, y) {
        this.setState({ markerLat: x, markerLng: y });
    }

    saveMap = (map) => {
        this.map = map;
    };

    setRadius(val) {
      console.log(val);
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
                    onLocationFound={event => {this.updateUserPosition(event)}}
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
                    <Search addMarker={this.addMarker}/>
                    <LocateControl startDirectly/>
                    {
                        //only display routing when user is geolocated
                        this.state.isMapInit && this.state.userPos && <MapRouting
                            routeFrom={this.state.userPos}
                            routeTo={this.state.routeTo}
                            map={this.map}/>
                    }
                </Map>
                <DiscreteSlider setRadius={this.setRadius}/>
            </div>
        );
    }
}

export default LeafletMap;
