// General Imports
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../../App.css";

// Pages Imports

// import paymentpage from "./pages/PaymentPage"




// Util Imports


// containers
import {Blog, Features, Footer, Header, Possibility, Whatbox,  } from '../../containers';
import { CTA, Brand, Navbar} from '../../containers';

const HomePage = () => {
  return (

      <div>
        <div className= "App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Whatbox />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>     
    </div>
  );
};

export default HomePage;
