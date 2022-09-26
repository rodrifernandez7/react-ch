import React from 'react'
import '../App.css'

function ItemListContainer({greeting}) {
    return (
        <div className="saludo">
            { greeting }
        </div>
    )
}

export default ItemListContainer;
