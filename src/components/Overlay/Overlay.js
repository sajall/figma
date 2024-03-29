import { useState } from "react";

const Overlay = () => {
  const assets = [
    {
      img: "",
      description: "# ASS-PMP-JOB-229",
    },
    {
      img: "privacy.png",
      description: "Public",
    },
    {
      img: "publishing date.png",
      description: Date(),
    },
    {
      img: "Applicants.png",
      description: "1K",
    },
    {
      img: "comments.png",
      description: "100",
    },
    {
      img: "Group.png",
      description: "100",
    },

    {
      img: "Shares.png",
      description: "200",
    },
    {
      img: "ratings.png",
      description: "4.8(33)",
    },
  ];

  const buttons = [
    {
      img: "icon-featured.png",
      des: "Featured",
    },
    {
      img: " crown.png",
      des: "VV Exclusive",
    },
    {
      img: " group.png",
      des: "Hiring",
    },
    {
      img: " icon-location.png",
      des: "UAE-Dubai",
    },
    {
      img: " icon-department.png",
      des: "Sales",
    },
    {
      img: " icon-role-level.png",
      des: "Executive Level",
    },
    {
      img: " icon-contract type.png",
      des: "Full Time",
    },
    {
      img: " icon-work type.png",
      des: "On Site",
    },
    {
      img: " Group1.png",
      des: "$1.2K",
    },
    {
      img: " icon-payment cycle.png",
      des: "Monthly",
    },
    {
      img: " Vector1.png",
      des: "28-march-2024",
    },
  ];

  const lowerButtons = [
    {
      img: "",
      des: "Apply",
    },
    {
      img: "react.png",
      des: "React",
    },
    {
      img: "Share.png",
      des: "Share",
    },
    {
      img: "Rate.png",
      des: "Rate",
    },
    {
      img: "Save.png",
      des: "Save",
    },
    {
      img: "Report.png",
      des: "Report",
    },
  ];

  return (
    <>
      {/* <img src="Overlay.png" alt="" /> */}
      <div className="border-gradient h-[100vh] w-[95vw] m-auto rounded-2xl flex flex-col justify-between">
        <div className="flex p-5">
          <div className="flex relative justify-center items-center gap-4">
            <img src="icon-user.png" alt="" className=" " />
            <img
              src="MD.png"
              alt=""
              className="w-[20px] h-[20px] absolute top-[60px] left-[60px]"
            />
            <span className="text-lg text-white font-bold">
              Dr. Sofia Ibrahim
            </span>
          </div>
          <div className="flex  ml-[25%]">
            <img src="active.png" alt="" className="h-[20px]" />
            <img src="list 1.png" alt="" className="h-[20px]" />
            <img src="list 1.png" alt="" className="h-[20px]" />
            <img src="list 1.png" alt="" className="h-[20px]" />
            <img src="list 1.png" alt="" className="h-[20px]" />
          </div>
        </div>
        {/* white text and icons */}
        <div>
          <div className="flex gap-1 p-2 border-b-4 border-gray-500 w-[95%] m-auto">
            {assets.map((item, i) => {
              return (
                <div key={i} className="flex justify-center gap-1">
                  <img src={item.img} alt="" className="cursor-pointer" />

                  <span className="text-white">{item.description} </span>
                  {i <= assets.length - 1 ? (
                    <span className="text-white">|</span>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* ------------------------------------ */}

          {/* buttons div */}
          <div className="flex items-center gap-5 border-b-4 border-gray-500 w-[95%] m-auto p-2">
            {buttons.map((item, i) => {
              return (
                <div className="flex items-center gap-1  rounded-3xl bg-purple-400 px-2 ">
                  <img src={item.img} alt="" />
                  <span>{item.des}</span>
                </div>
              );
            })}
          </div>

          {/* text div */}

          <div className="gap-5 border-b-4 border-gray-500 w-[95%] m-auto p-2 text-white text-[50px] font-extrabold">
            {
              " <This will be Job Name & it can be Over 2 Lines based on your Needs>"
            }
          </div>

          {/* lowerButtons */}

          <div className=" flex justify-center gap-5 w-[95%] m-auto p-3 text-white ">
            {lowerButtons.map((item, i) => {
              return (
                <div className="linear-gradient w-[100px] h-[30px] flex justify-center items-center gap-2 rounded-[50px] ">
                  <img src={item.img} alt="" />
                  <span>{item.des}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
