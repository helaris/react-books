import React from 'react';
import Nav from '../Nav/Nav';
import WomanImage from '../../assets/sitting-reading.svg';

import './Header.css';

function Header() {
  return (
    <header className="header__container">
      {/* <Nav /> */}
      <div className="header__items">
        <section className="header__text">
          <h1>Are you a person who loves to read?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit quos consequatur vero adipisci vel praesentium non aut perferendis natus? Aut esse assumenda cupiditate culpa maxime, perferendis quidem animi qui.</p>
        </section>
        <div className="header__image">
          <img src={WomanImage} alt="Woman reading a book vector" />
        </div>
      </div>
    </header>
  )
}

export default Header
