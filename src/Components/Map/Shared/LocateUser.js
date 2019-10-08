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
                title: 'Partager ma position'
            },
            drawCircle: false,
            drawMarker: true,
            showPopup: false,
        };

        const lc = new Locate(locateOptions);
        lc.addTo(map);

        if (startDirectly) {
            lc.start();
        }

        if (this.props.stop) {
          lc.stop();
        }
    }

    render() {
        return null;
    }
}

export default withLeaflet(LocateControl);
