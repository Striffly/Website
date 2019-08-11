import React, { Component } from 'react';
import {MapLayer} from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet-routing-machine';

export default class MapRouting extends MapLayer {

    state = {
        routeColor: "#CE161F"
    };

    createLeafletElement() {

        const color = this.state.routeColor;
        const {map, routeFrom, routeTo} = this.props;

        let leafletElement = L.Routing.control({
            waypoints: [routeFrom, routeTo],
            lineOptions: {
                styles: [{
                    color,
                    opacity: .8,
                    weight: 6
                }]
            },
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            showAlternatives: false,
            createMarker: () => { return null; }
        })
            .addTo(map.leafletElement);

        return leafletElement.getPlan();
    }
}

MapRouting.propTypes = {
    color: PropTypes.string
};