import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import Locate from 'leaflet.locatecontrol';

class LocateControl extends Component {
  componentDidMount() {
    const { startDirectly } = this.props;
    const { map } = this.props.leaflet;
    const locateOptions = {
      position: 'topright',
      strings: {
          title: 'Please locate me'
      },
      onActivate: () => {} // callback before engine starts retrieving locations
    }

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
