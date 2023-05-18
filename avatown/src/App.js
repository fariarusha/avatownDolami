import logo from "./logo.svg";
import "./App.css";
// import './assets/scss/main.scss'
import Navigation from "./Components/layout/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Components/product-block/products";
import Sidebar from "./Components/layout/sidebar";
import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
