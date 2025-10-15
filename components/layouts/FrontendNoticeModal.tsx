'use client';

import React, { useState, useEffect } from 'react';
import { X, Zap, Globe } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'demo_modal_shown_v3';

const FrontendNoticeModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasShown = localStorage.getItem(LOCAL_STORAGE_KEY);
        const timer = setTimeout(() => {
            if (!hasShown) {
                setIsOpen(true);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
            aria-modal="true"
            role="dialog"
        >
            {/* Tăng kích thước Modal lên max-w-3xl */}
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl max-w-4xl w-full transform transition-all scale-100 duration-300 ease-out border-t-8 border-teal-600">

                {/* Header */}
                <div className="flex justify-between items-start mb-6 border-b pb-4">
                    <h2 className="text-3xl font-extrabold text-teal-700 flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-teal-500" /> {/* Icon nhỏ lại: w-6 h-6 */}
                        Chào mừng đến với **STECH Frontend Only**
                    </h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                        aria-label="Đóng thông báo"
                    >
                        <X className="w-6 h-6" /> {/* Icon nhỏ lại: w-6 h-6 */}
                    </button>
                </div>

                {/* Nội dung chi tiết */}
                <p className="text-gray-700 mb-6 p text-lg">
                    Dự án này là phiên bản trưng bày giao diện (UI/UX) của ứng dụng mua sắm, được triển khai dưới dạng **ứng dụng tĩnh (Static Application) trên Vercel.
                </p>

                {/* Sử dụng layout 2 cột trên desktop để tận dụng chiều rộng */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Cột 1: Tính năng */}
                    <div className="bg-teal-50 p-5 rounded-lg border border-teal-200">
                        <h3 className="text-3xl font-semibold text-teal-800 mb-3 flex items-center">
                            <Globe className="w-5 h-5 mr-2" />
                            Trang web này có gì hoạt động?
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 p text-base pl-4">
                            <li className="font-semibold text-teal-900">
                                Cart Logic: Hoạt động
                                <span className="font-normal text-gray-600"> (Thêm/Xóa/Cập nhật số lượng sản phẩm bằng logic Client-Side).</span>
                            </li>
                            <li className="font-semibold">
                                Định tuyến & Cấu trúc: Cấu trúc Next.js App Router hoàn chỉnh.
                            </li>
                            <li className="font-semibold">
                                Tìm kiếm và lọc sản phẩm: tìm sản phẩm trên thanh tìm kiếm và lọc theo thương hiệu.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                        <h3 className="text-3xl font-semibold text-red-800 mb-3 flex items-center">
                            <X className="w-5 h-5 mr-2" />
                            Hạn chế quan trọng
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-800 p text-base pl-4">
                            <li className="font-semibold">
                                Backend & Database: Không tồn tại.
                                <span className="font-normal text-gray-600"> (Dữ liệu sản phẩm được mã hóa cứng/mock).</span>
                            </li>
                            <li className="font-semibold">
                                Xác thực: Các trang `/sign-in` và `/sign-up` chỉ là giao diện. Form gửi đi sẽ không hoạt động.
                            </li>
                            <li className="font-semibold">
                                Thanh toán: Trang `/checkout` là giao diện và không xử lý giao dịch.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p text-sm text-gray-600 border-t pt-4 mt-6">
                    <p className='font-medium p'>
                        Công nghệ chính: Next.js (App Router), TypeScript, Tailwind CSS.
                    </p>
                    <p className="p mt-4">
                        Mục tiêu chính là trưng bày kỹ năng xây dựng giao diện người dùng hiện đại và cấu trúc dự án.
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={handleClose}
                        className="w-full p md:w-auto px-10 py-3 bg-teal-600 text-white text-lg font-bold rounded-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-300/50"
                    >
                        Tôi đã hiểu, xem Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FrontendNoticeModal;