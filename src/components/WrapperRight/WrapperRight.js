import {category} from '../utils/assets';
import {employers} from '../utils/assets'

const WrapperRight = ()=>{
    return(
        <>
    <div className="w-[100%] sm:w-[23%]">
            <div className="p-2 rounded-lg border border-gray-200">
              <img src="Top-Carousel.png" alt="" className="cursor-pointer w-[100%]" />
            </div>
            {/* categories */}
            <div className="border border-gary-200 rounded-lg mt-4">
              <div > 
                <img src="category.png" alt="" className="cursor-pointer w-[100%]" />
              </div>
              <div className="p-3 flex flex-col gap-3 border-b-2 border-gray-200">
                {category.map((item, i) => {
                  return (
                    <div key={i} className="flex justify-between p-2 bg-gray-100 rounded-lg text-gray-500 font-medium">
                      <span>{item.name}</span>

                      <div class="bg-gradient-to-r from-blue-500 to-pink-700 p-[2px]">
                        <div class="bg-white ">{item.price}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-3">
                <img src="Size A.png" alt="" className="cursor-pointer w-[100%]" />
              </div>
            </div>
            {/* categories */}

            {/* top 10 v-employers */}
            <div className="border border-gary-200 rounded-lg mt-4">
              <div>
                <img src="header.png" alt="" className="cursor-pointer  w-[100%]" />
              </div>
              <div className="p-3 flex flex-col gap-3 border-b-2 border-gray-200">
                {employers.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col justify-between p-2 bg-gray-100 rounded-lg text-gray-500 font-medium"
                    >
                      <div class="flex justify-between items-center border-b-[2px] border-gray-300  p-[2px]">
                        <img src={item.img} alt="" />
                        <div class="flex flex-col text-sm ">
                          <span>{item.name}</span>
                          <span>{item.des}</span>
                        </div>
                        <img
                          src={item.icon}
                          alt=""
                          className="cursor-pointer h-[20px]"
                        />
                      </div>
                      {/* icons */}
                      <div className="flex gap-2">
                        {item.icons.map((elem, i) => {
                          return (
                            <div
                              key={i}
                              className="flex gap-1 justify-center items-center"
                            >
                              <img src={elem.img} alt="" />
                              <span>{elem.des}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-3">
                <img src="Size A.png" alt="" className="cursor-pointer w-[100%]" />
              </div>
            </div>
            {/* top 10 v-employers */}

            {/* Mid Ad carousel */}

            <div className=" rounded-lg border border-gray-200 mt-4">
              <img src="midAd.png" alt="" className="cursor-pointer w-[100%]" />
            </div>
            {/* Mid Ad carousel */}

            {/* Lower mid ad */}
            <div className=" rounded-lg border border-gray-200 mt-4">
              <img src="midAd2.png" alt="" className="cursor-pointer w-[100%]" />
            </div>
            {/* Lower mid ad */}


          </div>
        </>
    )
}

export default WrapperRight;