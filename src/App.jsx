import React from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { AddProductForm, ProductsList } from "./components/Products";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Home page */}
        <Route path="/" exact element={<ProductsList />} />

        {/* Add product */}
        <Route path="/add-product" element={<AddProductForm />} />
      </Routes>
    </>
  );
};

export default App;
