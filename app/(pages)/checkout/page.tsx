"use client";
import React, {useEffect, useState} from 'react';
import Heading from "@/components/layouts/Heading";
import {Button} from "@/components/ui/button";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {getCartFromLocalStorage} from "@/redux/reducers/cart.reducer";
import {ApiImage, transformCurrency} from "@/app/constants";
import {Input} from "@/components/ui/input";
import {Checkbox} from '@/components/ui/checkbox';
import {useForm} from "react-hook-form";
import Alert from "@/components/layouts/Alert";
import Image from 'next/image';
import RelatedProducts from "@/components/layouts/RelatedProducts";
import {deliveries, vouchers} from "@/app/constants";
import {useRouter} from "next/navigation";

type form = {
    name: string,
    email: string,
    phone: string,
    address: string,
    receiverName?: string,
    receiverAddress?: string,
}

const PaymentInterface: React.FC = () => {
        const router = useRouter();
        const {register, reset, formState: {errors}}
            = useForm<form>();
        const dispatch = useAppDispatch();
        const [indexDelivery, setIndexDelivery] = useState(0);
        const [indexVoucher, setIndexVoucher] = useState(0);
        const [errorMessage, setErrorMessage] = useState('');
        const [receiver, setReceiver] = useState(false);
        const [isHydrated, setIsHydrated] = useState(false);
        const [total, setTotal] = useState(0);
        const [showSuccess, setShowSuccess] = useState(false);
        const vouchersList = vouchers;
        const user = useAppSelector(state => state.user.user);

        const cart = useAppSelector((state) => state.cart.cart);
        useEffect(() => {
            reset();
            dispatch(getCartFromLocalStorage());
            if (typeof window !== 'undefined') {
                setIsHydrated(true);
            }
        }, []);

        useEffect(() => {
            handleTotalPriceOrder()
        }, [indexVoucher, indexDelivery, deliveries, vouchersList])

        const getTotalPriceCart = () => {
            return cart.reduce((total, item) => total += item.salePrice * item.quantity, 0);
        }

        const handleTotalPriceOrder = () => {
            if (deliveries?.length > 0 && vouchersList?.length > 0) {
                if (indexDelivery >= 0 && indexVoucher >= 0) {
                    const cartTotal = getTotalPriceCart();
                    const deliveryFee = Math.floor((deliveries[indexDelivery].price * 10) / 1000) * 1000;
                    let totalPrice = Math.floor(((1 - (vouchersList[indexVoucher].discount / 100)) * cartTotal) / 1000) * 1000;
                    totalPrice += deliveryFee;
                    setTotal(totalPrice);
                } else if (vouchersList?.length === 0 && indexDelivery >= 0) {
                    const cartTotal = getTotalPriceCart();
                    const deliveryFee = Math.floor((deliveries[indexDelivery].price * 10) / 1000) * 1000;
                    let totalPrice = Math.floor(cartTotal / 1000) * 1000;
                    totalPrice += deliveryFee;
                    setTotal(totalPrice);
                }
            }
        }

        return (
            <>
                <div className="container mt-[4rem]">
                    <div className="mx-auto">
                        <Heading title={'Thanh Toán'}/>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            window.alert('Đây chỉ là giao diện, không thể thực hiện chức năng');
                            e.stopPropagation();
                        }} className="flex gap-8 mt-5 justify-center">
                            <div className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-[40%]"}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[2rem] font-bold text-gray-900 mb-4">
                                        Thông tin giao hàng
                                    </h2>
                                    <div
                                        className="text-2xl flex items-center gap-2 w-max text-gray-600 cursor-pointer">
                                        <span className="w-max">Người nhận khác người đặt ?</span>
                                        <Checkbox onClick={() => setReceiver(!receiver)} className={'w-6 h-6 rounded'}/>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-3`}>
                                    <div>
                                        <div className="mb-5">
                                            <label
                                                className="block text-gray-700 text-2xl font-bold mb-2"
                                                htmlFor="mainName"
                                            >
                                                Tên người đặt hàng
                                            </label>
                                            <Input id="mainName"
                                                   placeholder='Ví dụ: Nguyễn Văn A'
                                                   className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                   {...register('name', {
                                                       required: "Bạn phải nhập tên nguời đặt hàng",
                                                       value: user?.name || '',
                                                   })}
                                            />
                                            {errors.name && (
                                                <div
                                                    className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.name.message}</div>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                className="block text-gray-700 text-2xl font-bold mb-2"
                                                htmlFor="mainEmail"
                                            >
                                                Email người đặt hàng
                                            </label>
                                            <Input
                                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                id="mainEmail"
                                                placeholder='Ví dụ: tencuaban@gmail.com'
                                                type="text"
                                                {...register('email', {
                                                    required: "Bạn phải nhập email người đặt hàng",
                                                    value: user?.email || '',
                                                    validate: (data) => {
                                                        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data))) {
                                                            return "email phải đúng định dạng";
                                                        }
                                                        return true;
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <div
                                                    className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.email.message}</div>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                className="block text-gray-700 text-2xl font-bold mb-2"
                                                htmlFor="mainPhone"
                                            >
                                                Số điện thoại người đặt hàng
                                            </label>
                                            <Input
                                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                id="mainPhone"
                                                placeholder='Ví dụ: 0338015183'
                                                type="number"
                                                {...register('phone', {
                                                    required: "Bạn phải nhập số điện thoại người đặt hàng",
                                                    value: user?.phone || '',
                                                    minLength: {
                                                        value: 10,
                                                        message: "Số điện thoại phải có 10 chữ số"
                                                    }, maxLength: {
                                                        value: 10,
                                                        message: "Số điện thoại phải có 10 chữ số"
                                                    }
                                                })}
                                            />
                                            {errors.phone && (
                                                <div
                                                    className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.phone.message}</div>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                className="block text-gray-700 text-2xl font-bold mb-2"
                                                htmlFor="mainAddress"
                                            >
                                                Địa chỉ người đặt hàng
                                            </label>
                                            <Input
                                                className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                id="mainAddress"
                                                type="text"
                                                placeholder="Ví dụ: 995/8 Hồng Bàng, phường 12, quận 6, TP.Hồ Chí Minh"
                                                {...register('address', {
                                                    required: "Bạn phải nhập địa chỉ người đặt hàng",
                                                    value: user?.address || ''
                                                })}
                                            />
                                            {errors.address && (
                                                <div
                                                    className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.address.message}</div>
                                            )}
                                        </div>
                                    </div>
                                    {receiver && (
                                        <div className="">
                                            <h2 className="text-[1.8rem] font-bold text-gray-900 mb-4">
                                                Thông tin người nhận hàng
                                            </h2>
                                            <div className="mb-5">
                                                <label
                                                    className="block text-gray-700 text-2xl font-bold mb-2"
                                                    htmlFor="mainName"
                                                >
                                                    Tên người nhận hàng
                                                </label>
                                                <Input
                                                    className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    id="mainName"
                                                    type="text"
                                                    placeholder=""
                                                    {...register('receiverName', {
                                                        required: "Bạn phải nhập tên người nhận hàng",
                                                    })}
                                                />
                                                {errors.receiverName && (
                                                    <div
                                                        className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.receiverName.message}</div>
                                                )}
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    className="block text-gray-700 text-2xl font-bold mb-2"
                                                    htmlFor="mainAddress"
                                                >
                                                    Địa chỉ người nhận hàng
                                                </label>
                                                <Input
                                                    className="focus:border-primary border h-[3.5rem] py-[.5rem] outline-0 border-solid text-2xl"
                                                    id="mainAddress"
                                                    type="text"
                                                    placeholder=""
                                                    {...register('receiverAddress', {
                                                        required: "Bạn phải nhập địa chỉ người nhận hàng",
                                                    })}
                                                />
                                                {errors.receiverAddress && (
                                                    <div
                                                        className={'text-2xl font-semibold mt-3 text-red-500'}>{errors.receiverAddress.message}</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-white h-max w-[40%] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Giỏ hàng
                                </h2>
                                <div className="divide-y divide-gray-200">
                                    {isHydrated && cart.length > 0 && cart.map((item) => (
                                        <div
                                            key={item.id_product}
                                            className="py-4 flex justify-between items-center"
                                        >
                                            <div className={'flex gap-5'}>
                                                <Image alt={''} className={'object-contain'} src={ApiImage + item.image}
                                                       width={50} height={50}/>
                                                <div className="">
                                                    <h3 className="text-[1.8rem] font-semibold">{item.name}</h3>
                                                    <p className="text-gray-800 text-[1.6rem]">
                                                        Màu: {item.color} - Bộ nhớ trong: {item.memory}
                                                    </p>
                                                    <p className="text-gray-800 text-[1.6rem]">
                                                        Giá: {transformCurrency(item.salePrice)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-gray-500t text-2xl">
                                                Số lượng: {item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <p className="text-gray-700 text-2xl font-semibold">
                                        Tạm tính: {isHydrated && transformCurrency(getTotalPriceCart())}
                                    </p>
                                </div>
                                {cart.length > 0 ? (
                                    <>
                                        <div className="mt-10 mx-auto w-max min-w-[37rem]">
                                            <h2 className='text-2xl font-semibold'>Chọn đơn vị vận chuyển:</h2>
                                            <select
                                                className="w-max py-3 px-5 border border-solid border-gray-300 rounded-lg text-center mx-auto block mt-3 text-[1.6rem]"
                                                onChange={(e) => {
                                                    setErrorMessage('');
                                                    setIndexDelivery(parseInt(e.target.value))
                                                }}>
                                                {deliveries && deliveries.map((delivery, index) => (
                                                    <option value={index.toString()}
                                                            className={'text-[1.6rem] hover:bg-gray-300 block h-[3rem]'}
                                                            key={index}>
                                                        {delivery.name} - {delivery.speed} - {transformCurrency(delivery.price)}
                                                    </option>
                                                ))}
                                            </select>
                                            {deliveries && indexDelivery !== -1 && (
                                                <div className="text-[1.6rem] mt-5">
                                                    <b>Giá vận
                                                        chuyển</b>: {transformCurrency(deliveries[indexDelivery].price)} *
                                                    10km
                                                    = {transformCurrency(Math.floor(deliveries[indexDelivery].price * 10 / 1000) * 1000)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-5 mx-auto w-max max-w-[37rem]">
                                            {vouchersList && vouchersList.length > 0 ? (
                                                    <>
                                                        <h2 className='text-2xl font-semibold'>Chọn đơn vị vận chuyển:</h2>
                                                        <select className="w-max py-3 px-5 border border-solid
                                                 border-gray-300 rounded-lg text-center mx-auto block mt-3 text-[1.6rem]"
                                                                onChange={(e) => setIndexVoucher(parseInt(e.target.value))}
                                                        >
                                                            {vouchersList.map((voucher, index) => (
                                                                <option className={'text-[1.6rem]'} value={index.toString()}
                                                                        key={index}>
                                                                    Mã giảm
                                                                    giá: {voucher.code} - {voucher.is_percent ? `giảm: ${voucher.discount}%` : `giảm ${transformCurrency(voucher.max_discount)}`}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {vouchersList && indexVoucher !== -1 && (
                                                            <>
                                                                <div className="text-[1.6rem] mx-auto text-center mt-5">
                                                                    <b>Giảm
                                                                        giá: </b>: {vouchersList[indexVoucher].discount}%
                                                                    * {transformCurrency(getTotalPriceCart())} = {transformCurrency(Math.floor(((vouchersList[indexVoucher].discount / 100) * getTotalPriceCart()) / 1000) * 1000)}
                                                                </div>
                                                                <p className={'text-2xl w-[40rem] mx-auto'}>*Lưu ý: mã giảm giá
                                                                    chỉ
                                                                    giảm giá
                                                                    dựa trên giá trị giỏ hàng, không áp dụng
                                                                    giảm phí vận chuyển</p>
                                                            </>
                                                        )}
                                                    </>
                                                )
                                                : (
                                                    <div className={'text-2xl'}>
                                                        Đơn hàng của bạn không đủ điều kiện để áp dụng voucher
                                                    </div>
                                                )}
                                            <div className="mt-5 ">
                                                <select
                                                    className="w-max py-3 px-5 border border-solid border-gray-300 rounded-lg text-center mx-auto block mt-3 text-[1.6rem]">
                                                    <option className={'text-[1.6rem]'} value="cod">Thanh toán khi nhận hàng
                                                    </option>
                                                    <option className={'text-[1.6rem]'} value="online">Thanh toán qua ngân
                                                        hàng
                                                    </option>
                                                </select>
                                            </div>
                                            <div
                                                className="mt-5 text-[1.4rem] text-center font-semibold text-orange-600">{errorMessage}</div>
                                            <div className="mt-10 text-2xl text-center">
                                                <b>Tổng giá trị đơn hàng:</b> {transformCurrency(total)}
                                            </div>
                                            <Button type={'submit'} className="w-max mt-10 py-8 rounded-md mx-auto">Đặt
                                                hàng</Button>
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <div className={'p mt-10'}>
                                            Giỏ hàng của bạn đang rỗng nên không thể thanh toán.
                                        </div>
                                        <Button type={'reset'} onClick={() => router.push('/products')}
                                                className="w-max mt-10 py-8 rounded-md mx-auto">Quay lại trang mua
                                            hàng</Button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <RelatedProducts/>
                </div>

                <Alert showAlert={showSuccess} setShowAlert={setShowSuccess} message={'Đơn hàng của bạn đang được xử lý'}
                       subMessage={'Cảm ơn bạn đã tin tưởng và đặt hàng tại STECH, Chúng tôi sẽ xử lý đơn hàng và giao hàng đến bạn nhanh nhất có thể.'}/>
            </>

        );
    }
;

export default PaymentInterface;
