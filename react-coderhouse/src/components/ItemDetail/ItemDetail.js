import React from 'react'

//detalle del producto

const ItemDetail = ({product}) => {
    return (
        <div>
            {product.name}
            {product.price}
        </div>
    )
}

export default ItemDetail