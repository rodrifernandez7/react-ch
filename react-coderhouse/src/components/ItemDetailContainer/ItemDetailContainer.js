import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () => {
  const { idProduct } = useParams(); //Hook para recibir los parametros de la ruta.
  console.log(idProduct);

  const[products, setProducts] = useState([]); 

  console.log(products);

  useEffect(() => {
    getFetch()
      .then((data) => setProducts(data.find((product)=> product.id === idProduct))) //para guardar en el state nada mas el producto que quiero mostrar.
      .catch((err) => console.error(err))
      .finally(() => console.log("finalizo la promesa."));
  },[]);

  // useEffect(() => {
  //     fetch('https://pokeapi.co/api/v2/')
  //     .then(respuesta => respuesta.json())
  //     .then(data => console.log(data))
  // }, [])

  // const getFetch2 = async (url) => {
  //     try {
  //         const queryJson = await fetch (url)
  //         const query = await queryJson.json()
  //         console.log(query.results);
  //     } catch (err) {
  //         console.log(err);
  //     }

  // }

  // useEffect(() => {
  //     const url = 'https://pokeapi.co/api/v2/ability/?limit=10&offset=20'
  //     getFetch2(url)
  // },[])

  return (
    <div>
        <ItemDetail product={products}/>
    </div>
  );
};

export default ItemDetailContainer;
