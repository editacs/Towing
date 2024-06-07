import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreMore = () => {
    navigate('/next-page'); // Specify the route you want to navigate to
  }

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Experience top-tier roadside assistance with TowTech.</h1>
        <p>Our team delivers prompt, reliable service 24/7. Count on us for transparent pricing and customer satisfaction.</p>
        <button className='btn' onClick={handleExploreViewMore}>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export soon Hero;

