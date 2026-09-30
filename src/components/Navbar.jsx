import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // const underlineRef = useRef(null);

  // useEffect(() => {
  //   gsap.set(undelineRef.current, {});
  // }, []);

  const cursorEnter = (e) => {
    const underline = e.currentTarget.querySelector(".underline");

    gsap.killTweensOf(underline);
    gsap.fromTo(
      underline,
      { x: -30, opacity: 0 },
      {
        // width: "100%",
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      },
    );
  };

  const cursorLeave = (e) => {
    const underline = e.currentTarget.querySelector(".underline");

    gsap.killTweensOf(underline);
    gsap.to(underline, {
      x: 30,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div className="  text-white items-center  flex justify-between pt-3 mx-16">
      <div
        onClick={() => (window.location.href = "/")}
        className="flex cursor-pointer gap-2 items-center "
      >
        <img src={logo} className="h-9" alt="" />
        <p
          style={{ fontFamily: "Momo Trust Display" }}
          className="text-4xl [-webkit-text-stroke:3.5px] text-[#A6A6A6]"
        >
          HAUNT
        </p>
      </div>

      <div className="font-momo text-lg relative gap-9  bottom-1.5  text-[#A6A6A6] flex">
        <div
          onClick={() => (window.location.href = "/search")}
          onMouseEnter={cursorEnter}
          onMouseLeave={cursorLeave}
          className="relative  cursor-pointer "
        >
          <p className="hover:text-white  ">Search</p>
          <span
            // onClick={}
            // ref={underlineRef}
            className="absolute underline h-[1px] -bottom-0 w-[100%] left-0 opacity-0  bg-white"
          ></span>
        </div>

        <div
          onClick={() => (window.location.href = "/about")}
          onMouseEnter={cursorEnter}
          onMouseLeave={cursorLeave}
          className="relative cursor-pointer  "
        >
          <p className="hover:text-white  ">About us</p>
          <span
            // ref={underlineRef}
            className="absolute underline h-[1px] -bottom-0 w-[100%] left-0 opacity-0  bg-white"
          ></span>
        </div>
        <div
          onClick={() => (window.location.href = "/contact")}
          onMouseEnter={cursorEnter}
          onMouseLeave={cursorLeave}
          className="relative cursor-pointer  "
        >
          <p className="hover:text-white  ">Contact us</p>
          <span
            // ref={underlineRef}
            className="absolute underline h-[1px] -bottom-0 w-[100%] left-0 opacity-0  bg-white"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
