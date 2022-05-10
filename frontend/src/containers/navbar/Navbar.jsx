import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.svg"
import "./Navbar.css";

// BEM -> Block Element Modifier

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wialb">What is a Loot Box</a></p>
  <p><a href="#possibility">Different Loot Boxes</a></p>
  <p><a href="#features">items</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#ffff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#ffff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="gpt2__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
