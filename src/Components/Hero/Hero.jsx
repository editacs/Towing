import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Experience top-tier roadside assistance with TowTech.</h1>
        <p>Our team delivers prompt, reliable service 24/7. Count on us for transparent pricing and customer satisfaction.</p>
        <a href="https://www.tiktok.com/@towtech.solutions" className='btn'>
          Explore more <img src={dark_arrow} alt="Navigate" />
        </a>
      </div>
    </div>
  )
}

export default Hero;
