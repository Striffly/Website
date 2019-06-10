import React from 'react';
import {
	Parallax,
	MainPres,
	Description,
} from './Styles';
import {
	FaBell,
	FaHeartbeat,
	FaComments,
	FaFileAlt,
	FaAmbulance
 } from "react-icons/fa";
 import AnchorLink from 'react-anchor-link-smooth-scroll';
 import { displayContactForm } from './ContactForm';
 import { displayPreviewSection } from "./PreviewSection";

const descBoxes = [
	{
		title: "Ordonnances en ligne",
		text: "Partagée directement entre le personnel médical et le patient, l'ordonnance en ligne permet de diminuer l'utilisation de papier ainsi que les temps d'attentes chez le pharmacien",
		icon: <FaFileAlt className ="icon"/>,
	},
	{
		title: "Chat en ligne",
		text: "Ce chat entre le médecin et le patient, permet de demander et de donner des informations complémentaires concernant le suivi d'un traitement.",
		icon: <FaComments className ="icon"/>,
	},
	{
		title: "Urgence ou non ?",
		text: "Grace aux médecins disponibles en ligne, vous savez immédiatement si votre blessure nécessite un traitement d'urgence ou si un simple rendez-vous suffit.",
		icon: <FaAmbulance className ="icon"/>,
	},
	{
		title: "Télé-consultations",
		text: "Un système de télé-consultations remboursées par la sécurité sociale permettant de réduire les déplacements et d'apporter une solution aux déserts médicaux.",
		icon: <FaHeartbeat className ="icon"/>,
	},
	{
		title: "Notifications et rappels",
		text: "Des notifications permettant au patient de ne pas oublier de prendre son traitement, ainsi qu'un système de rappel des vaccins à venir.",
		icon: <FaBell className ="icon"/>,
	}
];


function descriptionBox(title, text, icon) {
	return (
		<div className="box">
			{icon}
			<h4>{title}</h4>
			<p>{text}</p>
		</div>

	)
}

export function displayParallax() {

	return (

		<Parallax>

			<MainPres>
				<h1>EPICARE</h1>
				<h3>Ma santé dans ma poche</h3>
				<AnchorLink href='#ourVisionSection' className="knowMore">
					En savoir plus
				</AnchorLink>
			</MainPres>

			<span id='ourVisionSection'></span>

			<h3 className="sectionTitle">Notre vision</h3>

			<p>Proposant entre autres un chat instantané avec le médecin,
			EpiCare est une application mobile ayant pour but de simplifier
			et centraliser les échanges entre professionnels de la santé et patients.</p>

			<Description>
				{descriptionBox(descBoxes[0].title, descBoxes[0].text, descBoxes[0].icon)}
				{descriptionBox(descBoxes[1].title, descBoxes[1].text, descBoxes[1].icon)}
				{descriptionBox(descBoxes[2].title, descBoxes[2].text, descBoxes[2].icon)}
				{descriptionBox(descBoxes[3].title, descBoxes[3].text, descBoxes[3].icon)}
				{descriptionBox(descBoxes[4].title, descBoxes[4].text, descBoxes[4].icon)}
			</Description>

			{displayPreviewSection()}

			<span id='previewSection'></span>

			<span id='contactSection'></span>

			{displayContactForm()}

		</Parallax>

	);

}
