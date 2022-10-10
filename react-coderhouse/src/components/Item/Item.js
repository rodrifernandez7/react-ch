import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({item}) {
  return (
    <>
      <div key={item.id} >
        <Link to={`/detail/${item.id}`}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">${item.price}</p>
              <Link to="*" className="btn btn-primary">
                Añadir al carrito
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
