// src/Products.jsx
import { Link } from "react-router-dom";
import { products } from "./ProductsData.jsx";

function Products() {
  const addToCart = (product) => {
    try {
      const raw = localStorage.getItem("cart");
      const cart = raw ? JSON.parse(raw) : [];
      cart.push({ _id: product._id, name: product.name, price: product.price, image: product.image });
      localStorage.setItem("cart", JSON.stringify(cart));
      // notify other parts of the app
      window.dispatchEvent(new Event("cartUpdated"));
      // quick visual feedback
      const el = document.getElementById(`added-${product._id}`);
      if (el) {
        el.textContent = "Added";
        setTimeout(() => (el.textContent = "Add to cart"), 1000);
      }
    } catch (e) {
      console.error("Failed to add to cart", e);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <header style={{ marginBottom: 20 }}>
        <h2 style={{ margin: 0 }}>Products</h2>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20 }}>
        {products.map((product) => (
          <div key={product._id}>
            <Link
              to={`/product/${product._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ border: "1px solid #e6e6e6", borderRadius: 8, padding: 12, background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ height: 140, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: 8 }}>
                  <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                </div>
                <h4 style={{ margin: "6px 0" }}>{product.name}</h4>
                <p style={{ margin: 0, color: "#333", fontWeight: 600 }}>₹{product.price}</p>
              </div>
            </Link>

            <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
              <button
                id={`added-${product._id}`}
                onClick={() => addToCart(product)}
                style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#0b74de", color: "#fff", cursor: "pointer" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
