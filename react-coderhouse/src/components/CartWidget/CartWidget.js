import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

function CartWidget() {

    const { totalQuantity } = useContext(CartContext)

    return (
        <>
            <Link to="/cart"><button className="btn-cart"><i className='cart-logo bx bx-cart'></i></button>
            { totalQuantity() !== 0 && totalQuantity() } {/*cuando totalQuantity sea 0 no muestro el numero 0, dsp si. */}
            </Link>
        </>
    )
}

export default CartWidget
