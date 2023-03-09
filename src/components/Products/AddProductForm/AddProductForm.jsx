import React from "react";

import "./AddProductForm.css";
const AddProductForm = () => {
  return (
    <section className="add-product">
      <div className="container">
        {/* Form */}
        <form id="product_form">
          {/* Form group SKU */}
          <div className="form-group">
            <label htmlFor="">SKU</label>
            <input type="text" />
          </div>

          {/* Form group name */}
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>

          {/* Form group price */}
          <div className="form-group">
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>

          {/* Form group type switcher */}
          <div className="form__group">
            <label htmlFor="productType">Type Switcher</label>

            <select id="productType">
              <option value="book">Book</option>
              <option value="dvd">DVD</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProductForm;
