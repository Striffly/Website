import React, { Component } from 'react';
import {
    Map, TileLayer, withLeaflet, MapControl, ZoomControl,
} from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import MapRouting from "./Map";

import LocateControl from './Shared/LocateUser';
// import PrintControlDefault from 'react-leaflet-easyprint';
// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import yellowIcon from './MarkerStyle';

// import './customLeaflet.scss';
//
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
        this.setState({
            isMapInit: false
        })
    };

    render() {

        const position = [this.state.lat, this.state.lng];
        const hospitalTestRouting = [48.85412, 2.4065929];

        // const printOptions = {
        //   position: 'topleft',
        //   sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
        //   hideControlContainer: false
        // };
        // const downloadOptions = {
        //   position: 'bottomright',
        //   filename: this.props.filename,
        //   sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
        //   title: 'Télécharger au format PNG',
        //   hideControlContainer: false,
        //   exportOnly: true,
        // };
        // htmlToImage.toPng(document.getElementById('mapContainer'))
        //   .then(function (dataUrl) {
        //     download(dataUrl, 'my-node.png');
        //   });

        // alert(data[0].address[0].gps.lat);
        // alert(data[0].address[0].gps.lon);

        let mapRouting = null;
        if (this.state.isMapInit)
            mapRouting = <MapRouting routeFrom={position} routeTo={hospitalTestRouting} map={this.refs.map}/>;

        return (
            <Map
                zoomControl={false}
                center={position}
                zoom={this.state.zoom}
                style={{ height: '100vh' }}
                minZoom={2}
                maxZoom={19}
                ref={this.saveMap}>
                >

                <TileLayer
                    attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp;copy <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <ZoomControl position="bottomleft" />
                <GeoSearch />
                <LocateControl startDirectly/>
                {mapRouting}

            </Map>
        );
    }
}

export default LeafletMap;
