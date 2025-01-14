import React from "react";
import { Link } from "react-router-dom";


function Header () {

    return (
        <div className="Header">
            <Link to="/"> Home </Link>
            <Link to="/trade"> Trade </Link>
            <Link to="/login"> Login </Link>
            <Link to="/user/settings"> Settings </Link>
        </div>
    );
}
export default Header;

