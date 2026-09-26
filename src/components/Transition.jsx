import React from "react";
import soulVideo from "../assets/soul.mp4";

const Transition = () => {
  return (
    <div className="">
      <div className="overflow-hidden w-full h-132">
        <video
          className="h-full w-full object-cover"
          loop
          autoPlay
          muted
          src={soulVideo}
        ></video>
      </div>
    </div>
  );
};

export default Transition;
