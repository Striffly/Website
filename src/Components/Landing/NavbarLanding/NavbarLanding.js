import React from 'react';
import classes from './Styles.scss';
import { Link } from 'react-router-dom'

export function navbarLanding() {

	return (
		<div className={classes.Navbar}>
			<Link to={{
  			pathname: '/login',
  			state: {
    			isLogin: true
				}
			}}>
				<input
					type="submit"
					value="LOGIN"
					href="/login"
					className={classes.navbarLink}
				/>
			</Link>

			<Link to='/login'>
				<input
					type="submit"
					value="REGISTER"
					href="/login"
					className={classes.navbarLink}
				/>
			</Link>
			<Link to='/map'>
				<input
					type="submit"
					value="CARTE"
					href="/map"
					className={classes.navbarLink}
				/>
			</Link>

		</div>
	);

}
