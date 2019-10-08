import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}°C`;
}

function DiscreteSlider(props) {
  const [radius, setRadius] = useState(10);
  return (
    <div style={{ width: '90vw', marginLeft: '5vw', marginTop: '4vh' }}>
      <Typography id="discrete-slider" gutterBottom>
        {`Rayon de la recherche: ${radius}km`}
      </Typography>
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        onChange={(e, val) => {setRadius(val); props.setRadius(val)}}
        min={10}
        max={100}
      />
    </div>
  );
}

export default DiscreteSlider;
