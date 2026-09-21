import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="border  text-white border-white pt-3 mx-16">
      <div className="flex gap-2 items-center ">
        <img src={logo} className="h-9" alt="" />
        <p
          style={{ fontFamily: "Momo Trust Display" }}
          className="text-4xl [-webkit-text-stroke:3.5px] text-[#A6A6A6]"
        >
          HAUNT
        </p>
      </div>
    </div>
  );
};

export default Navbar;
