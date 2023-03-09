import useProducts from "./useProducts";

const ProductsList = () => {
  const porducts = useProducts();
  return (
    <div className="products-list">
      <div className="container">
        {porducts.map(({ name }) => (
          <div>
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
