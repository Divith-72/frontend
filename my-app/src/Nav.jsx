import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/products" style={{ margin: "0 10px" }}>Products</Link>
      <Link to="/cart" style={{ margin: "0 10px" }}>Cart</Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
    </nav>
  );
}

export default Nav;
