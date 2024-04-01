
"use client";
import {card} from '../utils/assets'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

export default function Cards( ) {


  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2.1}
        spaceBetween={30}
        slidesPerColumn={2}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" m-[20px] 
       "
      >
        {card?.map((slide, i) => (
        <SwiperSlide key={i} className="">
          <div className="rounded-xl border border-gray-200 shadow-xl">
            <div className="flex flex-col">
              {/* one image */}

              <div>
                <img src={slide.img} alt="" className="block w-[100%] h-[80%] object-cover" />
              </div>
              {/* two text*/}
              <div className="p-2 border-b-2 border-gray-200 w-[95%] m-auto">
                <span className="text-xl font-bold">{slide.des}</span>
              </div>
              {/* three icons */}
              <div className="flex gap-3 p-2 border-b-2 border-gray-200 w-[95%] m-auto flex-wrap ">
                {slide.icons.map((icon, i) => {
                  return (
                    <div key={i} className="flex  gap-1 justify-center items-center">
                      <img src={icon.img} alt="" />
                      <span>{icon.salary}</span>
                    </div>
                  );
                })}
              </div>
              {/* for buttons */}
              <div className="flex flex-wrap gap-1 items-center p-2 border-b-2 border-gray-200 w-[95%] m-auto">
                {slide.buttons.map((item, i) => {
                  return (
                    <div
                      className={`flex justify-center items-center ${
                        i < 2 ? "btn-gradient" : "bg-purple-600"
                      } rounded-full px-2 gap-2 h-[35px] text-white cursor-pointer `}
                    >
                      <img key={i} src={item.img} alt="" />
                      <span>{item.des}</span>

                      
                    </div>
                  );
                })}
              </div>
              {/* dr sofia */}
              <div className="flex gap-3 p-2 w-[95%] m-auto">
                {slide.dr.map((item, i) => {
                  return (
                    <>
                      <div>
                        <img src={item.img} alt="" className="w-[60px]" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-bold text-lg">{item.name}</span>
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
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        
        </SwiperSlide>
        ))} 
      </Swiper>
    </>
  );
}
