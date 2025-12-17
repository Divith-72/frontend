// src/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { products } from "./ProductsData.jsx";

function ProductDetails() {
  const { id } = useParams(); // get id from URL

  const product = products.find((p) => p._id === id);
  const handleAddToCart = () => {
    if (!product) return;
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find(item => item._id === product._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };
  if (product) {
    return (
      <div>
        <h2>{product.name}</h2>

        <img src={product.image} alt={product.name} />

        <p>{product.description}</p>

        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>

        <button onClick={handleAddToCart}>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    );
  } else {
    return <div>Product not found</div>;
  }
}

export default ProductDetails;