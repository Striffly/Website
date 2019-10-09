import React from 'react';
import {Popup} from 'react-leaflet'
import FigureImage from "react-bootstrap/FigureImage";
import classes from "../Map.scss"


function HospitalPopup(props) {
    let hospital_pics = ["http://www.ghu-paris.fr/wp-content/uploads/2016/08/hopital-maison-blanche-avron-e1472203323619.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPIZjZc5rGrdvLH0JTSsIBi6TXYuFBTUhOcn21Vc6tGddjQgK"];
      return (
        <div>
            <Popup keepInView={true} className={classes.hospitalPopup}>
                {props.name}
                <br />{"+33 00 70 00 70 07"}
                <br />{"affluence: Faible"}
                <br /><FigureImage src={hospital_pics[0]} alt="Hospital_pic" style={{width: null, height: null}} rounded={true}/>;
                <br /><FigureImage src={hospital_pics[1]} alt="Hospital_pic" style={{width: null, height: null}} rounded={true}/>;
            </Popup>
        </div>
  );
}

export default HospitalPopup;
