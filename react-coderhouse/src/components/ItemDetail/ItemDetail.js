import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

//detalle del producto

const ItemDetail = ({ product }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={product.foto} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            <div> <ItemCount /> </div>
            <button className="btn btn-primary">Comprar</button>
        </div>
  </div>
  );
};

export default ItemDetail;
