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

interface ProductBox {
    id_product: number;
    id_brand: string;
    name: string,
    image: string,
    brand_name: string,
    price: string,
    sale_off: number,
    views: string,
    memory: string,
    color: string,
    status: number,
    created_at: string,
    updated_at: string,
}
