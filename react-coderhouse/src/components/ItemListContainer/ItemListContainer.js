import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFetch()
      .then((data) => setItems(data)) //para guardar la respuesta(data) en el state.
      .catch((err) => console.error(err))
      .finally(() => console.log("finalizo la promesa."));
  }, []);

  console.log(items);

  return (
    <>
      <div className="saludo">{greeting}</div>
      <ItemList items={items} />
      {/* items={items} para pasarle a ItemList.js el array que almacenamos en el estado luego de la promesa */}
    </>
  );
}

export default ItemListContainer;
