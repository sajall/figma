const PersonalInfo = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col gap-3 ">
        <div className="md:flex gap-3 h-[100%]">
          <div className="flex flex-col h-[100%] ">
            <img src="personal-name.png" alt="" className="w-[70px]" />
            <div className="h-[620px] w-[100%] ml-[50%] border-l-2 border-b-2 border-gray-200 rounded-b-lg hidden lg:block"></div>
          </div>
          {/* 2nd div */}
          <div className=" ">
            <div className=" p-4 border border-gray-200 rounded-lg shadow-md">
              <div className="border-b-[2px] border-gray-300 w-[100%] m-auto flex justify-between items-center">
                <span className="font-bold">{"<Personal Name>"}</span>
                <img src="dots.png" alt="" className="cursor-pointer" />
              </div>
              <div className="flex items-center justify-center ">
                <span className="text-gray-500 font-semibold p-2">
                  Ut purus pretium nibh fringilla cursus adipiscing odio vitae.
                  Vehicula amet elit libero mauris ac sit nisl amet iaculis
                  elementum.
                </span>
              </div>
              <div className=" flex-wrap justify-center md:flex ">
                <img src="photo1.png" alt="" className="cursor-pointer" />
                <div className=" w-[50%]  flex justify-center flex-wrap">
                  <img src="vid.png" alt="" className="cursor-pointer" />
                  <img src="photo.png" alt="" className="cursor-pointer" />
                  <img src="vid.png" alt="" className="cursor-pointer" />
                  <img src="photo.png" alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="md:flex justify-between items-center  p-2">
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
            <div className=" w-[50%] p-2">
              <img src="Size B.png" alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
