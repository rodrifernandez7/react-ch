import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

//detalle del producto

const ItemDetail = ({ product }) => {

  const [isCount, setIsCount] = useState(true);

  const onAdd = () => {
    console.log('producto agregado al carrito.');
    setIsCount(false)
}

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={product.foto} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            
            
          { //para hacer desaparecer ItemCount una vez clickeado el btn 'Agregar al carrito'.
            isCount ? <div> <ItemCount onAdd={onAdd} stock={product.stock} /> </div>
            :
            <>
            <Link to='/cart'><button className="btn btn-primary">Finalizar compra</button></Link>
            <Link to='/'><button className="btn btn-primary">Seguir comprando</button></Link>
            </>
          }

        </div>
  </div>
  );
};

export default ItemDetail;
