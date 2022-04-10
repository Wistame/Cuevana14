import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
    <nav>
      <Link to="quote">Search 4 Quotes!</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
