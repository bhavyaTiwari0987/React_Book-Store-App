import React from "react";
import style from "../public/CSS/Navbar.module.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className={style.navComponent}>
      <ul>
        <div>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/BookListing">BOOK LIST</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default navbar;
