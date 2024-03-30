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
      des: "VV Executive",
    },
    {
      img: " Group1.png",
      des: "Hiring",
    },
    {
      img: " icon-location.png",
      des: "UAE Dubai",
    },
    {
      img: "icon-department.png",
      des: "Sales",
    },
    {
      img: " icon-role-level.png",
      des: "executive level",
    },

    {
      img: "icon-contract type.png",
      des: "Full Time",
    },
    {
      img: " icon-work type.png",
      des: "On Site",
    },
    {
      img: " group.png",
      des: "$1.2K",
    },
    {
      img: "icon-payment cycle.png",
      des: "Monthly",
    },
    {
      img: " Vector1.png",
      des: "29-March-2024",
    },
  ];

  const lowerButtons = [
    {
      img: "apply.png",
    },
    {
      img: "react.png",
    },
    {
      img: "Share.png",
    },
    {
      img: "Rate-Rated.png",
    },
    {
      img: "Save-Saved.png",
    },
    {
      img: "report.png",
    },
  ];

  const lines = [
    "active.png",
    "list 1.png ",
    "list 1.png",
    "list 1.png",
    "list 1.png",
  ];

  return (
    <>
      {/* <img src="Overlay.png" alt="" /> */}

      <div className="bg-[url('/my.png')]  bg-no-repeat bg-cover bg-center h-[100vh] w-[95vw] m-auto rounded-2xl flex flex-col justify-between overflow-auto">
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

          {/* white and blue lines */}
          <div className="hidden lg:flex ml-[25%] ">
            {lines.map((line, i) => {
              return <img key={i} src={line} alt="" className="h-[20px]" />;
            })}
          </div>
          {/* ===================== */}
        </div>
        {/* white text and icons */}
        <div>
          <div className="flex flex-wrap gap-1 p-2 border-b-4 border-gray-500 w-[95%] m-auto ">
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
          <div className="flex flex-wrap gap-1 items-center p-2 border-b-4 border-gray-500 w-[95%] m-auto">
            {buttons.map((item, i) => {
              return (
                <div
                  className={`flex justify-center items-center ${
                    i < 2 ? "btn-gradient" : "bg-purple-600"
                  } rounded-full px-2 gap-2 h-[35px] text-white `}
                >
                  <img key={i} src={item.img} alt="" />
                  <span>{item.des}</span>

                  <div></div>
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

          <div className=" flex flex-wrap justify-center gap-5 w-[95%] m-auto p-3 text-white ">
            {lowerButtons.map((item, i) => {
              return <img src={item.img} alt="" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
