import { useEffect, useState } from "react";

import { API_URL } from "../../helpers/constants";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
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
