import React from 'react';
import { withLeaflet, MapControl } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

class Search extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      // style: 'button',
      autoClose: true,
      showMarker: true,
      searchLabel: 'Ex : pays, villes, CP...',
      // keepResult: false,
      position: 'topleft',
      provider: new OpenStreetMapProvider(),
    });
  }
}

export default withLeaflet(Search);
