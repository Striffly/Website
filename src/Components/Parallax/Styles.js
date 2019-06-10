import styled from 'styled-components';
import doctorOfficePicture from '../../Images/doctor_office.jpg';
import doctorPicture from '../../Images/doctor.jpg';


export const Parallax = styled.div`

	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	font-family: 'Barlow Semi Condesed', 'Roboto', sans-serif;
	place-items: center;
	place-content: center;
	flex-grow: 1;
	background-color: #CEEBFC;
	padding: 0px;
	margin: 0px;
	position: relative;
	left: 0px;
	right: 0px;
	height: 100%;
	color: #171B1C;

	.sectionTitle {
		font-family: 'Barlow Semi Condensed', 'Roboto', sans-serif;
		font-weight: lighter;
		color: #171B1C;
		text-transform: uppercase;
		font-weight: lighter;
		font-size: 50px;
		margin-top: 100px;
	}

	p {
		@media (max-width: 1024px){
 			width: 75%;
		}
		@media (min-width: 1024px){
			width: 45%;
		}
		font-size: 18px;
		text-align: center;
	}


`;

export const MainPres = styled.div`

	display: flex;
	flex-direction: column;
	place-items: center;
	place-content: center;
	height: 100vh;
	width: 100%;
	color: #ffffff;
	background-color: #C4E7FC;
	background-image: url(${doctorOfficePicture});
	background-size: cover;
	margin: 0px;
	font-family: 'Barlow Semi Condensed', 'Roboto', sans-serif;
	text-shadow: #000000 1px 0 10px;
	font-weight: normal;

	h1 {
		color: #ffffff;
		text-transform: uppercase;
		font-weight: lighter;
		text-align: center;
		@media (max-width: 1024px){
 			font-size: 60px;
		}
		@media (min-width: 1024px){
			font-size: 100px;
		}
	}

	h3 {
		color: #ffffff;
		font-size: 30px;
		font-weight: lighter;
		text-transform: none;
		text-align: center;
	}

	.knowMore {
		background-color: rgba(0, 0, 0, 0);
		text-transform: uppercase;
		text-decoration: none;
		font-size: 25px;
		padding: 20px;
		color: #FFFFFF;
		font-weight: bold;
		border-radius: 30px;
		border-width: 3px;
		border-style: solid;
		border-color: #FFFFFF;
		margin-top: 30px;
		margin-bottom: 100px;
		:hover {
			background-color: #CEEBFC;
			border-color: #CEEBFC;
			color: #3B413C;
			transition: all 0.5s ease-out;
			box-shadow: -0px -0px 12px 2px rgba(0, 0, 0, 1);
		}
		:focus {
			outline: none;
		}
	}

`;


export const Description = styled.div`

	display: flex;
	box-sizing: border-box;
	flex-flow: row wrap;
	flex-grow: 1;
	flex-shrink: 1;
	align-items: stretch;
	justify-items: stretch;
	place-content: center;
	width: 90%;
	height: 100%;
	color: #3B413C;
	margin: 0px;
	font-family: sans-serif;
	text-align: center !important;

	.overlay {
		background-color: #7CCAFA;
	}

	.box {
		text-align: center !important;
		display: flex;
		flex-grow: 1,
		place-items: center;
		place-content: center;
		flex-direction: column;
		background-color: #ffffff;
		margin: 20px;
		padding: 30px;
		overflow-y: auto;
		justify-self: stretch;
		align-self: stretch;
		box-sizing: border-box;
		margin-bottom: 100px;
		border-style: none;
		@media (max-width: 1024px){
 			width: 100%;
		}
		@media (min-width: 1024px){
			width: 15%;
		}
		:hover {
			transition: all 0.3s ease-out;
			box-shadow: -0px -0px 12px 5px rgba(0, 0, 0, 0.3);
			background-color: #7CCAFA;
			.icon {
				color: #FFFFFF;
			}
		}
		p {
			text-align: center;
		}
	}

	.icon {
		align-self: center;
		justify-self: center;
		text-align: center;
		height: 15%;
		width: 15%;
		color: #5FBFF9;
	}


	h4 {
		width: 100%;
		text-align: center;
		font-weight: bold;
	}

	p {
		width: 100%;
		text-align: center;
		font-size: 16px,
	}


`;

