import React, { Component } from 'react';
import {
  Map, TileLayer, ZoomControl, Marker
} from 'react-leaflet';
import LocateControl from './Shared/LocateUser';
import DiscreteSlider from './Shared/Slider';
import Search from './Shared/Search';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
        lat: 46.5,
        lng: 2.618787,
        markerLat: 0,
        markerLng: 0,
        zoom: 5,
      }
    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    document.title = 'Kwili | Urgence à proximité';
  }

  addMarker(x, y) {
    this.setState({ markerLat: x, markerLng: y });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map
          zoomControl={false}
          center={position}
          zoom={this.state.zoom}
          style={{ height: '90vh' }}
          minZoom={2}
          max Zoom={19}
          ref={this.mapRef}
        >
          <TileLayer
            attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp;copy <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {(this.state.markerLat !== 0 && this.state.markerLng !== 0) ?
            (
              <Marker position={[this.state.markerLat, this.state.markerLng]} />
            ) : null
          }
          <ZoomControl position="bottomleft" />
          <Search addMarker={this.addMarker}/>
          <LocateControl startDirectly/>
        </Map>
        <DiscreteSlider />
      </div>
    );
  }
}

export default LeafletMap;
