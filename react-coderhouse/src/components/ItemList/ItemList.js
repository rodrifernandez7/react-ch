import React from "react";
import Item from "../Item/Item"

const ItemList = ({items}) => { //recibo la prop enviada de ItemListContainer.js (las props siempre entre{}).
  return (
    <div className="card-container">
      {items.map((item) => (
        <Item item={item}/>
      ))}
    </div>
  );
};

export default ItemList;
