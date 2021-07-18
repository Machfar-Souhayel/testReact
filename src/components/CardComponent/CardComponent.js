import React from 'react';
import styles from './CardComponent.module.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Une expertise totale, une présence locale"};
  }

  render() {
    return (
      <div className={styles.CardComponent}>
        
      </div>
  );
  }
}

export default CardComponent;
