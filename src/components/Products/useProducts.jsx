import { useEffect, useState } from "react";

import axios from "axios";

import { API_URL } from "../../helpers/constants";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/products`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return [products, setProducts];
};

export default useProducts;
