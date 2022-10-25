import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

//detalle del producto

const ItemDetail = ({ product }) => {

  const { addItem, cartList } = useContext(CartContext);

  const [isCount, setIsCount] = useState(true); //estado seteado en true, para luego ser false y desaparecer el ItemCount.

  const onAdd = () => {
    console.log('producto agregado al carrito.');
    addItem({...product}) //sin el spred operator me quedaria un objeto dentro de otro objeto.
    setIsCount(false) //cambio el estado a false.
}
  console.log(cartList);

  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={product.foto} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">${product.price}</p>
            
            
          { //para hacer desaparecer ItemCount una vez clickeado el btn 'Agregar al carrito'.
            isCount ? <div> <ItemCount onAdd={onAdd} stock={product.stock} /> </div> //con onAdd={onAdd}, al clickear desaparece ItemCount.
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
