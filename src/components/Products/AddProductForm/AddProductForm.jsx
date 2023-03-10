import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { FormGroup } from "../../common";
import { Navbar } from "../../Layout";

import { validateForm } from "./validateForm";
import { API_URL } from "../../../helpers/constants";

import "./AddProductForm.css";
import { toast } from "react-hot-toast";
const AddProductForm = () => {
  // Form state
  const [formState, setFormState] = useState({
    sku: "",
    name: "",
    price: "",
    weight: "",
    size: "",
    height: "",
    width: "",
    length: "",
    type: "book",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    // Set number inputs to be numbers on change
    setFormState({ ...formState, [name]: type === "number" ? +value : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const neededFormData = getNeededFormData();
    const errors = validateForm(neededFormData);
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post(`${API_URL}/products`, neededFormData);
      setFormState({
        sku: "",
        name: "",
        price: "",
        weight: "",
        size: "",
        height: "",
        width: "",
        length: "",
        type: neededFormData.type,
      });

      toast.success("Product created successfully");
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err.response.data.error);
    }
  };

  const getNeededFormData = useCallback(() => {
    const { sku, name, price, type } = formState;
    let typesMap = {
      book: ["weight"],
      dvd: ["size"],
      furniture: ["height", "width", "length"],
    };

    return {
      sku,
      name,
      price,
      type,
      // Get only attributes for the selected type
      ...typesMap[type].reduce(
        (acc, cur) => ({ ...acc, [cur]: formState[cur] }),
        {}
      ),
    };
  }, [formState]);

  return (
    <>
      <Navbar logo="Product Add">
        <button
          className="btn btn-primary"
          id="save-product"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Save
        </button>
        <Link className="btn btn-danger" id="cancel-product" to="/">
          Cancel
        </Link>
      </Navbar>

      <section className="add-product">
        <div className="container">
          {/* Form */}
          <form id="product_form">
            <Link to="/" className="back-button">
              &#129104; Back to homepage
            </Link>
            {/* Form group SKU */}
            <FormGroup
              label="SKU"
              id="sku"
              value={formState.sku}
              onChange={handleInputChange}
              name="sku"
              error={errors["sku"]}
            />

            {/* Form group name */}
            <FormGroup
              label="Name"
              id="name"
              value={formState.name}
              onChange={handleInputChange}
              name="name"
              error={errors["name"]}
            />

            {/* Form group price */}
            <FormGroup
              label="Price"
              type="number"
              id="price"
              value={formState.price}
              onChange={handleInputChange}
              name="price"
              error={errors["price"]}
            />

            {/* Form group type switcher */}
            <div className="form-group">
              <label htmlFor="productType">Type Switcher</label>

              <select
                id="productType"
                value={formState.type}
                onChange={handleInputChange}
                name="type"
              >
                <option value="book">Book</option>
                <option value="dvd">DVD</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>

            {/* Type-specific attributes */}
            {formState.type === "book" && (
              <FormGroup
                type="number"
                id="weight"
                name="weight"
                label="Weight"
                value={formState.weight}
                onChange={handleInputChange}
                error={errors["weight"]}
              />
            )}
            {formState.type === "dvd" && (
              <FormGroup
                type="number"
                id="size"
                name="size"
                label="Size"
                value={formState.size}
                onChange={handleInputChange}
                error={errors["size"]}
              />
            )}
            {formState.type === "furniture" && (
              <>
                <FormGroup
                  type="number"
                  id="height"
                  name="height"
                  label="Height"
                  value={formState.height}
                  onChange={handleInputChange}
                  error={errors["height"]}
                />
                <FormGroup
                  type="number"
                  id="width"
                  name="width"
                  label="Width"
                  value={formState.width}
                  onChange={handleInputChange}
                  error={errors["width"]}
                />
                <FormGroup
                  type="number"
                  id="length"
                  name="length"
                  label="Length"
                  value={formState.length}
                  onChange={handleInputChange}
                  error={errors["length"]}
                />
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProductForm;
