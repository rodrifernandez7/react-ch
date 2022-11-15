import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ item }) {
  return (
    <>
      <Link to={`/item/${item.id}`}>
        <div className="card" style={{ width: "15rem", margin: "25px"}}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "15px" }}>
              {item.name}
            </h5>
            <p className="card-text">${item.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Item;
