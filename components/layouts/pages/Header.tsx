"use client";
import {motion} from "framer-motion";
import React, {FormEvent, FormEventHandler, useEffect, useState} from 'react';
import Link from "next/link";
import {FaSearch} from "react-icons/fa";
import {LuShoppingCart} from "react-icons/lu";
import TopHeader from "@/components/layouts/pages/TopHeader";
import {usePathname} from "next/navigation";
import Logo from "@/components/layouts/pages/Logo";
import {FaRegUser} from "react-icons/fa";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {useAppSelector, useAppDispatch} from '@/redux/hooks'
import {useRouter} from 'next/navigation';
// import ProductsModel from "@/models/products/products.model";
import BoxProductSearch from "@/components/layouts/pages/BoxProductSearch";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MdSpaceDashboard} from "react-icons/md";
import {ImProfile} from "react-icons/im";
import {MdLogout} from "react-icons/md";
import {getCartFromLocalStorage} from "@/redux/reducers/cart.reducer";
import {MdOutlineHistory} from "react-icons/md";
import {useAppContext} from "@/context/AppContext";
// import Confirm from "@/components/Confirm";
// import Alert from "@/components/Alert";
// import {getLinkFromLocalStorage, linkChange, saveLinkToLocalStorage} from "@/redux/reducers/router.reducer";
import {brands, products, links} from "@/app/constants";
import MobileNav from "@/components/layouts/pages/MobileNav";

