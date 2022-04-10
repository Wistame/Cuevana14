import { Outlet, Link } from "react-router-dom";

const Quote = () => {
  return (
    <div>
      <p>testing text quote</p>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
};

export default Quote;
