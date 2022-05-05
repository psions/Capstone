import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg"
import "./Navbar.css";

// BEM -> Block Element Modifier

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wislb">What is a LootBox</a></p>
          <p><a href="#possibility">Different LootBoxes</a></p>
          <p><a href="#features">items</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
