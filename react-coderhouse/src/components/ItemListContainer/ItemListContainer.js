import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  const {idCategoria} = useParams(); //capturo el parametro :idCategoria de App.js

  useEffect(() => {
    if(idCategoria){
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFilter = query(queryCollection, where('categoria', '==', idCategoria))
      getDocs(queryFilter) //es una promesa por lo tanto uso .then
        .then(data => setItems(data.docs.map(prod => ({ id: prod.id, ...prod.data() })))) //para armar el objeto nuevo con toda la info nueva ya que en firestore el id esta x fuera de los datos.
        .catch(err => console.error(err))
    }else{
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection) //es una promesa por lo tanto uso .then
        .then(data => setItems(data.docs.map(prod => ({ id: prod.id, ...prod.data() })))) //para armar el objeto nuevo con toda la info nueva ya que en firestore el id esta x fuera de los datos.
        .catch(err => console.error(err))
    }
  }, [idCategoria])

  //useEffect(() => {
   // if (idCategoria) { //si idCategoria existe, hago un filter a la respuesta donde filtro el producto.categoria con la categoria que me viene en el parametro de idCategoria.
    //   getFetch()
    //   .then((data) => setItems(data.filter((producto)=> producto.categoria === idCategoria))) //para guardar la respuesta(data) en el state.
    //   .catch((err) => console.error(err))
    // } else {
    //   getFetch()
      //.then((data) => setItems(data)) //para guardar la respuesta(data) en el state.
  //     .catch((err) => console.error(err))
  //   }
  // }, [idCategoria]);

  return (
    <>
      <div className="saludo">{greeting}</div>
      <ItemList items={items} />
      {/* items={items} para pasarle a ItemList.js el array que almacenamos en el estado luego de la promesa */}
    </>
  );
}

export default ItemListContainer;