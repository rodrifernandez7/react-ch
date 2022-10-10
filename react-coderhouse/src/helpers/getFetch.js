export const products = [
    {
        id: '1',
        name: 'Camisa',
        price: 25,
        stock: 5,
        foto: "../public/assets/img/camisa.jpeg"
    },
    { 
        id: '2',
        name: 'Remera',
        price: 12,
        stock: 10,
        foto: "../public/assets/img/remera.jpeg"
    },
    {
        id: '3',
        name: 'Pantalon',
        price: 30,
        stock: 4,
        foto: "../public/assets/img/pantalon.jpeg"
    },
    {
        id: '4',
        name: 'Medias',
        price: 5,
        stock: 20,
        foto: "../public/assets/img/medias.webp"
    },
    {
        id: '5',
        name: 'zapatillas',
        price: 50,
        stock: 3,
        foto: "../public/assets/img/zapatillas.webp"
    }
]

export const getFetch = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(products)
        },2000)
    })
}
