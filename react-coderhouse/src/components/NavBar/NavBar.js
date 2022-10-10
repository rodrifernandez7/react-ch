import React from "react";
import { Link } from "react-router-dom"
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <header>
        <nav>
            <div className="logo">
                RFM
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Tienda</li>
                <li>Nosotros</li>
                <li>Contacto</li>
                <CartWidget />
            </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
