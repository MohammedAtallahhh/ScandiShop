import { useEffect, useState } from "react";

import { API_URL } from "../../helpers/constants";

export const useProducts = () => {
  const [products, setProducts] = useState([
    {
      sku: "123",
      name: "Book 1",
      price: 25.5,
      type: "book",
      weight: 120,
      size: null,
      height: null,
      width: null,
      length: null,
    },
  ]);
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return [products, setProducts];
};

export default useProducts;
