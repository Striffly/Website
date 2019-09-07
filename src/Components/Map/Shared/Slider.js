// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import { withLeaflet, MapControl } from "react-leaflet";
import L from "leaflet";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: 300,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));
//
// const marks = [
//   {
//     value: 0,
//     label: '10km',
//   },
//   {
//     value: 100,
//     label: '100km',
//   }
// ];
//
// function valuetext(value) {
//   return `${value}°C`;
// }
//
// function valueLabelFormat(value) {
//   return marks.findIndex(mark => mark.value === value) + 1;
// }
//
// function DiscreteSlider() {
//   const classes = useStyles();
//
//   return (
//     <div className={classes.root} >
//       <Typography id="discrete-slider" gutterBottom>
//         Rayon de la recherche
//       </Typography>
//       <Slider
//         defaultValue={0}
//         valueLabelFormat={valueLabelFormat}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider-restrict"
//         step={null}
//         valueLabelDisplay="auto"
//         marks={marks}
//       />
//     </div>
//   );
// }

class MapInfo extends MapControl {

  createLeafletElement(opts) {
    const MapInfo = L.Control.extend({
      onAdd: map => {
        this.panelDiv = L.DomUtil.create("div", "info");
        this.panelDiv.innerHTML = '<div>Test</div>';
        return this.panelDiv;
        // return (<DiscreteSlider />);
      }
    });
    return new MapInfo({ position: "bottomright" });
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    this.leafletElement.addTo(map);
  }
}

// export default DiscreteSlider;
export default withLeaflet(MapInfo);
