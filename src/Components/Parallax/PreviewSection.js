import React from 'react';
import { PreviewSection } from './Styles';
import appDemoGif from "../../Images/android_demo.gif";

 export function displayPreviewSection() {

 	return (
		<PreviewSection>
			<h3 className="sectionTitle">Aperçu</h3>
			<p>Epicare, concrètement, à quoi ça ressemble ?</p>

			<div className="previewContainer">

				<div className="previewPic">
					<img src={appDemoGif} alt="Android Demo" />
				</div>

				<div className="previewText">
					<h4>Une application mobile polyvalente</h4>
					<div><p>Creéz un profil patient ou professionel. Retrouvez  vos ordonnances, vos consultations.
					Chattez en ligne directement avec le médecin ou le pharmacien. Effectuez des télé-consultations et
					 recevez des notifications pour votre traitement. Le tout grâce à une seule
					 et même application, disponible à la fois sur Android et iOS.</p></div>

					<h4>Un site web en complément</h4>
					<div><p>Retrouvez pratiquement toutes les fonctionnalités de l'application mobile
					sur notre plateforme web, accesible partout et depuis n'importe quel appareil, en utilisant
					le même compte que sur l'application mobile.  </p></div>
				</div>
			</div>
		</PreviewSection>
	);
}
