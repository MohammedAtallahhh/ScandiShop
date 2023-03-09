import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../../helpers/constants";

import { Navbar } from "../../Layout";
import useProducts from "../useProducts";

import "./ProductList.css";
const ProductsList = () => {
  const porducts = useProducts();
  const [skus, setSkus] = useState([]);

  const handleDeleteSelected = async () => {
    try {
      let res = await axios.delete(`${API_URL}/products`, { data: skus });
      console.log({ res });
    } catch (err) {
      console.log({ err });
    }
  };

  const handleCheckCliked = (e, sku) => {
    if (e.target.checked) {
      setSkus((prev) => [...prev, sku]);
    } else {
      setSkus((prev) => prev.filter((s) => sku !== s));
    }
  };

  return (
    <>
      <Navbar logo="Product List">
        <Link
          className="btn btn-primary"
          id="add-product-btn"
          to="/add-product"
        >
          ADD
        </Link>
        <button
          className="btn btn-danger"
          id="delete-product-btn"
          onClick={handleDeleteSelected}
        >
          MASS DELETE
        </button>
      </Navbar>
      <div className="products-list">
        <div className="container">
          {porducts.map(
            ({
              sku,
              name,
              price,
              type,
              weight,
              size,
              height,
              width,
              length,
            }) => {
              return (
                <div className="product" key={sku}>
                  {/* Product checkbox */}
                  <input
                    type="checkbox"
                    id="check"
                    className="product-check"
                    onChange={(e) => handleCheckCliked(e, sku)}
                  />

                  {/* SKU */}
                  <h4>{sku.toUpperCase()}</h4>
                  {/* Name */}
                  <h3>{name}</h3>
                  {/* Price */}
                  <h3>${price}</h3>
                  {/* Attributes */}
                  {type === "book" && <h4>Weight: {weight} KG</h4>}
                  {type === "dvd" && <h4>Size: {size} MB</h4>}
                  {type === "furniture" && (
                    <div className="dimensions">
                      <h4>Dimensions:</h4>

                      <span>
                        {height} x {width} x {length}
                      </span>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
