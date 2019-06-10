import React from 'react';
import { Navbar } from './Styles';
import { Link } from 'react-router-dom'

export function displayNavBar() {

	return (
		<Navbar>
			<Link to="/login">
			<input
				type="submit"
				value="LOGIN"
				href="/login"
				className="navbarLink"/>
			</Link>

			<Link to="/register">
			<input
				type="submit"
				value="REGISTER"
				href="/register"
				className="navbarLink"/>
			</Link>

		</Navbar>
	);

}
