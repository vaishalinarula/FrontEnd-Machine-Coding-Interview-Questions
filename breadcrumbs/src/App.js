import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-detail";
import Breadcrumbs from "./components/Breadcrumbs";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <h1>BreadCrumbs</h1>
          <Breadcrumbs />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
