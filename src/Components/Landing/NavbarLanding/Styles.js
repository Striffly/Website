import styled from 'styled-components';

export const Navbar = styled.div`

	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	z-index: 500;
	display: flex;
	flex-flow: row;
	place-items: center;
	place-content: center;
	flex-grow: 1;
	font-weight: bold;
	background-color: #5FBFF9;
	box-shadow: -0px -0px 8px 2px rgba(0, 0, 0,.6);
	padding: 5px;

 	input {
		padding: 8px;
		color: #FFFFFF;
		font-weight: bold;
		background-color: rgba(0, 0, 0, 0);
		border-color: #FFFFFF;
		border-style: none;
		border-radius: 5px;
		margin: 3px;
		margin-left: 10px;
		margin-right: 10px;
		:hover {
			color: #171B1C;
			background-color: #FFFFFF;
			transition: all 0.5s ease-out;
			box-shadow: -0px -0px 8px 2px rgba(0, 0, 0,.5);
		}
	}
`;
