import React, { useState } from "react";
import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore';

const Cart = () => {
  const [isId, setIsId] = useState('')


  const [ dataForm, setDataForm ] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  })

  const { cartList, clearCart, totalPrice, removeItem } =
    useContext(CartContext);

  const checkout = async(e) => {
    e.preventDefault() //para que no me refresque la pagina.
    const order = {
      buyer: { //armo el objeto
        name: dataForm.name,
        surname: dataForm.surname,
        phone: dataForm.phone,
        email: dataForm.email
      },
      products: cartList.map(prod => { //mapeo los productos que tengo en el carrito.
        const {id, name: title, price} = prod //extraigo los campos
        return {id, title, price} //retorno solamente 3 (los que necesito).
      }),
      total: totalPrice()

    }
    const db = getFirestore();
    const orders = collection(db, 'orders') //la coleccion orders no existe.
    addDoc(orders, order)//es una promesa.
    .then(resp => setIsId(resp.id)) //para obtener el id a mostrarle al usuario tras la compra exitosa.
    .catch(err => console.log(err))
    .finally(() => clearCart())
  
  }

  const handleInputChange = (e) => {

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  console.log(dataForm);

  return (  
    <>
      <h5>Carrito:</h5>

      { isId && <h3>Orden generada con exito: {isId}</h3> }

      {cartList.length === 0 ? (
        <div>
          <h3>No hay productos seleccionados</h3>
          <Link to="/" className="btn-backhome">Volver al inicio</Link>
        </div>
      ) : (
        <>
          <ul>
            {cartList.map((product) => (
              <li key={product.id}>
              Nombre: {product.name} 
              <br />
              Precio: ${product.price}
              <br />
              Cantidad:{product.quant} {/* quant es la propiedad creada en itemdetail.js */}
                <button onClick={() => removeItem(product.id)}>X</button>
                {/*para agregar un parametro tengo que codearlo asi.*/}
              </li>
            ))}
          </ul>

          <div>Precio total: ${totalPrice()}</div>

          <form onSubmit={checkout}>
            <input type="text" placeholder="Nombre" name="name" value={dataForm.name} onChange={handleInputChange} />
            <input type="text" placeholder="Apellido" name="surname" value={dataForm.surname} onChange={handleInputChange} />
            <input type="email" placeholder="Correo electronico" name="email" value={dataForm.email} onChange={handleInputChange} />
            <input type="number" placeholder="Telefono" name="phone" value={dataForm.phone} onChange={handleInputChange} />
          
            <button type="submit"> Comprar</button>
          </form>

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </>
  );
};

export default Cart;
