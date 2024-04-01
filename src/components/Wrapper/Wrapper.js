import WrapperLeft from "../WrapperLeft/WrapperLeft";
import WrapperRight from "../WrapperRight/WrapperRight";
import { assets } from "../utils/assets";

const Wrapper = () => {
  return (
    <>
      <div className="mt-[30px]   ">
        {/*Top icons */}
        <div className=" flex flex-wrap justify-center w-[50%] m-auto rounded-3xl p-2 gap-5 border-2 border-gray-300 shadow-xl">
          {assets.map((item, i) => {
            return (
              <div
                key={i}
                className="flex justify-start items-center  gap-2 w-[130px] "
              >
                <img src={item.img} alt="" />

                <p
                  className={
                    item.description == "Comments"
                      ? "font-bold text-lg bg-gradient-to-r from-blue-900 via-purple-900 to-purple-700 inline-block text-transparent bg-clip-text"
                      : ""
                  }
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex w-[95%]  m-auto gap-5 mt-10 rounded-lg p-4 ">
          {/* left */}
          <WrapperLeft />

          {/* right */}
          <WrapperRight />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
