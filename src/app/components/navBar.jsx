import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex mb-2">
            <div className="p-2 bd-highlight">
                <Link to="/">Main</Link>
            </div>

            <div className="p-2 bd-highlight">
                <Link to="/login">Login</Link>
            </div>

            <div className="p-2 bd-highlight">
                <Link to="/users">Users</Link>
            </div>
        </div>
    );
};

export default NavBar;
