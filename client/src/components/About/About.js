import React from 'react';
import WomanReading from '../../assets/reading-side.svg';

import './About.css';
function About() {
  return (
    <header className="about__container">
      <section className="about__text">
        <h1>Are you a person who likes to read?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odit quos consequatur vero adipisci vel praesentium non aut perferendis natus? Aut esse assumenda cupiditate culpa maxime, perferendis quidem animi qui.</p>
      </section>
      <div className="about__image">
        <img src={WomanReading} alt="Woman reading a book vector" />
      </div>
    </header>
  )
}

export default About;
