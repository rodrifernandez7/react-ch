import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({onAdd, stock}) => {

    const [quantity, setQuantity] = useState(1)

    const addQuant = () => {
        if (quantity < stock ) {
            setQuantity(quantity +1)
        }
    }

    const subtractQuant = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    const handleOnAdd = () => {
        onAdd(quantity) //le paso a la func el valor de quantity que recibe en la linea 14 de ItemDetail.js
    }

    return (
        <>
        <div className="quantity-container">
            <input onClick={subtractQuant} data-quantity="pop" type="submit" value="-" className="btn-quantity reset" name="pop" />
            
            <input autoComplete="off" data-quantity="input" type="tel" className="input-quantity" value={quantity} name="quantity" disabled />
            
            <input onClick={addQuant} data-quantity="push" type="submit" value="+" className="btn-quantity reset " name="push" />
        
        </div>

        <button onClick={handleOnAdd} className="btn btn-primary">Añadir al carrito</button>
        </>
    )
}

export default ItemCount
