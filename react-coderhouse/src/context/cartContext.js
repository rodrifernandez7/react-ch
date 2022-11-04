import { createContext, useState } from 'react';

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {

    //aca creo los estados y funciones globales.
    const [cartList, setCartList] = useState([]);

    const addItem = (item) => { //recibo un producto por parametro.
        console.log(item); //item traigo de ItemDetail.js ya con la propiedad quant creada.
        isInCart(item)
    }

    const clearCart = () => {
        setCartList([]) //seteo el array vacio
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum + (prod.quant * prod.price),0)
    }

    const totalQuantity = () => { //numerito al lado del logo del cart.
        return cartList.reduce((acum, prod) => acum += prod.quant, 0)//+= significa que al valor q ya tenga 'acum', se le debe sumar prod.quantity.
    }

    const isInCart = (item) => {
        const index = cartList.findIndex(prod => prod.id === item.id) //esta function devuelve el indice y si no lo encuentra devuelve -1.
        if(index === -1){
            //si NO esta... (el index sera -1)

            setCartList([ ...cartList, item]) //lo agrego a setCartList.
            //... para mantener todo el contenido de cartList y todo entre [] para que al clickear el boton no me pise y guarde todo en un mismo array.
        }else{
            cartList[index].quant += item.quant //item.quant = es como si agregara otra vez el producto entonces toma el numero de la propiedad quant y se lo suma.
            console.log(item.quant)
            setCartList([...cartList])
        }
    }

    const removeItem = (id) => {
        setCartList( cartList.filter(item => item.id !== id))
    } // vuelve a setear el cartList con los items que tengan distinto id al del prod que me llega.

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clearCart,
            totalPrice,
            totalQuantity,
            removeItem
        }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContextProvider;

//children es la prop que indica todo lo que esta envolviendo CartContextProvider en App.js
//la recibo y la utilizo.