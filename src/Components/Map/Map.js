import React, { Component } from 'react';
import {
    Map, TileLayer, withLeaflet, MapControl, ZoomControl,
} from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import MapRouting from "./MapRouting";
import LocateControl from './Shared/LocateUser';
// import PrintControlDefault from 'react-leaflet-easyprint';
// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import yellowIcon from './MarkerStyle';
// import './customLeaflet.scss';//
// import classes from '../GraphComponents.scss';
// const PrintControl = withLeaflet(PrintControlDefault);

class Search extends MapControl {
    createLeafletElement() {
        return GeoSearchControl({
            // style: 'button',
            autoClose: true,
            searchLabel: 'Ex : pays, villes, CP...',
            // keepResult: false,
            position: 'topleft',
            provider: new OpenStreetMapProvider(),
        });
    }
}

const GeoSearch = withLeaflet(Search);

class LeafletMap extends Component {

    state = {
        lat: 46.5,
        lng: 2.618787,
        zoom: 5,
        isMapInit: false,
        userPos: null,
        //in case userPos != route start pos
        routeFrom: [46.5, 2.618787],
        routeTo: [48.85412, 2.4065929]
    };

    // print() {
    //   this.printControl.printMap('A4Portrait', 'MyFileName');
    // }
    //
    // exportChartPng() {
    //   this.printControl.printMap('A4Portrait', this.props.filename);
    // }

    saveMap = (map) => {
        this.map = map;
    };

    componentDidMount() {
        console.log("map did mount " + this.map);
        if (this.state.isMapInit === false) {
            this.setState({
                isMapInit: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.map);
        if (this.map.contextValue.layerContainer._lastCenter !== this.state.routeFrom)
            this.setState({routeFrom: this.map.contextValue.layerContainer._lastCenter});
        //console.log(this.refs.userLoc);
    }

    updateUserPosition(event) {
        console.log("found location!");
        console.log(event);
        this.setState({userPos: event.latlng});
    }

    render() {

        const defaultPosition = [this.state.lat, this.state.lng];

        return (
            <Map
                zoomControl={false}
                center={defaultPosition}
                zoom={this.state.zoom}
                style={{ height: '100vh' }}
                minZoom={2}
                maxZoom={19}
                ref={this.saveMap}
                onLocationFound={event => {this.updateUserPosition(event)}}
                >

                <TileLayer
                    attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp;copy <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <ZoomControl position="bottomleft" />
                <GeoSearch />
                <LocateControl startDirectly/>

                {
                    //only display routing when user is geolocated
                    this.state.isMapInit && this.state.userPos && <MapRouting
                    routeFrom={this.state.userPos}
                    routeTo={this.state.routeTo}
                    map={this.map}/>
                }

            </Map>
        );
    }
}

export default LeafletMap;
