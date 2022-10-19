import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () => {
  const { idProduct } = useParams(); //Hook para recibir los parametros de la ruta. Es de react-router-dom.
  // console.log(idProduct);

  const[products, setProducts] = useState([]); 

  useEffect(() => {
    getFetch()
      .then((data) => setProducts(data.find((product)=> product.id === idProduct))) //para guardar en el state nada mas el producto que quiero mostrar.
      .catch((err) => console.error(err))
      // .finally(() => console.log("finalizo la promesa."));
  },[]);

  return (
    <div>
        <ItemDetail product={products}/>
    </div>
  );
};

export default ItemDetailContainer;
