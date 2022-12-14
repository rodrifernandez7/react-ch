import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound404 from "./components/NotFound404/NotFound404"
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";

//BrowserRouter para poder usar todas las func de react-router-dom
//path='*' significa que si va a cualquier ruta que no existe.
//Navigate es de router-dom y indica a donde deve navegar si accediste a una ruta '*'.
//Si no pongo :idProduct me manda a 404 porque es para CAPTURAR la ruta. Mismo para :idCategoria.

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a RFM KICKS!" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/404" element={<NotFound404/>} />
          <Route path="*" element={ <Navigate to="/404" /> }/>
        </Routes>

      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;