export const ApiImage = '/images/uploads/';

export const transformCurrency = (value: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'code',
    }).format(value);
}

export const products: ProductBox[] = [
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

export const shop = {
    "id_shop": 1,
    "name": "Stech",
    "address": "Công viên phần mềm Quang Trung, Tân Chánh Hiệp, Quận 12, thành phố Hồ Chí Minh",
    "email": "stechsupport@gmail.com",
    "phone": "0338015138",
    "status": 1
}

export const detailProductData = {
    "id_product": 1,
    "id_brand": "1",
    "name": "iPhone 11 | Chính hãng VN/A",
    "sale_off": 10,
    "views": "500",
    "status": 1,
    "created_at": "2024-07-05",
    "updated_at": "2024-07-05",
    "brand_name": "apple",
    "options":
        [
            {
                "color": "Trắng",
                "price": "11990000",
                "quantity": 500,
                "memory": "4GB/64GB",
                "image": "iphone-11.webp"
            },
            {
                "color": "Đen",
                "price": "11990000",
                "quantity": 500,
                "memory": "4GB/64GB",
                "image": "iphone-11-black-4GB-64GB_130.webp"
            },
            {
                "color": "Xanh lá nhạt",
                "price": "12800000",
                "quantity": 500,
                "memory": "4GB/64GB",
                "image": "iphone-11-4GB-64GB-green--5_158.webp"
            },
            {
                "color": "Đỏ",
                "price": "13990000",
                "quantity": 500,
                "memory": "4GB/128GB",
                "image": "iphone-11-red-4GB-128gb.webp"
            },
            {
                "color": "Vàng",
                "price": "19900000",
                "quantity": 500,
                "memory": "4GB/256GB",
                "image": "iphone-yellow-4GB-256GB1_253_2.webp"
            },
            {
                "color": "Bạc",
                "price": "12400000",
                "quantity": 0,
                "memory": "4GB/64GB",
                "image": "iphone-11-back-4GB-64GB_130.webp"
            }
        ],
    "details":
        [
            {
                "name": "Màn hình",
                "id_specification_category": 1,
                "detail": [
                    {
                        "name": "Kích thước màn hình",
                        "value": "6.1 inches"
                    },
                    {
                        "name": "Công nghệ màn hình",
                        "value": "IPS LCD"
                    },
                    {
                        "name": "Độ phân giải màn hình",
                        "value": "1792 x 828 pixel"
                    },
                    {
                        "name": "Tính năng màn hình",
                        "value": "True-tone"
                    },
                    {
                        "name": "Tần số quét",
                        "value": "60Hz"
                    },
                    {
                        "name": "Kiểu màn hình",
                        "value": "Tai thỏ"
                    }
                ]
            },
            {
                "name": "Camera sau",
                "id_specification_category": 2,
                "detail": [
                    {
                        "name": "Camera sau",
                        "value": "Camera kép 12MP:\n- Camera góc rộng: ƒ/1.8 aperture\n- Camera siêu rộng: ƒ/2.4 aperture"
                    },
                    {
                        "name": "Quay video",
                        "value": "Quay video 4K ở tốc độ 24 fps, 30 fps hoặc 60 fps"
                    },
                    {
                        "name": "Tính năng camera",
                        "value": "Retina Flash\nNhãn dán (AR Stickers)\nBan đêm (Night Mode)\nChạm lấy nét\nGóc rộng (Wide)\nGóc siêu rộng (Ultrawide) HDR Nhận diện khuôn mặt\nQuay chậm (Slow Motion)\nToàn cảnh (Panorama)\nTrôi nhanh thời gian (Time L"
                    }
                ]
            },
            {
                "name": "Camera trước",
                "id_specification_category": 3,
                "detail": [
                    {
                        "name": "Camera trước",
                        "value": "12 MP, ƒ/2.2 aperture"
                    },
                    {
                        "name": "Quay video trước",
                        "value": "4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS"
                    }
                ]
            },
            {
                "name": "Vi xử lý & đồ họa",
                "id_specification_category": 4,
                "detail": [
                    {
                        "name": "Chipset",
                        "value": "A13 Bionic"
                    },
                    {
                        "name": "Loại CPU",
                        "value": "Hexa-core"
                    },
                    {
                        "name": "GPU",
                        "value": "Apple GPU"
                    }
                ]
            },
            {
                "name": "Giao tiếp & kết nối",
                "id_specification_category": 5,
                "detail": [
                    {
                        "name": "Công nghệ NFC",
                        "value": "Có"
                    },
                    {
                        "name": "Thẻ SIM",
                        "value": "Nano-SIM + eSIM"
                    },
                    {
                        "name": "Hệ điều hành",
                        "value": "iOS 13 hoặc cao hơn (Tùy vào phiên bản phát hành)"
                    },
                    {
                        "name": "Hồng ngoại",
                        "value": "Không"
                    },
                    {
                        "name": "Jack tai nghe 3.5",
                        "value": "Không"
                    },
                    {
                        "name": "Hỗ trợ mạng",
                        "value": "4G"
                    },
                    {
                        "name": "Wi-Fi",
                        "value": "802.11ax Wi‑Fi 6 with 2x2 MIMO"
                    },
                    {
                        "name": "Bluetooth",
                        "value": "5.0"
                    },
                    {
                        "name": "GPS",
                        "value": "GPS/GNSS"
                    }
                ]
            }
        ]
}

export const deliveries = [
    {
        "id_delivery": 1,
        "name": "Vietnam Post",
        "price": 10000,
        "speed": "chậm",
        "status": 1,
        "created_at": "03:45:06.279085",
        "updated_at": "03:45:06.279085"
    },
    {
        "id_delivery": 2,
        "name": "GrabExpress",
        "price": 12000,
        "speed": "trung bình",
        "status": 1,
        "created_at": "03:45:55.317131",
        "updated_at": "03:45:55.317131"
    },
    {
        "id_delivery": 4,
        "name": "J&T Express",
        "price": 20000,
        "speed": "hơi nhanh 1",
        "status": 1,
        "created_at": "03:46:42.236083",
        "updated_at": "01:27:12.626874"
    },
    {
        "id_delivery": 3,
        "name": "Ninja Van",
        "price": 18000,
        "speed": "nhanh ",
        "status": 1,
        "created_at": "03:46:42.236083",
        "updated_at": "01:27:17.154449"
    },
    {
        "id_delivery": 8,
        "name": "test",
        "price": 312312,
        "speed": "test1321",
        "status": 1,
        "created_at": "01:52:58.432204",
        "updated_at": "01:53:03.695351"
    }
]

export const vouchers = [
    {
        "id_voucher": 1,
        "code": "sale5",
        "discount": 5,
        "max_discount": 2000000,
        "min_amount": 10000000,
        "is_percent": true,
        "expired": false,
        "end_date": "2024-08-30",
        "created_at": "2024-07-15",
        "updated_at": "2024-07-15"
    },
    {
        "id_voucher": 2,
        "code": "sale10",
        "discount": 10,
        "max_discount": 5000000,
        "min_amount": 15000000,
        "is_percent": true,
        "expired": false,
        "end_date": "2024-08-30",
        "created_at": "2024-08-03",
        "updated_at": "2024-08-03"
    }
]

export const reviews = [
    {
        "id_review": 1,
        "id_user": 2,
        "id_reply": null,
        "id_product": 1,
        "content": "Sản phẩm này thật sự rất tuyệt đấy !",
        "created_at": "2024-07-12",
        "updated_at": "2024-07-12",
        "name": "Nguyễn Admin",
        "avatar": null,
        "product_name": "iPhone 11 | Chính hãng VN/A",
        "replies": [
            {
                "id_review": 3,
                "id_user": 8,
                "id_reply": 1,
                "id_product": 1,
                "content": "Tôi rất thich sản phẩm này cũng như chất lượng dịch vụ tuyệt vời của Stech, các bạn nên mua nha.",
                "created_at": "2024-08-04",
                "updated_at": "2024-08-04",
                "name": "Nguyễn Tiến",
                "avatar": "https://lh3.googleusercontent.com/a/ACg8ocJ43nfhc50KJuYe0_TIfsPhb9mDWeZMbEJtOA8GKqbOhgVl2mU6=s96-c",
                "product_name": "iPhone 11 | Chính hãng VN/A"
            }
        ]
    },
    {
        "id_review": 3,
        "id_user": 8,
        "id_reply": 1,
        "id_product": 1,
        "content": "Tôi rất thich sản phẩm này cũng như chất lượng dịch vụ tuyệt vời của Stech, các bạn nên mua nha.",
        "created_at": "2024-08-04",
        "updated_at": "2024-08-04",
        "name": "Nguyễn Tiến",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocJ43nfhc50KJuYe0_TIfsPhb9mDWeZMbEJtOA8GKqbOhgVl2mU6=s96-c",
        "product_name": "iPhone 11 | Chính hãng VN/A"
    }
]
