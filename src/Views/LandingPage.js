import React from 'react';
import { displayNavBar } from '../Components/NavbarLanding/NavbarLanding';
import { displayParallax } from '../Components/Parallax/Parallax';
import '../Public/Fonts.css';

class LandingPage extends React.Component {

	constructor() {
		super();
		this.state = {
			formData: null,
		};
	}


	render () {

		return (
			<div>
				{displayNavBar()}
				{displayParallax()}
			</div>
		);
	}

}

export default LandingPage;
