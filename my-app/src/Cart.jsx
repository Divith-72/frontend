import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <img src={item.image} alt={item.name} width="100" />
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
