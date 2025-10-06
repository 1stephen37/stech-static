'use client';
import {useState} from 'react';
import BoxProduct from "@/components/layouts/pages/BoxProduct";
import {Button} from "@/components/ui/button";
import {products} from '@/app/constants';

function SectionSale() {
    const [limit, setLimit] = useState(5);

    const productsList = products.sort((a, b) => b.sale_off - a.sale_off).slice(0, limit);

    return (
        <section className="w-full mt-[4rem] h-max">
            <h1 className="heading w-max">Sản phẩm giảm giá
                sốc !</h1>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {productsList.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price} index={index} views={parseInt(product.views)}
                                color={product.color} memory={product.memory}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
            {limit < 10 && (
                <Button variant={'link'} size={'lg'} className="py-5 mt-5 mx-auto"
                        onClick={() => setTimeout(() => {
                            setLimit(10);
                            window.scrollTo(0, 660);
                        }, 300)}>Tải thêm</Button>
            )}
            {limit >= 10 && (
                <Button variant={'link'} size={'lg'} className="py-5 mt-5 mx-auto"
                        onClick={() => setTimeout(() => {
                            setLimit(5);
                            window.scrollTo(0, 600);
                        }, 300)}>Ẩn bớt</Button>
            )}
        </section>
    );
}

export default SectionSale;
