import React from "react";
import "../../App.css";
import { useEffect, useState } from "react";
import { getFetch, products } from "../../helpers/getFetch";
import { Link } from "react-router-dom";

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

      {items.map((item) => (
        <div key={item.id} className="card-container">
          <Link to={`/detail/${item.id}`}>
            <div className="card" style={{width: "18rem"}}>
              <img src={item.foto} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  ${item.price}
                </p>
                <a href="#" className="btn btn-primary">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ItemListContainer;
