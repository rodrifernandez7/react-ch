import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { getFetch } from "../../helpers/getFetch";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { idProduct } = useParams(); //Hook para recibir los parametros de la ruta. Es de react-router-dom. 

  const[item, setItem] = useState([]); 

  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', idProduct)
    getDoc(queryDoc) //getDoc porque quiero traer UNO solo.
    .then(resp => setItem({id: resp.id, ...resp.data()})) //al igual que en ItemListContainer.
    .catch(err => console.log(err));
  })
  
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  );
};

export default ItemDetailContainer;
 