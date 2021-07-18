import React from 'react';
import styles from './Description.module.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mainTitle: "Envie de vendre votre appartement ou votre maison?"};
    this.state = {secondTitle: "Agorim, l’allié de vos projets immobiliers"};
    this.state = {paragraph: `Optez pour la solution la plus performante, choisissez l’ensemble des expertises
    nécessaires à la vente de votre propriété bruxelloise en toute tranquillité :<br />
    • Une équipe réactive et pluridisciplinaire à taille humaine<br />
    • Une valorisation optimale de votre bien<br />
    • Des technologies de pointe: visites virtuelles, drones, home staging 3D, etc.<br />
    • Un appui administratif, juridique et urbanistique<br />
    • Des honoraires de vente réduits<br />
    • Et bien plus encore…`}
  }

  render() {
    return (
      <div className={styles.descriptionCard}>   
        <h1>{this.state.mainTitle}</h1>
        <h3>{this.state.secondTitle}</h3>
        <p>{this.state.paragraph}</p>
      </div>
  );
  }
}

export default Description;
