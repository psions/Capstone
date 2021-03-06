import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { useNavigate, Link } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Get Your Loot Box Today</h1>
        <p>Gaming done the right way</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address"/>
          <button type="button" onClick={() => navigate("/register")}> Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access to visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header