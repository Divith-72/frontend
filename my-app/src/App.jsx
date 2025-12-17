
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
