import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/styleNavbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-top">
                <ul className="navbar"> 
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/galery">Galery</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;