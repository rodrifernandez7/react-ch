import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound404 from "./components/NotFound404/NotFound404"
import NavBar from "./components/NavBar/NavBar";

//BrowserRouter para poder usar todas las func de react-router-dom
//path='*' significa que si va a cualquier ruta que no existe.
//Navigate es de router-dom y indica a donde deve navegar si accediste a una ruta '*'.
//Si no pongo :idProduct me manda a 404 porque es para CAPTURAR la ruta.

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a RFM KICKS!" />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/404" element={<NotFound404/>} />


        <Route path="*" element={ <Navigate to="/404" /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;