import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class GeoSearch extends Component {

    componentDidMount() {
        const { map } = this.props.leaflet;
        const searchOptions =  {
            // style: 'button',
            autoClose: true,
            searchLabel: 'Ex : pays, villes, CP...',
            // keepResult: false,
            position: 'topleft',
            provider: new OpenStreetMapProvider(),
        };
        const searchControl = new GeoSearchControl(searchOptions);
        searchControl.addTo(map);
    }

    render() {
        return null;
    }
}

export default withLeaflet(GeoSearch);
