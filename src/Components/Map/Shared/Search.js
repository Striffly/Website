import { withLeaflet, MapControl } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Search extends MapControl {
  createLeafletElement() {
    const map = this.props.leaflet.map;
    // console.log(this.props);
    // alert('toto');
    map.on('geosearch/showlocation', (param)  => {
      this.props.addMarker(param.location.y, param.location.x);
    });
    return GeoSearchControl({
      // style: 'button',
      autoClose: true,
      showMarker: true,
      searchLabel: 'Ex : pays, villes, CP...',
      // keepResult: false,
      // retainZoomLevel: true,
      position: 'topleft',
      provider: new OpenStreetMapProvider(),
    });
  }
}

export default withLeaflet(Search);
