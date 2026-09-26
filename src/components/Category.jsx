import React from "react";
import img1 from "../assets/hereditary_img.jpg";

const Category = () => {
  const cat = [
    {
      name: "Horror",
    },
    {
      name: "Creepy",
    },
    {
      name: "Psychological Horror",
    },
    {
      name: "Supernatural Horror",
    },
    {
      name: "Analog Horror",
    },
    {
      name: "Gothic Horror",
    },
    {
      name: "Paranormal",
    },
    {
      name: "Body Horror",
    },
    {
      name: "Cosmic Horror",
    },
    {
      name: "Uncanny",
    },
    {
      name: "Bloody Horror",
    },
    {
      name: "and more!",
    },
  ];

  return (
    <div className=" text-white  px-30 ">
      {/* container */}
      <div className="w-full pt-22 pb-30 border  relative h-full rounded-4xl flex justify-center items-center bg-[#ffffffcd]  text-center overflow-hidden gap-2 flex-col">
        <p className="text-2xl mb-10 font-semibold italic text-[#A6A6A6] font-livvic">
          Explore the collection
        </p>

        {/* stage */}
        <div className="w-full flex items-center justify-center relative ">
          {/* cards */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              className="absolute w-[clamp(78px,16vw,210px)]  border-4 aspect-[2/3] object-cover rounded-2xl top-[-20.5%] left-[7.5%]"
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(78px,16vw,210px)] border-4 aspect-[2/3] object-cover rounded-2xl top-[-10%] right-[7.5%] "
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(76px,15vw,200px)] border-4 aspect-[2/3] object-cover rounded-2xl bottom-[30%] left-[12.5%]"
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(78px,15vw,200px)] border-4 rounded-2xl right-[12.5%] bottom-[42%] "
              src={img1}
              alt=""
            />
          </div>

          {/* list  */}
          <div className="flex flex-col justify-center items-center gap-3 font-extrabold">
            {/* items */}

            {cat.map((c, i) => (
              <div key={i} className="flex w-full justify-center items-center ">
                <span className="place-items-center">
                  <h4 className="text-7xl font-momo text-black ">{c.name}</h4>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
