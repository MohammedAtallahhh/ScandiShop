import { Link } from "react-router-dom";

import { Navbar } from "../Layout";
import useProducts from "./useProducts";

const ProductsList = () => {
  const porducts = useProducts();
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
        <button className="btn btn-danger" id="delete-product-btn">
          MASS DELETE
        </button>
      </Navbar>
      <div className="products-list">
        <div className="container">
          {porducts.map(({ name }) => (
            <div>
              <h4>{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
