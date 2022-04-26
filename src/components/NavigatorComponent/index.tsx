import {Link } from "react-router-dom";
import "./style.scss";

const Navigator = () => (
    <nav className="navigator">
        <Link className='link' to="selector">Series</Link>
        <Link className='link' to="quote">Quotes</Link>
    </nav>
  );

  export default Navigator;