import React from 'react';
import styles from './CatalogueMenu.module.css';

class CatalogueMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {btnOneState : true}
    this.state = {btnTwoState : false}
  }

  toggleClassMethod = (event) => {
    if(event.target.innerText.toUpperCase() === 'OUR LATEST SALES' && !this.state.btnOneState){
      this.setState({btnOneState : (this.state.btnTwoState)});
      this.setState({btnTwoState : (this.state.btnOneState)});
    }
      
    else if(event.target.innerText.toUpperCase() === 'OUR LATEST RENTS' && this.state.btnTwoState){
      this.setState({btnOneState : (!this.state.btnOneState)});
      this.setState({btnTwoState : (!this.state.btnTwoState)});
    }
  }

  render() {
    return (
      <div className={styles.CatalogueMenu}>   
        <ul>
          <li>
            <button 
              className={this.state.btnOneState === true ? styles.isSelected : styles.isNotSelected }
              onClick={(e) => this.toggleClassMethod(e)}>OUR LATEST SALES</button>
          </li>
          <li>
            <button 
              className={this.state.btnTwoState === true ? styles.isSelected : styles.isNotSelected }
              onClick={(e) => this.toggleClassMethod(e)}>OUR LATEST RENTS</button>
          </li>
        </ul>
      </div>
  );
  }
}
export default CatalogueMenu;
