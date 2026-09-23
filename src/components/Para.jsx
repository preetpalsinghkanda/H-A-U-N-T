import React from "react";
import gsap from "gsap";
import paraImg2 from "../assets/it_img.jpg";
import paraImg1 from "../assets/nun.jpg";
import paraImg3 from "../assets/maxresdefault.jpg";

const Para = () => {
  return (
    <div className="text-white my-20 border border-white flex items-center justify-center">
      <p className="uppercase   font-livvic font-extrabold flex text-center flex-col text-7xl">
        <span>we're building</span>
        <span className="flex items-center  gap-4">
          <span className="lowercase text-[#dc2121c1] font-mouse ">a </span> new
          night{" "}
          <span className=" relative  inline-block h-7 w-10 rounded-lg  bg-white">
            <span className="h-60 inline-block -right-40  w-80 absolute  -top-25 rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={paraImg1}
                alt=""
              />
            </span>
          </span>{" "}
          mare
        </span>
        <span>that follows</span>
        <span className="text-[#dc2121c1] flex justify-center gap-7 ">
          {" "}
          <span>y</span>
          <span>o</span>
          <span>u</span>
        </span>
        <span className="flex justify-center items-center gap-4">
          home{" "}
          <span className=" relative  inline-block h-7 w-10 rounded-lg  bg-white">
            <span className="h-60 inline-block  w-80 absolute -right-36  -top-28 rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={paraImg2}
                alt=""
              />
            </span>
          </span>{" "}
          through
        </span>
        <span> </span>
        <span>
          ever<span className="text-[#dc2121c1]">y</span> shadow
        </span>
        <span>
          you can<span className="font-mouse pr-2 text-[#dc2121c1]">'</span>t
          escape
        </span>
        <span className="flex items-center justify-center gap-4">
          {" "}
          un{" "}
          <span className=" relative  inline-block h-7 w-10 rounded-lg  bg-white">
            <span className="h-60 inline-block  w-80 absolute -left-35 -top-28 rounded-2xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={paraImg3}
                alt=""
              />
            </span>
          </span>
          fortunately
        </span>
      </p>
    </div>
  );
};

export default Para;
