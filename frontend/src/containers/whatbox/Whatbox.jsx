import React from 'react';
import Feature from '../feature/Feature';
import './whatbox.css';
import { useNavigate, Link } from "react-router-dom";

const Whatbox = () => {
  const navigate = useNavigate();
  return (
    <div className='gpt3__whatbox section_margin' id='wialb'>
      <div className='gpt3__whatbox-feature'>
        <Feature title="What is a Loot Box" text="Loot Gaming is a recurring monthly subscription, meaning that you will receive and be charged for crates every billing cycle unless you cancel your subscription. A 1-month plan means you get billed every month."/>
      </div>
      <div className='gpt3__whatbox-heading'>
        <h1 className='gradient__text'>Everything you want just one click away</h1>
        <p onClick={() => navigate("/pricing")}>Explore The Crates</p>
      </div>
      <div className='gpt3__whatbox-container'>
        <Feature title="Consoles" text="Available on Xbox Series X.  Sony PlayStation 5.  Nintendo Switch OLED.  Chromecast with Google TV. Xbox: Microsoft Xbox Series S. Nintendo Switch Lite. Apple TV 4K"/>
        <Feature title="Support" text="Direct Support for your orders"/>
        <Feature title="Reviews" text="See what other subscribers are saying"/>
      </div>
    </div>
  )
}

export default Whatbox