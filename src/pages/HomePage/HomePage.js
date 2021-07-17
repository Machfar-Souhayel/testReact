import React from 'react';
import styles from './HomePage.module.css';

// Components
import Header from './../../components/Header/Header.js';
import Footer from './../../components/Footer/Footer.js';
import Description from './../../components/Description/Description.js';
import RatedCard from './../../components/RatedCard/RatedCard.js'

const HomePage = () => (
  <div className={styles.container}>
    <img src="/images/chowcaseImage.png" alt="chowcase background" className={styles.showcaseImage}/>
    <Header />
    <Description />
    <RatedCard />
    <Footer />
  </div>
);


export default HomePage;
