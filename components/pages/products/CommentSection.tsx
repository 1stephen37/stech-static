import Image from 'next/image'
import {ApiImage, reviews} from "@/app/constants";
import {Button} from "@/components/ui/button";

const CommentSection = () => {
    return (
        <section className="w-[65%]">
            <h2 className="heading">Bình luận</h2>
            <div className="mt-5">
                {reviews?.map((comment, index) => (
                    <div key={index} className="w-full p-4 rounded-lg shadow-lg bg-muted mt-8">
                        <div className="flex items-center gap-5">
                            <div className="relative w-[50px] h-[50px]">
                                <Image
                                    src={comment.avatar ? (comment.avatar.startsWith('https') ? (comment.avatar) : (ApiImage + comment.avatar)) : '/images/sections/avatar-user-review-2.jpg'}
                                    className={'object-contain rounded-full'} alt={''}
                                    fill sizes={'100'}/>
                            </div>
                            <h3 className="text-3xl capitalize font-bold mb-2">{comment.name}</h3>
                        </div>
                        <p className="text-gray-700 mt-5 text-3xl">{comment.content}</p>
                        <div className="ml-auto mt-5 w-max flex items-center ">
                            <Button onClick={() => window.alert('Đây chỉ là giao diện, không thể thực hiện chức năng')}
                                    variant={'link'}
                                    className="">
                                Trả lời
                            </Button>
                        </div>
                        {comment.replies?.map((reply, index) => (
                            <div key={`${index}-reply`} className="ml-20 pl-5 border-solid border-l-2 border-gray-200">
                                <div className="flex items-center gap-5">
                                    <div className="w-max h-max">
                                        <Image
                                            src={reply.avatar ? (reply.avatar.startsWith('https') ? (reply.avatar) : (ApiImage + reply.avatar)) : '/images/sections/avatar-user-review-2.jpg'}
                                            className={'object-contain rounded-full'} alt={''}
                                            width={50} height={50}/>
                                    </div>
                                    <h3 className="text-3xl capitalize font-bold mb-2">{reply.name}</h3>
                                </div>
                                <p className="text-gray-700 mt-5 text-3xl">{reply.content}</p>
                                <div className="ml-auto mt-5 w-max flex items-center ">
                                    <Button
                                        onClick={() => window.alert('Đây chỉ là giao diện, không thể thực hiện chức năng')}
                                        variant={'link'}
                                        className="">
                                        Trả lời
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {/*{replyingToComment === comment.id_review && (*/}
                        {/*    <form onSubmit={e => handleRepComment(e)} className="w-full mt-10">*/}
                        {/*        <Textarea*/}
                        {/*            placeholder={"cảm nghĩ của bạn"}*/}
                        {/*            value={newRepComment}*/}
                        {/*            onChange={(e) => setNewRepComment(e.target.value)}*/}
                        {/*            className="bg-white border-gray-300 h-[3rem] rounded-md px-3 py-2 border border-solid w-full outline-none text-2xl"/>*/}
                        {/*        <div className="flex justify-end gap-5 mt-3 ">*/}
                        {/*            <button*/}
                        {/*                onClick={handleCancelReply}*/}
                        {/*                className="bg-red-500 hover:bg-red-600 text-2xl text-white px-4 py-2 rounded-md">*/}
                        {/*                Hủy*/}
                        {/*            </button>*/}
                        {/*            <button type='submit'*/}
                        {/*                    className="bg-primary hover:bg-secondary hover:text-primary border border-solid hover:border-primary text-2xl text-white px-4 py-2 rounded-md">*/}
                        {/*                Gửi*/}
                        {/*            </button>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*)}*/}
                    </div>
                ))}
                <div className="mt-8">
                    <h2 className="subHeading mb-2">
                        Hãy cho chúng tôi biết cảm nhận của bạn về sản phẩm
                    </h2>
                    <div className="">
                        <textarea className="w-full h-[10rem] text-2xl border outline-0 rounded-lg border-gray-400 p-4"
                                  defaultValue={'Màu sắc và kiểu dáng...'}
                        ></textarea>
                        <Button onClick={() => window.alert('Đây chỉ là giao diện, không thể thực hiện chức năng')}
                                size={'default'}>Gửi đánh giá</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentSection;
