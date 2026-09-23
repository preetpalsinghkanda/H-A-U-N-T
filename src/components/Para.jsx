import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import paraImg2 from "../assets/it_img.jpg";
import paraImg1 from "../assets/nun.jpg";
import paraImg3 from "../assets/maxresdefault.jpg";

const Para = () => {


  // const hover=()=>{
    
  // }


  const imageRef = useRef(null);
  const dotRef = useRef(null);
  const isActive = useRef(false);

  // const

  useEffect(() => {
    gsap.set(imageRef.current, {
      opacity: 0,
      scale: 0,
      clipPath: "inset(50%,50%,50%,50%)",
    });

    const handleMouse = (x) => {
      const position = dotRef.current.getBoundingClientRect();

      const X = position.left + position.width / 2;
      const Y = position.top + position.height / 2;

      const dis = Math.hypot(x.clientX - X, x.clientY - Y);

      if (dis < 90 && !isActive.current) {
        isActive.current = true;
        gsap.killTweensOf(imageRef.current);
        gsap.to(
          imageRef.current,

          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% ,0% ,0% ,0%)",
            duration: 0.4,
            ease: "power3.out",
          },
        );
      }

      if (dis >= 90 && isActive.current) {
        isActive.current = false;

        gsap.killTweensOf(imageRef.current);

        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0,
          clipPath: "inset(50%,50%,50%,50%)",
          duration: 0.4,
          ease: "power3.in",
        });
      }
    };

    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <div className="text-white my-20  flex items-center justify-center">
      <p className="uppercase   font-livvic font-extrabold flex text-center flex-col text-7xl">
        <span>we're building</span>
        <span className="flex items-center  gap-4">
          <span className="lowercase text-[#dc2121c1] font-mouse ">a </span> new
          night
          <span
            ref={dotRef}
            
            className=" relative cursor-pointer perspective-[800px]  h-7 w-10 rounded-lg  bg-white"
          >
            <span
              ref={imageRef}
              className="h-60   -right-40  w-80 absolute  -top-25 rounded-2xl overflow-hidden"
            >
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
          <span ref={dotRef} className=" relative  inline-block h-7 w-10 rounded-lg  bg-white">
            <span ref={imageRef} className="h-60   w-80 absolute -right-36  -top-28 rounded-2xl overflow-hidden">
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
          <span ref={dotRef} className=" relative cursor-pointer  inline-block h-7 w-10 rounded-lg  bg-white">
            <span ref={imageRef} className="h-60 inline-block  w-80 absolute -left-35 -top-28 rounded-2xl overflow-hidden">
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
