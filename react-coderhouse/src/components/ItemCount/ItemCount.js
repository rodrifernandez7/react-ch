import React from 'react'
import './ItemCount.css';

const ItemCount = () => {
    return (
        <div className="quantity-container">
            <input data-quantity="pop" type="submit" value="-" class="btn-quantity reset" name="pop"></input>
            {/* <i class='bx bx-minus'></i> */}
            <input autocomplete="off" data-quantity="input" type="tel" className="input-quantity" value="1" name="quantity" disabled></input>
            {/* <i class='bx bx-plus'></i> */}
            <input data-quantity="push" type="submit" value="+" class="btn-quantity reset " name="push"></input>
        </div>
    )
}

export default ItemCount
