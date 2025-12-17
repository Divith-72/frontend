// src/Products.jsx
import { Link } from "react-router-dom";
import { products } from "./ProductsData.jsx";

function Products() {
  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            style={{  color: "black" }}
          >
            <div style={{ border: "1px solid #ccc", padding: "10px" }}>
              <img src={product.image} alt={product.name} width="150" />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
