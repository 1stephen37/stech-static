interface Cart {
    id_product: string
    name: string
    originPrice: number,
    salePrice: number,
    image: string,
    color: string,
    memory: string,
    quantity: number,
    stock: number
}

interface User {
    id_user: string,
    name: string,
    image: string,
    accessToken: string,
    refreshToken: string,
    role: number,
    address: string,
    phone: string,
    email: string
}