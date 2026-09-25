import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skullImg from "../assets/skulll.jpg";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  const parent = useRef(null);
  const text = useRef(null);
  const skull = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(text.current, {
      transform: "translateX(-92%)",

      scrollTrigger: {
        trigger: parent.current,
        // markers : true,

        pin: true,
        start: "top 0%",
        end: "top -250%",
        scrub: 2,
      },
    });

    t1.to(
      skull.current,
      {
        autoAlpha: 1,

        duration: 5,
        ease: "power3.out",
      },
      1.1,
    );

    const glitch = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.5,
    });

    glitch.to(skull.current, {
      x: 15,
      skewX: 10,
      duration: 0.06,
      ease: "none",
    });

    glitch.to(skull.current, {
      x: -17,
      skewX: -10,
      ease: "none",
      duration: 0.06,
    });

    glitch.to(skull.current, {
      x: 8,
      skewX: 6,
      duration: 0.04,

      ease: "none",
      opacity: 0,
    });

    glitch.to(skull.current, {
      opacity: 0.5,
      x: -5,
      skewX: -4,
      duration: 0.04,
      ease: "none",
    });

    glitch.to(skull.current, {
      opacity: 0,
      duration: 0.02,
      ease: "none",
    });

    glitch.to(skull.current, {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 0.02,
      ease: "none",
    });

    glitch.to(skull.current, {
      opacity: 0.5,
      duration: 0.03,
      x: 4,
    });

    glitch.to(skull.current, {
      opacity: 1,
      duration: 0.05,
      ease: "none",
      x: 0,
    });
  }, []);

  return (
    <div ref={parent} className=" h-[100vh] flex items-center text-[#A6A6A6]">
      <div
        ref={text}
        className="text-[50vh] flex   font-momo uppercase font-extrabold whitespace-nowrap"
      >
        <span className="px-90">you</span> are not alone here
        <img ref={skull} src={skullImg} className="pl-155 opacity-0" alt="" />
      </div>
    </div>
  );
};

export default TextScroll;
