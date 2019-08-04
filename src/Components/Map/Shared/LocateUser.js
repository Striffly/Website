import { Component } from 'react';
import { withLeaflet } from 'react-leaflet';
import Locate from 'leaflet.locatecontrol';
import * as ELG from 'esri-leaflet-geocoder';

class LocateControl extends Component {
  componentDidMount() {
    const { startDirectly } = this.props;
    const { map } = this.props.leaflet;
    const geocodeService = ELG.geocodeService();
    const locateOptions = {
      position: 'topright',
      enableHighAccuracy: true,
      strings: {
          title: 'Accéder à ma position',
      },
      showCompass: false,
      onActivate: () => { } // callback before engine starts retrieving locations
    }

    const lc = new Locate(locateOptions);
    lc.addTo(map);

    if (startDirectly) {
      lc.start();
    }
    map.on('locationerror', function(e){
      alert("Location access denied.");
    });
    map.on('locationfound', function(e){
      console.log(e.latlng);
      geocodeService.reverse().latlng(e.latlng).run(function(error, result) {
        console.log(result.latlng);
        console.log(result.address.Match_addr);
      });
    });
  }

  render() {
    return null;
  }
}

export default withLeaflet(LocateControl);
