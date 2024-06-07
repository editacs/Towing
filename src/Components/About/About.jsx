import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT TOWTECH SOLUTIONS</h3>
        <h2>Your Roadside Rescue Team!</h2>
        <p>At TowTech Solutions, we understand the frustration and stress that comes with unexpected vehicle breakdowns. That's why we offer prompt and professional towing solutions to get you back on the road swiftly and safely.</p>
        <p>With a fleet of modern tow trucks and a team of highly skilled operators, we're equipped to handle any towing or roadside assistance need, whether it's a flat tire, dead battery, or accident recovery.</p>
        <p>Our commitment to exceptional service, combined with competitive rates, makes us the go-to towing company in the area. Trust TowTech Solutions to deliver dependable assistance whenever you need it most.</p>
      </div>
    </div>
  )
}

export default About
