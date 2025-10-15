import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area"

function DetailsFullComponents({showDetails, setShowDetails, details, memory}: {
    showDetails: boolean,
    setShowDetails: React.Dispatch<React.SetStateAction<boolean>>,
    details: {
        name: string,
        id_specification_category: number,
        detail: {
            name: string;
            value: string
        }[]
    }[],
    memory: string
}) {
    if (showDetails && details.length > 0) {
        return (
            <div onClick={() => setShowDetails(false)}
                 className="fixed inset-0 backdrop-blur-sm z-50 bg-[rgba(0,0,0,0.7)] grid place-items-center">
                <div className="bg-white rounded-lg p-5 w-max h-max"
                     onClick={(e) => e.stopPropagation()}>
                    <ScrollArea className="h-[70dvh] w-[50dvh] 2xl:w-[50rem]">
                        <h1 className="heading mb-1">Thông số kĩ thuật</h1>
                        <div
                            className="grid grid-cols-1 gap-y-10 border border-gray-500 border-solid p-5 rounded-xl mt-5 mr-5 text-2xl">
                            {details.map((details, index) => {
                                if (index === 1) {
                                    return (
                                        <div key={index} className="flex flex-col gap-5">
                                            <h1 className="font-medium text-[2rem]">RAM & lưu trữ</h1>
                                            <div className="grid grid-cols-1 gap-y-5">
                                                <div className="flex justify-between">
                                                    <div className={`w-max min-w-[60%] py-2 
                                                                px-5 rounded-md bg-gray-100`}>Dung lượng RAM
                                                    </div>
                                                    <div className={`w-max min-w-[40%] py-2
                                                                 px-5 rounded-md bg-gray-100`}>{memory.split('/')[0]}</div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className={`w-max min-w-[60%] py-2 
                                                                px-5 rounded-md`}>Bộ nhớ trong
                                                    </div>
                                                    <div className={`w-max min-w-[40%] py-2
                                                                 px-5 rounded-md`}>{memory.split('/')[1]}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div key={index} className="flex flex-col gap-5">
                                        <h1 className="font-medium text-[2rem]">{details.name}</h1>
                                        <div className="grid grid-cols-1 gap-y-5">
                                            {details.detail.map((detail, index) => {
                                                return (
                                                    <div key={index} data-index={index}
                                                         className="flex justify-between">
                                                        <div className={`w-max min-w-[60%] py-2 
                                                                px-5 rounded-md ` + `${index % 2 !== 0 ? "" :
                                                            "bg-gray-100"}`}>{detail.name}</div>
                                                        <div className={`w-max min-w-[40%] py-2
                                                                 px-5 rounded-md ` + `${index % 2 !== 0 ? "" :
                                                            "bg-gray-100"}`}>{detail.value}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        );
    }
}

export default DetailsFullComponents;
