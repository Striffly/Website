import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSlider(props) {
  const [radius, setRadius] = useState(0.05);
  return (
    <div style={{ width: '90vw', marginLeft: '5vw', marginTop: '4vh' }}>
      <Typography id="discrete-slider" gutterBottom>
        {`Rayon de la recherche: ${radius * 100} km`}
      </Typography>
      <Slider
        defaultValue={0.05}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.01}
        marks
        onChange={(e, val) => {setRadius(val); props.setRadius(val)}}
        min={0.01}
        max={1}
      />
    </div>
  );
}

export default DiscreteSlider;
