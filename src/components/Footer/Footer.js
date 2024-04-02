import { footerIcons } from "../utils/assets";
import { Story } from "../utils/assets";
import { opportunity } from "../utils/assets";
import { agency } from "../utils/assets";
import { hub } from "../utils/assets";
import { theVs } from "../utils/assets";
import { theAssets } from "../utils/assets";
import { theMembers } from "../utils/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col border-gradient w-[100%]  p-7">
        {/* top Section */}
        <div className="flex-wrap md:flex justify-between border-b-2 border-gray-300">
          {/* 1 */}
          <div className=" w-[100%] md:w-[25%]">
            {/* text */}
            <div className=" p-2 text-white border-b-2 border-gray-300">
              <p>
                Proudly, The 1st of It's Kind Worldwide, AIO Digital Platform
                For The Global Community Of The Veterinary Industry
              </p>
            </div>
            {/* lets talk */}
            <div className="flex flex-col gap-2 p-2 text-white border-b-2 border-gray-300 ">
              <span className="text-xl font-bold">Let's Talk</span>
              <div className="flex justify-start items-center gap-2">
                <img src="icon-email.png" alt="" className="cursor-pointer" />
                <a href="mailto:info@myvverse.com" rel="noreferrer">
                  info@myvverse.com
                </a>
              </div>
              <div className="flex gap-2">
                <img src="phone.png" alt="" className="cursor-pointer" />
                <span>+971 52 7956665</span>
              </div>
              <div className="flex gap-2">
                <img
                  src="icon-location.png"
                  alt=""
                  className="cursor-pointer"
                />
                <a href="location:Virtually Managed From UAE-Dubai">
                  Virtually Managed From UAE-Dubai
                </a>
              </div>
            </div>
            {/* icons */}
            <div className="flex justify-between  items-center py-3 border-b-2 border-gray-300">
              {footerIcons.map((icon, i) => {
                return <img src={icon.img} alt="" className="cursor-pointer" />;
              })}
            </div>
            {/* coming soon */}
            <div className="flex flex-col gap-3 py-2">
              <span className="text-xl font-bold text-white">Coming Soon</span>
              <div className="flex-wrap md:flex justify-start gap-5">
                <img src="image 36.png" alt="" className="cursor-pointer" />
                <img src="image 37.png" alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* 2*/}
          <div className=" w-[100%]  md:w-[15%] px-5">
            <span className="text-xl font-bold text-white p-2">Home</span>
            {/* the story */}
            <div className="p-2 flex flex-col items-start gap-2">
              <span className="text-lg font-bold text-white">The Story</span>
              <ul className="flex flex-col text-white ">
                {Story.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* the oppurtunity */}
            <div className="p-2 flex flex-col items-start gap-2">
              <span className="text-lg font-bold text-white">
                The Opportunity
              </span>
              <ul className="flex flex-col text-white">
                {opportunity.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* The Agency */}
            <div className="p-2 flex flex-col items-start gap-2">
              <span className="text-lg font-bold text-white">The Agency</span>
              <ul className="flex flex-col text-white gap-1 ">
                {agency.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* The Hub */}
            <div className="p-2 flex flex-col items-start gap-2">
              <span className="text-lg font-bold text-white">The Hub</span>
              <ul className="flex flex-col text-white gap-1 ">
                {hub.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 3 */}

          <div className=" w-[100%]  md:w-[15%]  ">
            <span className="text-xl font-bold text-white p-2">The Vs</span>
            {/* The Vs */}
            <div className="p-2 flex flex-col items-start gap-2">
              <ul className="flex flex-col text-white gap-1 ">
                {theVs.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 4 */}

          <div className="w-[100%] md:w-[15%] ">
            <span className="text-xl font-bold text-white p-2">The Assets</span>
            {/* The Vs */}
            <div className="p-2 flex flex-col items-start gap-2">
              <ul className="flex flex-col text-white gap-1">
                {theAssets.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* 5 */}
          <div className=" w-[100%]  md:w-[15%] ">
            <span className="text-xl font-bold text-white p-2">
              The Members
            </span>
            {/* The Vs */}
            <div className="p-2 flex flex-col items-start gap-2">
              <ul className="flex flex-col text-white gap-1">
                {theMembers.map((item, i) => {
                  return (
                    <li className="flex justify-start items-center gap-2">
                      <img src={item.img} alt="" className="cursor-pointer" />
                      <span className="hover:underline cursor-pointer">
                        {item.des}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* top Section ended */}

        {/* Lower Section */}
        <div className="md:flex justify-between items-center text-white py-3 ">
          <div className="w-[100%] md:w-[50%] flex justify-start items-center gap-2 text-white">
            <span>Built with</span>
            <img src="footer-heart.png" alt="" />
            <span>By Area-H</span>
          </div>
          <div className="flex w-[100%] lg:w-[18%]">
            Privacy Policy - Terms & Conditions
          </div>
        </div>
        {/* Lower Section ended*/}
      </div>
    </>
  );
};

export default Footer;
