import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({onAdd, stock}) => {

    const [quant, setQuant] = useState(1)

    const addQuant = () => {
        if (quant < stock ) {
            setQuant(quant +1)
        }
    }

    const subtractQuant = () => {
        if (quant > 1) {
            setQuant(quant -1)
        }
    }

    return (
        <>
        <div className="quantity-container">
            <input onClick={subtractQuant} data-quantity="pop" type="submit" value="-" className="btn-quantity reset" name="pop" />
            {/* <i class='bx bx-minus'></i> */}
            <input autoComplete="off" data-quantity="input" type="tel" className="input-quantity" value={quant} name="quantity" disabled />
            {/* <i class='bx bx-plus'></i> */}
            <input onClick={addQuant} data-quantity="push" type="submit" value="+" className="btn-quantity reset " name="push" />
        
        </div>

        <button onClick={onAdd} className="btn btn-primary">Añadir al carrito</button>
        </>
    )
}

export default ItemCount
