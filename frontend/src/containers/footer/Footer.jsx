import React from "react";
import "./Footer.css";
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      {/* <hr style="border-color:red" /> */}
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do You Want To Be Ahead Of The Game</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>                                               

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All Rights Reserved For Gamers</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Projects</p>
          <p>World-Wide Shipping</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get In Touch</h4>
          <p>10236 Charing Cross Road</p>
          <p>Los Angeles, California</p>
          <p>1-800-Touch-Grass</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>Did you see the address?</p>
      </div>
    </div>
  )
}

export default Footer
