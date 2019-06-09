import React from "react";
import Navbar from "../Components/Navbar";
import PrescriptionApi from "../Api/Prescription";
import CareApi from '../Api/api';
import NotLogged from "../Components/NotLogged";
import { Figure, ButtonToolbar, Button } from "react-bootstrap";
import ExifOrientationImg from 'react-exif-orientation-img'

import '../Public/Prescription.css';
import '../Public/Common.css'

export default class Prescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileZoom: false,
            fileNames: [],
            files: [],
            fileZoomed: null,
        };
        this.refreshFiles = (response) => {
            if (response != null) {
                this.setState({
                    fileNames: response.data,
                });
                let fileNames = this.state.fileNames;
                let docFiles = [];
                fileNames.Files.forEach(function(item) {
                    console.log(item.name);
                    docFiles.push(PrescriptionApi.getFile(item.name))
                });
                this.setState({
                    files: docFiles,
                });

            }
            else {
                console.log("Error get")
            }
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    componentDidMount() {
        if (CareApi.isConnected()) {
            PrescriptionApi.getFileNames().then(this.refreshFiles);
        }
    }

    handleClick(e, data) {
        if (!this.state.fileZoom) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
            if (e != null)
            this.setState({
                fileZoomed: data
            });
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            fileZoom: !prevState.fileZoom,
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        document.getElementById("overlay").style.display = "none";
        this.handleClick();
    }

    Display() {
        console.log("CLICKED");
        document.getElementById("overlay").style.display = "block";
        return(
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <ExifOrientationImg
                    width="550"
                    alt="prescription"
                    src={this.state.fileZoomed}
                />
            </div>
        )
    }

    render() {
        const items = [];

        for (const [index, value] of this.state.files.entries()) {
            items.push(
                <Button variant="light" key={index} id='toto' onClick={((e) => this.handleClick(e, value))}>
                    <Figure>
                        <Figure.Image
                            src={value}
                            width="200"
                            fluid
                        />
                    </Figure>
                </Button>
            )
        }
        if (!CareApi.isConnected())
            return (<NotLogged/>);
        return (
            <div>
                <div id="overlay">
                    {this.state.fileZoom && (
                        <div ref={node => { this.node = node; }}>
                            {this.Display()}
                        </div>
                    )}
                </div>
                <div>
                    <Navbar/>
                    <div className="container ">
                        <Button variant="primary" size="lg" onClick={() => (console.log("Uploaded"))}>
                            Upload
                        </Button>
                    </div>
                    <br/>
                    <br/>
                    <div className="container ">
                        <div className="row">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
