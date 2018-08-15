import {Link} from "react-router-dom";
import "../App.css";
import React from "react";



const Navbar = () =>(
    <div>
        <Link to="/gallery">Gallery</Link>
        <Link to="/submitArt">Submit Art</Link>
    </div>
)

export default Navbar;