import { Outlet, Link } from "react-router-dom";

const NotFound = () => {
    return (<div>
        <div>
            <h2>Page Not Found</h2>
        </div>
<nav>
<Link to="/">HomePage</Link>
</nav>
</div>

    )
}


export default NotFound;