'use client';
import {useEffect, useState} from 'react';
import {cn} from "@/lib/utils";
import BoxProduct from "@/components/layouts/pages/BoxProduct";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {products, brands} from '@/app/constants';

const SectionCategories = () => {
    const router = useRouter();
    const [indexBrand, setIndexBrand] = useState(0);
    const [idBrand, setIdBrand] = useState(1);
    const [productsList, setProductsList] = useState<ProductBox[]>([]);

    const Brands = brands.slice(0, 5);

    useEffect(() => {
        if (Brands) {
            const data = products.filter(a => Number(a.id_brand) === idBrand).sort((a, b) => Number(b.views) - Number(a.views)).slice(0, 10);
            setProductsList(data);
        }
    }, [idBrand]);

    const handleChangeBrand = (index: number) => {
        setIndexBrand(index);
        setIdBrand(Brands[index].id_brand);
    }

    return (
        <section className="w-full h-max mt-[4rem]">
            <h1 className="text-center heading">Các sản phẩm được xem nhiều</h1>
            <div className="flex w-max mt-10 mx-auto gap-10">
                {Brands?.map((brand, index) => (
                    <div onClick={() => handleChangeBrand(index)} className={cn(`capitalize select-none cursor-pointer shadow-md rounded
                     px-10 py-3 text-center text-[2rem] ${indexBrand === index ? 'bg-[rgba(0,0,0,0.75)] text-[rgba(255,255,255,1)]' : ''}`)}
                         key={index}>{brand.name}</div>
                ))}
            </div>
            <div className="h-max mt-10 grid grid-cols-5 gap-y-10 gap-x-10">
                {productsList?.map((product, index) => (
                    <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                price={product.price.toString()} index={index} views={parseInt(product.views)}
                                memory={product.memory} color={product.color}
                                brand={product.brand_name} image={product.image} name={product.name}/>
                ))}
            </div>
            <Button onClick={() => router.push('/products')} variant={'link'} size={'lg'} className="py-5 mt-5 mx-auto">Xem
                thêm</Button>
        </section>
    );
};

export default SectionCategories;
