'use client';
import React, {useState} from 'react';
import Alert from "@/components/layouts/Alert";
import Image from 'next/image';

function News() {
    const [alert, setAlert] = useState(false);

    const handleAlert = () => {
        setAlert(true);
    }

    return (
        <>
            <section className="mt-[4rem]">
                <div className="">
                    <h1 className="heading mb-5">Tin tức Công nghệ</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div onClick={handleAlert}
                             className="bg-white cursor-pointer shadow-lg rounded-lg flex flex-row">
                            <div className="p-10 flex flex-col justify-between">
                                <div className="relative object-contain rounded-lg mb-2 w-full h-[25rem]">
                                    <Image alt={'tin tức 1'} className={'rounded-lg'} priority={false} fill
                                           src={'/images/sections/news18-1.jpg'} sizes={'100'}/>
                                </div>
                                <div>
                                    <h2 className="text-[2rem] dark:text-secondary font-bold mb-4">iOS 18 mang tới cải
                                        tiến gì cho màn hình
                                        chính và khóa của iPhone ?</h2>
                                    <p className="text-gray-700 text-[1.6rem]">Trong bài viết dưới đây, chúng ta hãy
                                        cùng tìm hiểu những thay đổi, cải tiến mà Apple đã mang đến cho màn hình chính
                                        và khóa iPhone thông qua bản cập nhật iOS 18 sắp tới.</p>
                                </div>
                                <div className="flex text-[1.4rem] items-center text-gray-500 mt-6">
                                    <span className="mr-4">2024-05-01</span>
                                    <span className="mr-4">•</span>
                                    <span>Stephen Nguyễn</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleAlert}
                             className="bg-white cursor-pointer shadow-lg rounded-lg  flex flex-row">
                            <div className="p-10 flex flex-col justify-between">
                                <div className="relative object-contain rounded-lg mb-2 w-full h-[25rem]">
                                    <Image alt={'tin tức 2'} className={'rounded-lg'} priority={false} fill
                                           src={'/images/sections/news-2-khong-quet-duoc-cccd-de-xac-thuc-sinh-trac-hoc-1.jpg'}
                                           sizes={'100'}/>
                                </div>
                                <div>
                                    <h2 className="text-[2rem] font-bold mb-4">Cách khắc phục lỗi không quét được CCCD
                                        để xác thực sinh trắc học ?</h2>
                                    <p className="text-gray-700 text-[1.6rem]">
                                        Trong thời gian gần đây, các ngân hàng đã yêu cầu người dùng cập nhật thông sinh
                                        trắc học để đảm bảo an toàn. Trong bài viết này, hãy cùng chúng tôi tìm cách để
                                        xác thực
                                    </p>
                                </div>
                                <div className="flex text-[1.4rem] items-center text-gray-500 mt-6">
                                    <span className="mr-4">2024-05-01</span>
                                    <span className="mr-4">•</span>
                                    <span>Stephen Nguyễn</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleAlert}
                             className="bg-white cursor-pointer shadow-lg rounded-lg  flex flex-row">
                            <div className="p-10 flex flex-col justify-between">
                                <div className="relative object-contain rounded-lg mb-2 w-full h-[25rem]">
                                    <Image alt={'tin tức 3'} className={'rounded-lg'} priority={false} fill
                                           src={'/images/sections/news-3-danh-gia-galaxy-z-fold3-23.jpg'}
                                           sizes={'100'}/>
                                </div>
                                <div>
                                    <h2 className="text-[2rem] font-bold mb-4">
                                        Đánh giá Galaxy Z Fold3 sau 3 năm sử dụng: của bền tại người !
                                    </h2>
                                    <p className="text-gray-700 text-[1.6rem]">
                                        Galaxy Z Fold3 là chiếc điện thoại gập toàn diện nhất ở thời điểm ra mắt với
                                        những nâng cấp từ phần cứng mạnh mẽ, khả năng chống nước được cải tiến mang đến
                                        trải nghiệm mượt mà và thông minh hơn.
                                    </p>
                                </div>
                                <div className="flex text-[1.4rem] items-center text-gray-500 mt-6">
                                    <span className="mr-4">2024-05-01</span>
                                    <span className="mr-4">•</span>
                                    <span>Stephen Nguyễn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Alert showAlert={alert} setShowAlert={setAlert}
                   subMessage={'Bạn vui lòng quay lại sau khi chúng tôi hoàn tất cập nhật cho tính năng - điều này có thể mất từ 1 đến 2 ngày để sữa chữa, chúng tôi thành thật xin lỗi vì sự bất tiện này.'}
                   message={'Tính năng này đang được chúng tôi cập nhật !'}/>
        </>
    );
}

export default News;