export const PreviewSection = styled.div`

	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	flex-grow: 1;
	align-items: stretch;
	justify-items: stretch;
	place-content: center;
	width: 100%;
	height: 100%;
	margin: 0px;
	font-family: sans-serif;
	background-color: #99D6FB;
	text-align: center;

	p {
		align-self: center;
		width: 60%;
	}

	h4 {
		text-transform: uppercase;
		font-family: 'Barlow Semi Condensed', 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 25px;
		background-color: #C4E7FC;
		border-radius: 10px;
		color: #2C2F30;
		padding: 10px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.previewPic {
		display: flex;
		flex-grow: 1;
		height: 100%;
		place-items: center;
		place-content: center;
		align-self: center;
		justify-self: center;
		img {
			width: 100%;
			align-self: center;
			justify-self: center;
		}
		@media (max-width: 1024px){
			width: 100%;
		}
		@media (min-width: 1024px){
			width: 30%;
		}
	}

	.previewText {
		justify-self: center;
		align-self: center;
		padding: 20px;
		div {
			border-radius: 20px;
			background-color: #E9F6FD;
			:hover {
				background-color: #C4E7FC;
			}
		}
		p {
			display: flex;
			width: 100%;
			align-self: center;
			justify-self: center;
			text-align: center;
			font-size: 16px,
		}
		@media (max-width: 1024px){
			width: 100%;
			div {
				padding: 20px;
			}
		}
		@media (min-width: 1024px){
			width: 60%;
			div {
				padding: 50px;
			}
		}
		:hover {
			h4 {
				box-shadow: -0px -0px 8px 3px rgba(0, 0, 0, 0.3);
				background-color: #57AEE3;
			}
		}
	}

	.previewContainer {
		padding: 30px;
		margin: 20px;
		margin-bottom: 100px;
		text-align: center;
		display: flex;
		flex-grow: 1,
		place-items: center;
		place-content: center;
		flex-flow: row wrap;
		background-color: #FFFFFF;
		overflow-y: auto;
		justify-self: center;
		align-self: center;
		border-radius: 30px;
		box-sizing: border-box;
		box-shadow: -0px -0px 12px 5px rgba(0, 0, 0, 0.3);
		@media (max-width: 1024px){
			width: 90%;
		}
		@media (min-width: 1024px){
			width: 60%;
		}
	}
`;


export const ContactForm = styled.div`

	display: flex;
	box-sizing: border-box;
	flex-flow: column;
	flex-grow: 1;
	align-items: stretch;
	justify-items: stretch;
	place-content: center;
	width: 100%;
	height: 100%;
	color: #FFFFFF;
	margin: 0px;
	font-family: sans-serif;
	background-color: #414445;
	background-image: url(${doctorPicture});
	text-align: center;

	.sectionTitle {
		color: #FFFFFF;
	}

	h4 {
		width: 100%;
		text-align: center;
	}


	form {
		padding: 20px;
		background-color: #CEEBFC;
		border-radius: 30px;
		align-self: center;
		align-items: stretch;
		justify-items: stretch;
		display: flex;
		flex-flow: row wrap;
		@media (max-width: 1024px){
 			width: 80%;
		}
		@media (min-width: 1024px){
			width: 50%;
		}
	}

	.userInfoSection {
		@media (max-width: 800px){
 			width: 100%;
		}
		@media (min-width: 800px){
			width: 50%;
		}
	}

	.formSection {
		padding: 5px;
		display: flex;
		flex-direction: row;
		place-items: center;
		place-content: center;
		background-color: #ffffff;
		border-width: 1px;
		border-style: solid;
		border-color: #7CCAFA;
		color: #3B413C;
		border-radius: 100px;
		margin-bottom: 15px;
		margin-top: 15px;
		:focus {
			.icon {
				color:
			}
		}
		@media (min-width: 800px){
			margin-right: 30px;
		}
	}

	.icon {
		margin-left: 10px;
		margin-right: 10px;
		height: 30px;
		width: 30px;
	}

	input, textarea {
		flex-grow: 1;
		align-self: center;
		justify-self: center;
		margin: 0px;
		padding: 10px;
		border-style: none;
		background-color: rgba(0, 0, 0, 0);
		:focus {
			outline: none;
		}
	}

	.message {
		background-color: #ffffff;
		margin-top: 15px;
		margin-bottom: 15px;
		border-width: 1px;
		border-style: solid;
		border-color: #7CCAFA;
		color: #3B413C;
		border-radius: 30px;
		overflow-wrap: hyphens;
		padding: 20px;
		justify-self: stretch;
		align-self: stretch;
	}


	.submitButton {
		margin-bottom: 30px;
		background-color: rgba(0, 0, 0, 0);
		text-transform: uppercase;
		font-size: 20px;
		padding: 15px;
		color: #FFFFFF;
		font-weight: bold;
		border-radius: 100px;
		border-width: 3px;
		border-style: solid;
		border-color: #FFFFFF;
		margin-top: 30px;
		margin-bottom: 100px;
		:hover {
			background-color: #CEEBFC;
			border-color: #CEEBFC;
			color: #3B413C;
			transition: all 0.5s ease-out;
			box-shadow: -0px -0px 12px 2px rgba(0, 0, 0, 1);
		}
		@media (max-width: 1024px){
 			width: 40%;
		}
		@media (min-width: 1024px){
			width: 15%;
		}
	}
`;
