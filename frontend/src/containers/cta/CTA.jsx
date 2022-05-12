import React from 'react';
import './cta.css';
import { useNavigate, Link } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access</p>
        <h3>Register Today To Start Gaming</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button className='button' onClick={() => navigate("/register")}>Get Started</button>
      </div>
    </div>
  )
}

export default CTA