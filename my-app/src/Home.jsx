import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products!</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}

export default Home;
