import React, { useRef } from "react";
import gsap from "gsap";

const SideSlider = () => {
  const closeRef = useRef(null);

  const handleClose = () => {
    const t1 = gsap.timeline();

    t1.to(".cross", {
      opacity: 0,
    });

    t1.to(closeRef.current, {
      x: "100vw",
      durationc: 0.9,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={closeRef}
      className="border w-[72vw]  right-3 rounded-t-[25px] rounded-b-[25px]  fixed top-2 bottom-2"
    >
      <div
        className="border cross fixed top-25 left-98
      5 flex items-center justify-center rounded-full w-13 h-13"
      >
        <span
          onClick={handleClose}
          style={{ fontWeight: "700" }}
          className="material-symbols-outlined  !text-[35px] cursor-pointer  transition-transform hover:rotate-180 duration-400"
        >
          close
        </span>
      </div>
      hello
    </div>
  );
};

export default SideSlider;
