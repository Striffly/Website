import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Search extends Component {

  componentDidMount() {
    const { map } = this.props.leaflet;
    const searchOptions =  {
      // style: 'button',
      autoClose: true,
      showMarker: true,
      searchLabel: 'Ex : pays, villes, CP...',
      // keepResult: false,
      position: 'topleft',
      provider: new OpenStreetMapProvider(),
    };
    const searchControl = new GeoSearchControl(searchOptions);
    searchControl.addTo(map);

    map.on('geosearch/showlocation', (event)  => {
      this.props.addMarker(event.location.y, event.location.x);
    });
  }

  render() {
    return null;
  }
}

export default withLeaflet(Search);
