import React, {useState} from "react";
import { Link } from "react-router-dom";

function NavBar(){
    const [open, setOpen] = useState(false);
    return (
      <nav className="nav">
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
        <i
          className={open ? "fas fa-bars close" : "fas fa-bars open"}
          onClick={() => setOpen(true)}
        ></i>
        <i
          className={open ? "fas fa-times open" : "fas fa-times close"}
          onClick={() => setOpen(false)}
        ></i>
      </nav>
    );
}

export default NavBar;