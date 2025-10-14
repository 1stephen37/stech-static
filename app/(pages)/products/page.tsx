'use client';
import React, {useEffect, useState} from 'react';
import Heading from "@/components/layouts/Heading";
import BoxProduct from "@/components/layouts/pages/BoxProduct";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Image from 'next/image';
import {ApiImage} from "@/app/constants";
import {cn} from "@/lib/utils";
import {MdOutlineCancelPresentation} from "react-icons/md";
import {Skeleton} from "@/components/ui/skeleton";
import {useSearchParams} from "next/navigation";
import {brands, products} from "@/app/constants";
import {useAppContext} from "@/context/AppContext";

const filterList = [
    {
        filterName: 'Ram'
    },
    {
        filterName: 'Bộ nhớ trong'
    }
]

const limit = 10;

function Page() {
    const searchParams = useSearchParams();
    const id_brand = searchParams.get('id_brand');
    const search_content = searchParams.get('search');
    const {searchContent: search, setSearchContent} = useAppContext();
    const [page, setPage] = useState(1);

    const [idBrand, setIdBrand] = useState(0);

    const [countPage, setCountPage] = useState(products.length / limit);
    const [isSearching, setIsSearching] = useState(false);
    const [productsList, setProductsList] = useState<ProductBox[]>(products.sort((a, b) => Number(b.views) - Number(a.views)).slice(0, limit));

    // const {
    //     data: productsListSearch,
    //     paging: searchPaging,
    //     isLoading: isSearching
    // } = ProductsModel.GetProductsByKeywordAndPage(limit, page, search, idBrand);

    const [productsListSearch, setProductsListSearch] = useState<ProductBox[]>([]);

    useEffect(() => {
        if (search_content) {
            setSearchContent(search_content);
        }
    }, [search_content, setSearchContent]);

    useEffect(() => {
        if (search) {
            const productsList = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => Number(b.views) - Number(a.views)).slice(0, limit);
            setCountPage(Math.ceil(productsList.length / limit));
            setIsSearching(false);
            setProductsListSearch(productsList);
        } else setCountPage(Math.ceil(products.length / limit));

        const newUrl = search ? `?search=${encodeURIComponent(search)}` : window.location.pathname;
        window.history.pushState({}, '', newUrl);
    }, [search, idBrand, countPage]);

    // useEffect(() => {
    //     // 1. Logic lọc
    //     let filteredProducts = products;
    //
    //     if (search) {
    //         filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    //     }
    //
    //     if (idBrand !== 0) {
    //         filteredProducts = filteredProducts.filter(p => Number(p.id_brand) === idBrand);
    //     }
    //
    //     // 2. Tính lại countPage và cập nhật productsList
    //     const newCountPage = Math.ceil(filteredProducts.length / limit);
    //
    //     setCountPage(newCountPage);
    //
    //     // 3. Cập nhật productsList cho trang hiện tại
    //     const startIndex = (page - 1) * limit;
    //     const endIndex = page * limit;
    //
    //     setProductsList(
    //         filteredProducts
    //             .sort((a, b) => Number(b.views) - Number(a.views))
    //             .slice(startIndex, endIndex)
    //     );
    //
    //     // 4. Log để kiểm tra (tùy chọn)
    //     console.log(`[EFFECT] Search: ${search}, Brand: ${idBrand}, Page: ${page}, New Count: ${newCountPage}`);
    //
    // }, [search, idBrand, page]); // 🔑 Chỉ theo dõi các biến điều khiển chính

    useEffect(() => {
        if (id_brand) {
            setIdBrand(Number(id_brand));
            const length = products.filter(a => Number(a.id_brand) === Number(id_brand)).length;
            setCountPage(Math.ceil(length / limit));
            setProductsList(products.filter(a => Number(a.id_brand) === Number(id_brand)).sort((a, b) => Number(b.views) - Number(a.views)).slice(0, limit));
        }
    }, [id_brand]);

    const handleSwitchBrand = (id_brand: number) => {
        setPage(1);
        setIdBrand(id_brand);
        setProductsList(products.filter(a => Number(a.id_brand) === id_brand).sort((a, b) => Number(b.views) - Number(a.views)).slice(0, limit));
    }

    useEffect(() => {
        if (idBrand !== 0) {
            const length = products.filter(a => Number(a.id_brand) === Number(id_brand)).length;
            setCountPage(Math.ceil(length / limit));
            console.log(countPage);
        }
    }, [idBrand]);

    // useEffect(() => {
    //     console.log(countPage);
    // }, [countPage]);

    const handleSwitchPage = (page: number) => {
        setPage(page);
        if (idBrand) setProductsList(products.filter(a => Number(a.id_brand) === Number(idBrand)).sort((a, b) => Number(b.views) - Number(a.views)).slice(((page - 1) * limit), (page * limit)));
        else setProductsList(products.sort((a, b) => Number(b.views) - Number(a.views)).slice(((page - 1) * limit), (page * limit)));
        window.scrollTo(0, 90);
    }

    const handleCancelBrand = () => {
        setIdBrand(0);
        setPage(1);
        setProductsList(products.sort((a, b) => Number(b.views) - Number(a.views)).slice(0, limit));
        setCountPage(Math.ceil(products.length / limit));
        window.scrollTo(0, 90);
    }

    return (
        <section className="container mt-[4rem]">
            {search !== '' ? (
                <h1 className={" text-center text-[3.2rem] font-semibold"}>Kết quả tìm kiếm của từ khóa : {search}</h1>
            ) : (
                <Heading title={'Sản phẩm'} className={''}/>
            )}
            <div className="flex flex-col gap-10 mt-[4rem]">
                {search !== '' ? (
                    <div className="w-full h-max flex flex-col gap-10 ">
                        <div className="flex gap-10 items-center flex-wrap">
                            <h3 className="text-[2rem] font-semibold min-w-[100px]">Thương hiệu: </h3>
                            {brands.map((brand, index) => (
                                <div key={index} onClick={() => handleSwitchBrand(Number(brand.id_brand))}
                                     className={cn(`relative shadow-md cursor-pointer border-solid rounded border-[.5px]
                             border-gray-400 w-[150px] h-[35px] hover:border-orange-400 ${idBrand === Number(brand.id_brand) ? 'border-orange-400' : ''}`)}>
                                    <Image className={'object-contain'} alt={brand.name}
                                           src={ApiImage + brand.logo}
                                           fill
                                           priority={true}/>
                                </div>
                            ))}
                            <div onClick={handleCancelBrand} className="">
                                <MdOutlineCancelPresentation
                                    className='text-[3rem] cursor-pointer select-none hover:opacity-60'/>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <h2 className="text-[2rem] font-bold">Bộ lọc :</h2>
                            {filterList.map((filter, index) => (
                                <div className={cn(`border border-solid border-primary text-[1.8rem] px-3 py-1 rounded
                            `)} key={index}>{filter.filterName}</div>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-5 gap-6">
                            {isSearching && (
                                <Skeleton className="w-[200px] h-[120px] rounded"/>
                            )}
                            {!isSearching && productsListSearch?.map((product, index) => (
                                <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                            price={product.price.toString()} index={index}
                                            memory={product.memory}
                                            color={product.color} views={parseInt(product.views)}
                                            brand={product.brand_name} image={product.image}
                                            name={product.name}/>
                            ))}
                            {productsListSearch?.length <= 0 && (
                                <h1 className='text-center col-span-5 text-3xl'>Không có sản phẩm phù hơp với từ khóa
                                    của bạn</h1>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-max flex flex-col gap-10 ">
                        <div className="flex gap-10 items-center flex-wrap">
                            <h3 className="text-[2rem] font-semibold min-w-[100px]">Thương hiệu: </h3>
                            {brands.map((brand, index) => (
                                <div key={index} onClick={() => handleSwitchBrand(Number(brand.id_brand))}
                                     className={cn(`relative shadow-md cursor-pointer border-solid rounded border-[.5px]
                             border-gray-400 w-[150px] h-[35px] hover:border-orange-400 ${idBrand === Number(brand.id_brand) ? 'border-orange-400' : ''}`)}>
                                    <Image className={'object-contain'} alt={brand.name}
                                           src={ApiImage + brand.logo}
                                           fill
                                           priority={true}/>
                                </div>
                            ))}
                            <div onClick={handleCancelBrand} className="">
                                <MdOutlineCancelPresentation
                                    className='text-[3rem] cursor-pointer select-none hover:opacity-60'/>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <h2 className="text-[2rem] font-bold">Bộ lọc :</h2>
                            {filterList.map((filter, index) => (
                                <div className={cn(`border border-solid border-primary text-[1.8rem] px-3 py-1 rounded
                            `)} key={index}>{filter.filterName}</div>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-5 gap-6">
                            {productsList.map((product, index) => (
                                <BoxProduct key={index} id={product.id_product} sale={product.sale_off}
                                            price={product.price.toString()} index={index}
                                            memory={product.memory}
                                            color={product.color} views={parseInt(product.views)}
                                            brand={product.brand_name} image={product.image}
                                            name={product.name}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {countPage >= 2 && (
                <Pagination className={'mt-[4rem]'}>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className={'cursor-pointer select-none'}
                                                onClick={() => {
                                                    if (page > 1) {
                                                        handleSwitchPage(page - 1);
                                                    }
                                                }}/>
                        </PaginationItem>
                        {Array.from({length: countPage}, (_, i) => i + 1).map(index => (
                            <PaginationItem key={index}>
                                <PaginationLink className={'cursor-pointer select-none'}
                                                onClick={() => handleSwitchPage(index)}
                                                isActive={index === page}>{index}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext className={'cursor-pointer select-none'}
                                            onClick={() => {
                                                if ((page + 1) <= countPage) {
                                                    handleSwitchPage(page + 1);
                                                }
                                            }}/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    );
}

export default Page;
