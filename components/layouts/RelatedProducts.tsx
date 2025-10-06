import React from 'react';
import BoxProduct from "@/components/layouts/pages/BoxProduct";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {products} from "@/app/constants";

function RelatedProducts() {
    const router = useRouter();
    const productsList = products.sort((a, b) => Number(b.sale_off) - Number(a.sale_off)).slice(0, 5);

    return (
        <section className="w-full mt-[4rem] h-max">
            <h1 className="heading w-max">Các sản phẩm liên quan</h1>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {productsList?.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price.toString()} index={index} views={parseInt(product.views)}
                                color={product.color} memory={product.memory}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
            <Button onClick={() => router.push('/products')} variant={'link'} size={'lg'} className="py-5 mt-5 mx-auto">Xem
                thêm</Button>
        </section>
    );
}

export default RelatedProducts;
