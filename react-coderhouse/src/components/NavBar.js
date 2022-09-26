import React from "react";
import "../App.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <header>
        <nav>
            <div className="logo">
                RFM
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <CartWidget />
            </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
