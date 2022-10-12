import React from 'react';
import {Link} from 'react-router-dom';

function CartWidget() {
    return (
        <>
            <Link to="/cart"><button className="btn-cart"><i className='cart-logo bx bx-cart'></i></button></Link>
        </>
    )
}

export default CartWidget
