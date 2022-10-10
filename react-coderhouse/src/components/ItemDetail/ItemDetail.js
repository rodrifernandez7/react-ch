import React from 'react'

//detalle del producto

const ItemDetail = ({productos = {
    id: 1,
    name:'gorra',
    price: 100,
    categoria: 'gorras',
    stock: 10,
    foto: "https://http2.mlstatic.com/D_NQ_NP_842761-MLA45601779395_042021-W.jpg"
}}) => {
    return (
        <div>
            <h5>Este es el detalle de cada producto.</h5>
        </div>
    )
}

export default ItemDetail
