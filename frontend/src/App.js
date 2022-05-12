// General Imports
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
// import "./pages/price-table";
// import paymentpage from "./pages/PaymentPage"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// containers
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatbox,
} from "./containers";
import { CTA, Brand, Navbar } from "./containers";
import Pricing from "./pages/Pricing/Pricing";
import Signup from "./pages/SignUpPage/Signup";

// possibly bring in later //

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/addproduct"
        element={
          <PrivateRoute>
            <AddProductPage />
          </PrivateRoute>
        }
      />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
