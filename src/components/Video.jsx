import React, { useLayoutEffect, useRef } from "react";
import horrorVideo from "../assets/edit.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const v = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          width: "40vw",
          height: "50vh",
          borderRadius: "20px",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          scrollTrigger: {
            trigger: videoBoxRef.current,
            start: "top top",
            end: "+=500",
            pinSpacing: true,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, videoBoxRef);
  }, []);

  return (
    <div
      ref={videoBoxRef}
      className=" h-screen overflow-hidden flex items-center justify-center border relative   "
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover  absolute  "
        src={horrorVideo}
      ></video>
    </div>
  );
};

export default Video;
