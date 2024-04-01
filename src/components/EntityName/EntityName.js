

const EntityName = ()=>{
    return(
        <>
            <div className="w-[100%] flex flex-col gap-3  mt-4   ">
                    <div className="md:flex gap-3 ">
                        <div>
                            <img src="logo2.png" alt="" />
                        </div>
                        {/* 2nd div */}
                        <div className=" 
                        p-4 border border-gray-200 rounded-lg shadow-md w-full md:w-[100%]">
                            <div className="
                          
                            border-b-[2px] border-gray-300 w-full md:w-[100%] m-auto flex justify-between items-center"
                            >
                                <span className="font-bold">{"<Entity Name>"}</span>
                                <img src="dots.png" alt="" className="cursor-pointer" />
                            </div>
                            <div className="flex items-center justify-between ">
                                <span className="text-gray-500 font-semibold">
                                    Ut sit nunc egestas ante. Dictum arcu eget eros ac. Duis
                                    ut malesuada ut lacus.
                                </span>
                                <img
                                
                                    src="reportVisitor.png"
                                    alt=""
                                    className="mt-[-20px] mr-[-10px] cursor-pointer hidden md:block"
                                />
                            </div>
                            <div>
                                <img
                                    src="vedioPlayer.png "
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex justify-between items-center w-[95%] ml-[5%] p-2 border-b-2 border-gray-200">
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

export default EntityName;