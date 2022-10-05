import '../styling/home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
