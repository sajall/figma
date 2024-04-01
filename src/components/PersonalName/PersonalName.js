

const PersonalName=()=>{
    return(
        <>
         <div className="w-[100%] flex flex-col gap-3  mt-4   ">
                    <div className="flex gap-3 ">
                        <div>
                            <img src="personal-name.png" alt="" />
                        </div>
                        {/* 2nd div */}
                        <div className=" p-4 border border-gray-200 rounded-lg shadow-md w-[100%]">
                            <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                                <span className="font-bold">{"<Personal Name>"}</span>
                                <img src="dots.png" alt="" className="cursor-pointer" />
                            </div>
                            <div className="flex items-center justify-between p-2 ">
                                <span className="text-gray-500 font-semibold">
                                    Suspendisse vitae mi a nunc. Sed amet
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex justify-between items-center w-[95%] ml-[5%] p-2 ">
                        <div className="flex gap-5">
                            <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                                React
                            </span>
                            <span className=" cursor-pointer font-bold text-sm bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text">
                                Reply
                            </span>
                        </div>
                        <div className="md:flex text-gray-500 gap-4 items-center justify-center font-mono font-bold">
                            <span>29-March-2024 11:30 AM |</span>
                            <div className="flex gap-1">
                                <img
                                    src="Reactions.png"
                                    alt=""
                                    className="cursor-pointer h-[20px]"
                                />
                                <span>100</span>
                            </div>
                            <div className="flex">
                                <img
                                    src="replies.png"
                                    alt=""
                                    className="cursor-pointer h-[20px]"
                                />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default PersonalName;