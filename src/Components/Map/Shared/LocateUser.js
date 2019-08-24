import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import Locate from 'leaflet.locatecontrol';
//import { Marker } from "react-leaflet";

class LocateControl extends Component {

 componentDidMount() {
    const { startDirectly } = this.props;
    const { map } = this.props.leaflet;
    const locateOptions = {
      position: 'topright',
      enableHighAccuracy: true,
      strings: {
          title: 'Show me where I am, yo!'
      },
      drawCircle: false,
      drawMarker: true,
    };

    const lc = new Locate(locateOptions);
    lc.addTo(map);

    if (startDirectly) {
      lc.start();
    }
  }

  render() {
    return null;
  }
}

export default withLeaflet(LocateControl);
