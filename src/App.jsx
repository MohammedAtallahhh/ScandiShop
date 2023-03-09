import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Layout";

import { AddProductForm, ProductsList } from "./components/Products";

const App = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route
        path="/"
        exact
        element={
          <>
            <Navbar logo="Product List">
              <Link
                className="btn btn-primary"
                id="add-product-btn"
                to="/add-product"
              >
                ADD
              </Link>
              <button className="btn btn-danger" id="delete-product-btn">
                MASS DELETE
              </button>
            </Navbar>

            <ProductsList />
          </>
        }
      />

      {/* Add product */}
      <Route
        path="/add-product"
        element={
          <>
            <Navbar logo="Product Add">
              <button className="btn btn-primary" id="save-product">
                Save
              </button>
              <Link className="btn btn-danger" id="cancel-product" to="/">
                Cancel
              </Link>
            </Navbar>
            <AddProductForm />
          </>
        }
      />
    </Routes>
  );
};

export default App;
