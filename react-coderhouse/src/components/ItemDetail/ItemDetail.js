import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

//detalle del producto

const ItemDetail = ({ item }) => { //item me llega de itemDetailContainer.
  const { addItem } = useContext(CartContext);

  const [isCount, setIsCount] = useState(true); //estado seteado en true, para luego ser false y desaparecer el ItemCount.

  const onAdd = (quant) => { //este quant llega de handleOnAdd en ItemCount.js
    addItem({ ...item, quant }); //sin el spred operator me quedaria un objeto dentro de otro objeto.
    //quant en ADDITEM es la propiedad que YO CREO en donde se va a almacenar la cantidad.
    setIsCount(false); //cambio el estado a false para que desaparezca el btn agregar al carrito cuando lo clickee.
  };

  return (
    <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body" style={{ fontSize: "15px" }}>
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>

        {
          //para hacer desaparecer ItemCount una vez clickeado el btn 'Agregar al carrito'.
          isCount ? (
            <div>
              <ItemCount onAdd={onAdd} stock={item.stock} />
            </div>
          ) : (
            <>
              <Link to="/cart">
                <button className="btn btn-primary" style={{ marginBottom: "8px", fontSize: "15px" }}>Finalizar compra</button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary" style={{ fontSize: "15px" }}>Seguir comprando</button>
              </Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;
