import { createContext, useState } from 'react';

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {

    //aca creo los estados y funciones globales.
    const [cartList, setCartList] = useState([]);

    const addItem = (producto) => { //recibo un producto por parametro.
        setCartList([ ...cartList, producto]) //lo agrego a setCart.
        //... para mantener todo el contenido de cartList y todo entre [] para que al clickear el boton no me pise y guarde todo en un mismo array.
    }

    const vaciarCarrito = () => {
        setCartList([]) //seteo el array vacio
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            vaciarCarrito
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider;

//children es la prop que indica todo lo que esta envolviendo CartContextProvider en App.js
//la recibo y la utilizo.