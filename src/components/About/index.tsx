import { Outlet, Link, Navigate } from "react-router-dom";
import './style.scss';

const About = () => {
  return (
    <div className="About">
      <nav>
        <Link to="/">Return to Homepage</Link>
      </nav>
    </div>
  );
};

export default About;
