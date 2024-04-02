import WrapperLeft from "../WrapperLeft/WrapperLeft";
import WrapperRight from "../WrapperRight/WrapperRight";
import { assets } from "../utils/assets";

const Wrapper = () => {
  return (
    <>
      <div className="mt-[30px]">
        {/*Top icons */}
        <div className=" flex flex-wrap justify-center w-[100%] m-auto rounded-3xl p-2 gap-5 border-2 border-gray-300 shadow-xl sm:w-[50%]">
          {assets.map((item, i) => {
            return (
              <div
                key={i}
                className="flex justify-start items-center  gap-2 w-[130px] "
              >
                <img src={item.img} alt="" className="cursor-pointer" />

                <p
                  className={
                    item.description == "Comments"
                      ? "hover:underline cursor-pointer font-bold text-lg bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text"
                      : "hover:underline cursor-pointer"
                  }
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="sm:flex w-[95%] m-auto gap-5 mt-10 rounded-lg p-4 ">
          {/* left */}
          <WrapperLeft />

          {/* right */}
          <WrapperRight />
        </div>
      </div>
      <div className="flex justify-center">
        <img src="footer-ad.png" alt="" />
      </div>
    </>
  );
};

export default Wrapper;
