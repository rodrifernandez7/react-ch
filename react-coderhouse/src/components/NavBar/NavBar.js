import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {

  return (
    <>
      <header>
        <nav>
          <Link to="/"><div className="logo">RFM</div></Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Tienda</li>
            <li className="nav-item dropwdown">
              <div
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{cursor:"pointer"}}
              >
                Categorias
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/categoria/camisas" className="dropdown-item">
                    Camisas
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/remeras" className="dropdown-item">
                    Remeras
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/pantalones" className="dropdown-item">
                    Pantalones
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/medias" className="dropdown-item">
                    Medias
                  </Link>
                </li>
                <li>
                  <Link to="/categoria/zapatillas" className="dropdown-item">
                    Zapatillas
                  </Link>
                </li>
              </ul>
            </li>
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
