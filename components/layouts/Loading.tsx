'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useAppContext} from "@/context/AppContext";

function Loading() {
    const {isLoading} = useAppContext();

    if (isLoading) {
        return (
            <div
                className="fixed inset-0 flex z-30 items-center justify-center min-h-screen bg-[rgba(0,0,0,0.6)] text-white">
                <div className="text-center">
                    <motion.div
                        className="w-[10rem] h-[10rem] mx-auto border-[1rem] border-t-[1rem] border-white rounded-full animate-spin"
                        style={{borderTopColor: 'transparent'}}
                    />

                    <div className="mt-10">
                        <p className="lg:text-[3.6rem] text-[2.4rem] font-bold leading-[125%] tracking-normal">Đang
                            tải...</p>
                        <p className="lg:text-[1.8rem] text-[2.4rem] font-medium leading-[125%] tracking-normal mt-5">Vui
                            lòng
                            chờ trong giây lát</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;