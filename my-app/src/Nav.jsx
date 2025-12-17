import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [count, setCount] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw).length : 0;
    } catch (e) {
      return 0;
    }
  });

  useEffect(() => {
    const onUpdate = () => {
      try {
        const raw = localStorage.getItem("cart");
        setCount(raw ? JSON.parse(raw).length : 0);
      } catch (e) {
        setCount(0);
      }
    };

    // custom event from same-tab writes
    window.addEventListener("cartUpdated", onUpdate);
    // storage event for other tabs/windows
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("cartUpdated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "linear-gradient(90deg,#fafafa,#f3f3ff)", borderBottom: "1px solid #eaeaea" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link to="/" style={{ fontWeight: 700, color: "#222", textDecoration: "none" }}>MyStore</Link>
        <Link to="/products" style={{ margin: "0 8px" }}>Products</Link>
        <Link to="/contact" style={{ margin: "0 8px" }}>Contact</Link>
      </div>

      <div>
        <Link to="/cart" style={{ position: "relative", textDecoration: "none", color: "#111" }}>
          Cart
          <span style={{ marginLeft: 8, background: "#ff5252", color: "#fff", borderRadius: 999, padding: "2px 8px", fontSize: 12 }}>{count}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
