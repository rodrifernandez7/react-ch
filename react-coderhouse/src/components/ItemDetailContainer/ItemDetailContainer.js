import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const { idProduct } = useParams() //Hook para recibir los parametros de la ruta.
    console.log(idProduct);

    return (
        <div>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer
