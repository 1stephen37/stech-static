export const ApiUrl = 'http://localhost:3000/api/';
export const ApiImage = '/images/uploads/';
export const GoogleApiUrl = 'https://www.googleapis.com/oauth2/v1/userinfo';

export const tableName = {
    brands: 'brands',
    users: 'users',
    products: 'products',
    reviews: 'reviews',
    deliveries: "deliveries",
    vouchers: "vouchers",
    shop: 'shop',
    orders: 'orders',
    dashboard: 'dashboard',
    banners: "banners",
}

export const clientId = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Freact-oauth.vercel.app%3Fid%3Dauth641516&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow";

export const FetchGet = (url: string) => fetch(url, {
    headers: {'Content-Type': 'application/json'},
    method: "GET"
}).then(res => res.json()).catch(err => err.message);

export const FetchGetWithContinueUrl = async (url: string, {arg}: { arg: { continueUrl?: string } }) => {
    console.log(arg.continueUrl);
    return fetch(url + arg?.continueUrl, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchGetWithToken = async (url: string, {arg}: { arg: { token: string } }) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchGetWithTokenAndDynamicIdUser = async (url: string, {arg}: {
    arg: { token: string, id_user: string }
}) => {
    return fetch(url + `?id_user=${arg.id_user}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchPostWithTokenFormData = async (url: string, {arg}: {
    arg: { token: string, data: any }
}) => {
    const formData = new FormData();
    for (const key in arg.data) {
        formData.append(key, arg.data[key]);
    }
    console.log(JSON.stringify(formData));
    return fetch(url, {
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": "Bearer " + arg.token
        },
        method: 'POST',
        body: formData
    }).then(res => res.json())
        .catch((err) => err.message)
}


// export const FetchPost = async (url: string, { body } : {body : {}}) => fetch(url, {
//     headers: {'Content-Type': 'application/json'},
//     method: "POST",
//     body: JSON.stringify(body)
// }).then(res => res.json());

export async function FetchPostWithToken(url: string, {arg}: { arg: { token: string, data: any } }) {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'POST',
        body: JSON.stringify(arg.data),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchPatchWithTokenUpdate(url: string, {arg}: { arg: { token: string, data: any, id: string } }) {
    return fetch(url + `/update/${arg.id}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'PATCH',
        body: JSON.stringify(arg.data),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchDeleteWithTokenDelete(url: string, {arg}: { arg: { token: string, id: string } }) {
    return fetch(url + `/delete/${arg.id}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'DELETE',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchPost(url: string, {arg}: { arg: {} }) {
    return fetch(url, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(arg),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const transformCurrency = (value: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'code',
    }).format(value);
}


export const ProductStatus = {
    0: "hết hàng",
    1: "đang bán",
    2: "xảy ra lỗi"
} as const;

export const DeliveryStatus = {
    0: "ngưng hoạt động",
    1: "đang hoạt động",
    2: "đang quá tải"
} as const;

export const UserRole = {
    0: "khách hàng",
    1: "quản trị viên"
} as const;

export const BrandStatus = {
    0: "tạm ngừng kinh doanh",
    1: "đang hoạt động"
} as const;

export const OrderStatus = {
    0: "Chờ xác nhận",
    1: "Đã xác nhận",
    2: "Đang giao hàng",
    3: "Đã giao hàng",
    4: "Đã hủy",
} as const;

export type UserRoleKey = keyof typeof UserRole;

export type BrandStatusKey = keyof typeof BrandStatus;

export type OrderStatusKey = keyof typeof OrderStatus;

export type ProductStatusKey = keyof typeof ProductStatus;

export type DeliveryStatusKey = keyof typeof DeliveryStatus;

export const products : ProductBox[] = [
    {
        "id_product": 1,
        "id_brand": "1",
        "name": "iPhone 11 | Chính hãng VN/A",
        "sale_off": 10,
        "views": "500",
        "status": 1,
        "created_at": "2024-07-05",
        "updated_at": "2024-07-05",
        "image": "iphone-11.webp",
        "brand_name": "apple",
        "memory": "4GB/64GB",
        "color": "Trắng",
        "price": "11990000"
    },
    {
        "id_product": 2,
        "id_brand": "1",
        "name": "iPhone 12 mini | Chính hãng VN/A",
        "sale_off": 15,
        "views": "200",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone-12-mini_white.webp",
        "brand_name": "apple",
        "memory": "64GB",
        "color": "Trắng",
        "price": "14990000"
    },
    {
        "id_product": 3,
        "id_brand": "1",
        "name": "iPhone XR | Chính hãng VN/A",
        "sale_off": 0,
        "views": "300",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "_0004_iphonexr-black-360_us-en-screen.webp",
        "brand_name": "apple",
        "memory": "64GB",
        "color": "Đen",
        "price": "11990000"
    },
    {
        "id_product": 4,
        "id_brand": "1",
        "name": "iPhone 13 Pro | Chính hãng VN/A",
        "sale_off": 10,
        "views": "490",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone13proxam1282_61_8_2_1_8.webp",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Xám",
        "price": "23990000"
    },
    {
        "id_product": 5,
        "id_brand": "1",
        "name": "iPhone 13 Pro Max | Chính hãng VN/A",
        "sale_off": 25,
        "views": "3200",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone-13-pro-max-128GB-vang.webp",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Vàng",
        "price": "28900000"
    },
    {
        "id_product": 6,
        "id_brand": "1",
        "name": "iPhone 12 Pro I Chính hãng VN/A",
        "sale_off": 20,
        "views": "100",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone-12-pro-max_3__9_4_dark_blue-12.png",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Xanh dương đậm",
        "price": "26990000"
    },
    {
        "id_product": 7,
        "id_brand": "1",
        "name": "iPhone 12 | Chính hãng VN/A",
        "sale_off": 27,
        "views": "158",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone12_64GB-green2_241.webp",
        "brand_name": "apple",
        "memory": "64GB",
        "color": "Xanh lá",
        "price": "15990000"
    },
    {
        "id_product": 8,
        "id_brand": "1",
        "name": "iPhone 12 Pro Max | Chính hãng VN/A",
        "sale_off": 0,
        "views": "256",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone-12-pro-max-128GB-Bac-3_223_1.webp",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Bạc",
        "price": "28990000"
    },
    {
        "id_product": 9,
        "id_brand": "1",
        "name": "iPhone 13 | Chính hãng VN/A",
        "sale_off": 0,
        "views": "658",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone13-128GB-hongh_ng_4.webp",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Hồng",
        "price": "18990000"
    },
    {
        "id_product": 10,
        "id_brand": "1",
        "name": "iPhone 14 Pro | Chính hãng VN/A",
        "sale_off": 0,
        "views": "850",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "iphone-14-pro-128GB-blackx_m_16.webp",
        "brand_name": "apple",
        "memory": "128GB",
        "color": "Đen",
        "price": "23590000"
    },
    {
        "id_product": 11,
        "id_brand": "2",
        "name": "Samsung Galaxy A05",
        "sale_off": 0,
        "views": "89",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "samsung-a05-trang-4GB-128Gb_1.webp",
        "brand_name": "samsung",
        "memory": "4GB/128GB",
        "color": "Bạc",
        "price": "3000000"
    },
    {
        "id_product": 12,
        "id_brand": "2",
        "name": "Samsung Galaxy Z Flip5",
        "sale_off": 30,
        "views": "5000",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "samsung-z-lip5_green_4GB_128GB_1.webp",
        "brand_name": "samsung",
        "memory": "8GB/128GB",
        "color": "Xanh lá",
        "price": "25990000"
    },
    {
        "id_product": 13,
        "id_brand": "2",
        "name": "Samsung Galaxy S23 FE 5G",
        "sale_off": 17,
        "views": "50",
        "status": 1,
        "created_at": "2024-07-06",
        "updated_at": "2024-07-06",
        "image": "samsung-galaxy-s23-fe-tim-8GB_128Gb_6_.webp",
        "brand_name": "samsung",
        "memory": "8GB/128GB",
        "color": "Tím",
        "price": "14890000"
    },
    {
        "id_product": 14,
        "id_brand": "2",
        "name": "Samsung Galaxy S24",
        "sale_off": 15,
        "views": "500",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "galaxy-s24-tim-8GB-256GB_3.webp",
        "brand_name": "samsung",
        "memory": "8GB/256GB",
        "color": "Tím",
        "price": "22990000"
    },
    {
        "id_product": 15,
        "id_brand": "2",
        "name": "Samsung Galaxy S24 Ultra",
        "sale_off": 10,
        "views": "570",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "galaxy-s24-ultra-den-12GB-256GB-1_1_3.webp",
        "brand_name": "samsung",
        "memory": "12GB/256GB",
        "color": "Đen",
        "price": "33990000"
    },
    {
        "id_product": 16,
        "id_brand": "2",
        "name": "Samsung Galaxy Fold5",
        "sale_off": 10,
        "views": "650",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "samsung-galaxy-z-fold-5-blue-12GB-256gb_1.webp",
        "brand_name": "samsung",
        "memory": "12GB/256GB",
        "color": "Xanh dương",
        "price": "40990000"
    },
    {
        "id_product": 17,
        "id_brand": "2",
        "name": "Samsung Galaxy S22",
        "sale_off": 0,
        "views": "48",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "sm-s901_galaxys22_front_phantomwhite-8GB-128GB_211122.webp",
        "brand_name": "samsung",
        "memory": "8GB/128GB",
        "color": "Trắng",
        "price": "21990000"
    },
    {
        "id_product": 18,
        "id_brand": "2",
        "name": "Samsung Galaxy M34 5G",
        "sale_off": 0,
        "views": "58",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "samsung-m34-drakblue-8GB-128GB-cb_1.webp",
        "brand_name": "samsung",
        "memory": "8GB/128GB",
        "color": "Xanh đậm",
        "price": "7990000"
    },
    {
        "id_product": 19,
        "id_brand": "2",
        "name": "Samsung Galaxy A55 5G",
        "sale_off": 0,
        "views": "85",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "sm-a556_galaxy_a55_awesome_lilac-tim-8GB-128GB_ui_1.webp",
        "brand_name": "samsung",
        "memory": "8GB/128GB",
        "color": "TÍm",
        "price": "9990000"
    },
    {
        "id_product": 20,
        "id_brand": "2",
        "name": "Samsung Galaxy S24 Plus",
        "sale_off": 10,
        "views": "80",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "galaxy-s24-plus-vang-12GB-258GB_2.webp",
        "brand_name": "samsung",
        "memory": "12GB/256GB",
        "color": "Vàng",
        "price": "26990000"
    },
    {
        "id_product": 21,
        "id_brand": "3",
        "name": "Xiaomi 11 Lite 5G NE",
        "sale_off": 0,
        "views": "80",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-11-lite-5g-white-9GB-128GB-014_1_2.webp",
        "brand_name": "xiaomi",
        "memory": "8GB/128GB",
        "color": "Trắng Swarovski",
        "price": "9490000"
    },
    {
        "id_product": 22,
        "id_brand": "3",
        "name": "Xiaomi POCO X6 Pro 5G",
        "sale_off": 0,
        "views": "847",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-poco-x6-pro-5g-black-8GB-256GB-t_i_xu_ng_19__5_4.webp",
        "brand_name": "xiaomi",
        "memory": "8GB/256GB",
        "color": "Đen",
        "price": "9990000"
    },
    {
        "id_product": 23,
        "id_brand": "3",
        "name": "Xiaomi 14 Ultra 5G",
        "sale_off": 0,
        "views": "80",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-14-ultra-black-16GB-512GB-1.webp",
        "brand_name": "xiaomi",
        "memory": "16GB/512GB",
        "color": "Đen",
        "price": "29900000"
    },
    {
        "id_product": 24,
        "id_brand": "3",
        "name": "Xiaomi 13T Pro 5G",
        "sale_off": 10,
        "views": "857",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-13t-pro-5g-black_-12GB-512GB3__1_1.webp",
        "brand_name": "xiaomi",
        "memory": "12GB/512GB",
        "color": "Đen",
        "price": "16990000"
    },
    {
        "id_product": 25,
        "id_brand": "3",
        "name": "Xiaomi 13T",
        "sale_off": 15,
        "views": "957",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-13t-black-12GB-256GB_2_1.webp",
        "brand_name": "xiaomi",
        "memory": "12GB/256GB",
        "color": "Đen",
        "price": "12990000"
    },
    {
        "id_product": 26,
        "id_brand": "3",
        "name": "Xiaomi Redmi Note 12 Pro 5G",
        "sale_off": 20,
        "views": "6900",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-redmi-note-12-pro-5G-8GB-256GB-gtt7766_9__2.webp",
        "brand_name": "xiaomi",
        "memory": "8GB/256GB",
        "color": "Xanh dương",
        "price": "9490000"
    },
    {
        "id_product": 27,
        "id_brand": "3",
        "name": "Xiaomi Redmi Note 12 Pro 4G",
        "sale_off": 15,
        "views": "958",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "redmi-note-12-pro-4g-1-xanh-nhat-8GB-256GB_1.webp",
        "brand_name": "xiaomi",
        "memory": "8GB/256GB",
        "color": "Xanh dương nhạt",
        "price": "7990000"
    },
    {
        "id_product": 28,
        "id_brand": "3",
        "name": "Xiaomi Redmi Note 12",
        "sale_off": 10,
        "views": "585",
        "status": 1,
        "created_at": "2024-07-07",
        "updated_at": "2024-07-07",
        "image": "xiaomi-redmi-note-12-4GB-128GB-xam-rgt76878_1__2.webp",
        "brand_name": "xiaomi",
        "memory": "4GB/128GB",
        "color": "Xám",
        "price": "4990000"
    },
    {
        "id_product": 29,
        "id_brand": "3",
        "name": "Xiaomi POCO M6",
        "sale_off": 0,
        "views": "1500",
        "status": 1,
        "created_at": "2024-07-09",
        "updated_at": "2024-07-09",
        "image": "poco-m6-den-6GB-128GB.webp",
        "brand_name": "xiaomi",
        "memory": "6GB/128GB",
        "color": "Đen",
        "price": "4290000"
    },
    {
        "id_product": 30,
        "id_brand": "3",
        "name": "Xiaomi Redmi Note 11 Pro Plus 5G",
        "sale_off": 0,
        "views": "1200",
        "status": 1,
        "created_at": "2024-07-09",
        "updated_at": "2024-07-09",
        "image": "xiaomi-11-pro-plus-5G-black-8GB-256GB-1.webp",
        "brand_name": "xiaomi",
        "memory": "8GB/256GB",
        "color": "Đen",
        "price": "6000000"
    },
    {
        "id_product": 31,
        "id_brand": "4",
        "name": "OPPO Reno10 Pro Plus 5G",
        "sale_off": 10,
        "views": "1580",
        "status": 1,
        "created_at": "2024-07-09",
        "updated_at": "2024-07-09",
        "image": "oppo-reno10-pro-plus-5G-12GB-256GB-yellow_2_.webp",
        "brand_name": "oppo",
        "memory": "12GB/256GB",
        "color": "Xanh",
        "price": "19900000"
    },
    {
        "id_product": 32,
        "id_brand": "4",
        "name": "OPPO A18",
        "sale_off": 0,
        "views": "250",
        "status": 1,
        "created_at": "2024-07-09",
        "updated_at": "2024-07-09",
        "image": "dien-thoai-oppo-a18-4gb-64gb-blue_1_.webp",
        "brand_name": "oppo",
        "memory": "4GB/64GB",
        "color": "Xanh dương",
        "price": "3290000"
    },
    {
        "id_product": 33,
        "id_brand": "4",
        "name": "OPPO Reno7 5G",
        "sale_off": 0,
        "views": "2000",
        "status": 1,
        "created_at": "2024-07-09",
        "updated_at": "2024-07-09",
        "image": "oppo-reno-7-5G-8GB-256GB-_1.webp",
        "brand_name": "oppo",
        "memory": "8GB/256GB",
        "color": "Xanh",
        "price": "12990000"
    },
    {
        "id_product": 34,
        "id_brand": "4",
        "name": "OPPO Reno 7 Pro",
        "sale_off": 0,
        "views": "500",
        "status": 1,
        "created_at": "2024-07-10",
        "updated_at": "2024-07-10",
        "image": "oppo-reno7-pro-5g-starlight-black-12GB-128GB-back-front.webp",
        "brand_name": "oppo",
        "memory": "12GB/256GB",
        "color": "Đen",
        "price": "10990000"
    },
    {
        "id_product": 35,
        "id_brand": "4",
        "name": "OPPO A79 5G",
        "sale_off": 0,
        "views": "1528",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "oppo-a79-5G-8GB-256GB-tim.webp",
        "brand_name": "oppo",
        "memory": "8GB/256GB",
        "color": "Tím",
        "price": "7490000"
    },
    {
        "id_product": 36,
        "id_brand": "4",
        "name": "OPPO Reno10 5G",
        "sale_off": 10,
        "views": "2500",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "reno10_5g_-8GB-256GB_product_-_blue_1.webp",
        "brand_name": "oppo",
        "memory": "8GB/256GB",
        "color": "Xanh dương",
        "price": "9290000"
    },
    {
        "id_product": 37,
        "id_brand": "4",
        "name": "OPPO Reno8 T 4G",
        "sale_off": 15,
        "views": "200",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "oppo-reno8-t-4g-cam-yellow-8GB-256GB-4_1.webp",
        "brand_name": "oppo",
        "memory": "8GB/256GB",
        "color": "Vàng",
        "price": "8490000"
    },
    {
        "id_product": 38,
        "id_brand": "4",
        "name": "OPPO Reno 12 F 5G",
        "sale_off": 0,
        "views": "3000",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "oppo-reno12-f-cam-5G-8GB-256GB-1.webp",
        "brand_name": "oppo",
        "memory": "8GB/256GB",
        "color": "Cam",
        "price": "9490000"
    },
    {
        "id_product": 39,
        "id_brand": "4",
        "name": "OPPO Reno12 5G",
        "sale_off": 0,
        "views": "55000",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "dien-thoai-oppo-reno12-5g-trang-12GB-256GB-1.webp",
        "brand_name": "oppo",
        "memory": "12GB/256GB",
        "color": "Bạc vũ trụ",
        "price": "12990000"
    },
    {
        "id_product": 40,
        "id_brand": "4",
        "name": "OPPO Find X5 Pro",
        "sale_off": 10,
        "views": "5800",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "oppo-find-x5-pro-den-12GB-256GB_1.webp",
        "brand_name": "oppo",
        "memory": "12GB/256GB",
        "color": "Đen",
        "price": "19990000"
    },
    {
        "id_product": 41,
        "id_brand": "5",
        "name": "Vivo V27e",
        "sale_off": 10,
        "views": "158",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "vivo-v27e-black-8GB-256GB-2.webp",
        "brand_name": "vivo",
        "memory": "8GB/256GB",
        "color": "Đen",
        "price": "8990000"
    },
    {
        "id_product": 42,
        "id_brand": "6",
        "name": "Realme C55",
        "sale_off": 5,
        "views": "250",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "realme-c55-yellow-8GB-256GB_1_1.webp",
        "brand_name": "realme",
        "memory": "8GB/256GB",
        "color": "Vàng",
        "price": "5900000"
    },
    {
        "id_product": 44,
        "id_brand": "6",
        "name": "Realme GT Neo 5 Lite",
        "sale_off": 0,
        "views": "500",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "realme-gt-neo-5-lite-xam-8GB-128GB.png",
        "brand_name": "realme",
        "memory": "8GB/128GB",
        "color": "Xám",
        "price": "5720000"
    },
    {
        "id_product": 45,
        "id_brand": "7",
        "name": "HONOR X7b",
        "sale_off": 10,
        "views": "2584",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "honor-x7b-blue-8GB-258GB.png",
        "brand_name": "honor",
        "memory": "8GB/256GB",
        "color": "Xanh dương",
        "price": "5290000"
    },
    {
        "id_product": 46,
        "id_brand": "8",
        "name": "TECNO SPARK 20PRO+",
        "sale_off": 10,
        "views": "2580",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "tecno_spark_20_pro_plus_-8GB-256GB_tr_ng.webp",
        "brand_name": "techno",
        "memory": "8GB/256GB",
        "color": "Trắng",
        "price": "5490000"
    },
    {
        "id_product": 47,
        "id_brand": "8",
        "name": "Tecno Camon 30",
        "sale_off": 0,
        "views": "5888",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "techno-camon-30-black-8GB-256GB_2.png",
        "brand_name": "techno",
        "memory": "8GB/256GB",
        "color": "Đen",
        "price": "6490000"
    },
    {
        "id_product": 48,
        "id_brand": "1",
        "name": "iPhone 15 Pro Max",
        "sale_off": 0,
        "views": "5888",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "techno-camon-30-black-8GB-256GB_2.png",
        "brand_name": "apple",
        "memory": "4GB/64GB",
        "color": "Titan Đen",
        "price": "26990000"
    },
    {
        "id_product": 49,
        "id_brand": "1",
        "name": "iPhone 13 mini",
        "sale_off": 0,
        "views": "5888",
        "status": 1,
        "created_at": "2024-07-11",
        "updated_at": "2024-07-11",
        "image": "techno-camon-30-black-8GB-256GB_2.png",
        "brand_name": "apple",
        "memory": "4GB/64GB",
        "color": "Trắng",
        "price": "11990000"
    }
]

export const brands = [
    {
        "id_brand": 1,
        "name": "apple",
        "logo": "logo-iphone-220x48.png",
        "status": 1
    },
    {
        "id_brand": 2,
        "name": "samsung",
        "logo": "samsungnew-logo-220x48-1.png",
        "status": 1
    },
    {
        "id_brand": 3,
        "name": "xiaomi",
        "logo": "logo-xiaomi-220x48-5.png",
        "status": 1
    },
    {
        "id_brand": 4,
        "name": "oppo",
        "logo": "OPPO42--logob_5.jpg",
        "status": 1
    },
    {
        "id_brand": 5,
        "name": "vivo",
        "logo": "vivo-logo-220-220x48-3.png",
        "status": 1
    },
    {
        "id_brand": 6,
        "name": "realme",
        "logo": "Realme42-logo-b_37.png",
        "status": 1
    },
    {
        "id_brand": 7,
        "name": "honor",
        "logo": "logo-honor-220x48-2.png",
        "status": 1
    },
    {
        "id_brand": 8,
        "name": "techno",
        "logo": "logo-tecno-big-220x48.png",
        "status": 1
    }
]