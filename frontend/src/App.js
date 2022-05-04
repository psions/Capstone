// General Imports
import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";



// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// containers
import {Blog, Features, Footer, Header, Possibility, Whatbox } from './containers';
import { CTA, Brand, Navbar} from './containers';


function App() {
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
    </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addproduct" element={<PrivateRoute><AddProductPage/></PrivateRoute>} />
        <route path="/price-table" element={<PrivateRoute><price-table/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;