export default function Header() {
    const dispatch = useAppDispatch();

    const router = useRouter();
    const brandsList = brands.slice(0, 10);
    const productsList = products.sort((a, b) => b.sale_off - a.sale_off).slice(0, 10);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [cartLength, setCartLength] = useState(0);
    const [header, setHeader] = useState(false);
    useEffect(() => {
        const listenerScroll = () => {
            setHeader(window.scrollY > 50);
        };
        window.addEventListener('scroll', listenerScroll);
        return () => window.removeEventListener('scroll', listenerScroll);
    }, []);
    const path = usePathname();
    const {searchContent, setSearchContent} = useAppContext();
    const isLogin = useAppSelector((state) => state.user.isLogin);
    const userInformation = useAppSelector((state) => state.user.user);
    const cart = useAppSelector((state) => state.cart.cart);
    // const previous = useAppSelector(state => state.router.link);
    useEffect(() => {
        dispatch(getCartFromLocalStorage());
        // dispatch(getLinkFromLocalStorage());
    }, []);
    useEffect(() => {
        if (cart.length > 0) {
            const total = cart.reduce((total, item) => total + item.quantity, 0);
            setCartLength(total);
        } else {
            setCartLength(0);
        }
    }, [cart]);

    const [productsListSearch, setProductsListSearch] = useState<ProductBox[]>([]);

    useEffect(() => {
        const productsList = products.filter(p => p.name.toLowerCase().includes(searchContent.toLowerCase())).sort((a, b) => Number(b.views) - Number(a.views)).slice(0, 4);
        setProductsListSearch(productsList);
    }, [searchContent]);
    const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/products?search=${searchContent}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchContent(e.target.value);
        if (e.target.value.length === 0) {
            setShowSearchBox(false)
        } else {
            setShowSearchBox(true);
        }
    }

    const handleInputFocus = () => {
        if (searchContent === '') setShowSearchBox(false); else setShowSearchBox(true);
    }

    return (
        <>
            <TopHeader/>
            <header
                className={`w-full h-max py-[2rem] sticky top-0 z-30 bg-white transition-all dark:bg-accent ${header ? 'shadow-lg' : ''}`}>
                <div className="container flex justify-between">
                    <div className="gap-5 items-center hidden xl:flex">
                        <Logo href={'/'}/>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={'text-[2rem] bg-none'}>
                                        ĐIều Hướng
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent
                                        className="flex gap-5 py-5 px-5 lg:w-max lg:max-w-[62rem] flex-col">
                                        <NavigationMenuLink asChild>
                                            <ul className="container h-full flex gap-7 border-gray-300 border-b-2 border-solid pb-5">
                                                {links.map((link, index) => (
                                                    <li key={index} className={'text-left'}>
                                                        <Link
                                                            className="text-[2rem] relative hover:text-primary hover:text-gray-600 transition-all capitalize"
                                                            href={link.path}>
                                                            {link.path === path && (
                                                                <motion.span initial={{y: '-100%'}}
                                                                             animate={{y: 0}}
                                                                             transition={{type: 'tween'}}
                                                                             layoutId={'underline'}
                                                                             className={`absolute left-0 top-full h-[2px] w-full bg-primary`}/>
                                                            )}
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <div className={'grid grid-cols-2'}>
                                                <div className="">
                                                    <h1 className={`pl-10 text-2xl font-semibold`}>Các Hãng điện
                                                        thoại
                                                        phổ
                                                        biến</h1>
                                                    <div className="flex flex-col gap-5 mt-5">
                                                        <div className="grid grid-cols-2 gap-5">
                                                            {brandsList.map((brand, index) => (
                                                                <Link key={index}
                                                                      href={`/products?id_brand=${brand.id_brand}`}
                                                                      className="cursor-pointer pl-10 capitalize text-2xl">
                                                                    {brand.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h1 className={`text-center text-2xl font-semibold`}>Các sản
                                                        phẩm
                                                        điện
                                                        thoại Khuyến mãi</h1>
                                                    <div className="flex flex-col gap-5 mt-5">
                                                        {productsList && productsList.map((product, index) => (
                                                            <Link key={index} className={'text-2xl'}
                                                                  href={`/products/${product.id_product}`}>
                                                                {product.name} - {product.sale_off}%
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="w-max hidden xl:flex items-center gap-5 relative">
                        <form onSubmit={handleSearchSubmit} className="relative h-max">
                            <input
                                value={searchContent}
                                onChange={handleInputChange}
                                onBlur={() => setTimeout(() => setShowSearchBox(false), 250)}
                                onFocus={handleInputFocus}
                                className="text-[1.6rem] pl-[1rem] border-[0.2px] border-solid border-primary pr-[2.5rem] rounded-[5px] w-[60rem] h-[5rem] outline-none"
                                placeholder="Bạn đang tìm gì ?" type="text"/>
                            <button type='submit'>
                                <FaSearch
                                    className="absolute text-primary top-5 right-4 font-black cursor-pointer text-[2rem]"/>
                            </button>
                            {showSearchBox && (
                                <div onClick={() => setShowSearchBox(true)}
                                     className="absolute group: px-8 py-5 border border-solid border-black bg-white shadow-md  rounded w-full h-max top-[7rem] grid grid-cols-2 gap-5">
                                    {productsListSearch && productsListSearch.map((product, index) => (
                                        <BoxProductSearch name={product.name} image={product.image}
                                                          sale={product.sale_off} price={product.price.toString()}
                                                          key={index} brand={product.brand_name}
                                                          id={product.id_product}
                                                          index={index}/>
                                    ))}
                                    {productsListSearch && productsListSearch.length <= 0 && (
                                        <p className="text-2xl">Không tìm thấy sản phẩm phù hợp</p>
                                    )}
                                </div>
                            )}
                        </form>

                        {/*<Sheet>*/}
                        {/*    <SheetTrigger asChild>*/}
                        {/*        <div className="text-2xl cursor-pointer rounded-[3px] h-max p-1 w-max">*/}
                        {/*            Sản phẩm*/}
                        {/*        </div>*/}
                        {/*    </SheetTrigger>*/}
                        {/*    <SheetContent className="h-[8rem]" side={'top'}>*/}
                        {/*    </SheetContent>*/}
                        {/*</Sheet>*/}
                    </div>
                    <div className="hidden xl:flex gap-5 items-center">
                        {isLogin && userInformation ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="text-[2rem] flex gap-5 items-center outline-none capitalize">
                                    {userInformation.name}
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-max'>
                                    <DropdownMenuLabel className={'text-3xl'}>Tài khoản</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem className={'text-2xl'}>
                                        <Link href={'/profile'} className={'flex gap-5 items-center'}>
                                            <ImProfile className={'text-2xl'}/>
                                            <div className="">
                                                Trang hồ sơ
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                    {userInformation.role === 0 ? (
                                        <>
                                            <DropdownMenuItem className={'text-2xl'}>
                                                <Link href={'/history'} className={'flex gap-5 items-center'}>
                                                    <MdOutlineHistory className={'text-2xl'}/>
                                                    <div className="">
                                                        Lịch sử mua hàng
                                                    </div>
                                                </Link>
                                            </DropdownMenuItem>
                                        </>
                                    ) : (
                                        <>
                                            <DropdownMenuItem className={'text-2xl '}>
                                                <Link href={'/dashboard'} className={'flex gap-5'}>
                                                    <MdSpaceDashboard className={'text-2xl'}/>
                                                    <div>Trang quản trị</div>
                                                </Link>
                                            </DropdownMenuItem>
                                        </>
                                    )}
                                    <DropdownMenuItem className={'text-2xl flex gap-5 items-center'}>
                                        <MdLogout className={'text-2xl'}/>
                                        <div className="">
                                            Đăng xuất
                                        </div>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        ) : (
                            <Link href={'/sign-in'} className="flex gap-3 items-center">
                                <FaRegUser className="text-[2rem] cursor-pointer"/>
                                <span className="text-[2rem]">Tài khoản</span>
                            </Link>
                        )}
                        <Link href="/cart" className="relative flex gap-3 items-center">
                            <LuShoppingCart className="text-[2rem] cursor-pointer"/>
                            <span className="text-[2rem]">Giỏ hàng</span>
                            {cartLength !== 0 && (
                                <span
                                    className="absolute top-[-1.5rem] right-[-1.5rem] bg-primary dark:text-secondary
                                     text-white rounded-full py-[0.2rem] px-[0.6rem] text-2xl">{cartLength}</span>
                            )}
                        </Link>
                    </div>
                    <div className="mobile-menu w-full flex justify-between">
                        <Logo href={'/'}/>
                        <MobileNav/>
                    </div>
                </div>
            </header>
            {/*<Confirm message={'Bạn có chắc chắn muốn đăng xuất không ?'}*/}
            {/*         subMessage={'Hành động này có thể khiến trải nghiệm mua sắm của bạn bị gián đoạn và không thể sử dụng một vài chức năng của chúng tôi.'}*/}
            {/*         showConfirm={showConfirmLogOut} setShowConfirm={setShowConfirmLogOut} outState={isLogOut}*/}
            {/*         setOutState={setIsLogOut}/>*/}
            {/*<Alert showAlert={showAlertLogOut} setShowAlert={setShowAlertLogOut} message={'Đăng xuất thành công'}*/}
            {/*       subMessage={"Bạn đã đăng xuất thành công khỏi hệ thống cửa hàng STECH, bạn có thể quay lại và hưởng những ưu đãi của hội viên."}/>*/}
        </>
    )
        ;
}

