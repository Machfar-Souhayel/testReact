import React from 'react';
import styles from './RatedCard.module.css';

class RatedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paragraph: "L’équipe Agorim est disponible, professionnelle, pleine de ressources et efficace. Ils nous ont accompagnés tout au long de la vente de notre appartement. En plus d’avoir fait ce qu’on attend d’une agence immobilière, ils nous ont apporté leur expertise juridique. On ne peut que la conseiller."};
  }

  render() {
    return (
      <div className={styles.RatedCard}>
        <p>{this.state.paragraph}</p>
      </div>
  );
  }
}

export default RatedCard;
