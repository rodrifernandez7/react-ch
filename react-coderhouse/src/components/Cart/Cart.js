import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const Cart = () => {

  const { cartList, vaciarCarrito } = useContext(CartContext)

  return (
    <>
      <h5>Carrito:</h5>
      <ul>
        {cartList.map((product) => <li> Nombre: {product.name} Precio: ${product.price} Cantidad: {product.cantidad}</li>)}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </>
  )
}

export default Cart