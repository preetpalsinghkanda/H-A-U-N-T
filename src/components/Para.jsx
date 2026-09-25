import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import paraImg2 from "../assets/it_img.jpg";
import paraImg1 from "../assets/nun.jpg";
import paraImg3 from "../assets/maxresdefault.jpg";

const Para = () => {
  // const hover=()=>{

  // }

  const imageRef = useRef([]);
  const dotRef = useRef([]);
  const isActive = useRef([]);

  // const

  useEffect(() => {
    const live = imageRef.current.map(() => ({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    }));

    const aim = imageRef.current.map(() => ({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    }));

    imageRef.current.forEach((img) => {
      gsap.set(img, {
        opacity: 0,
        scale: 0,
        clipPath: "inset(50%,50%,50%,50%)",
        transformPerspective: 800,
        transformOrigin: "center center",
      });
    });

    const handleMouse = (x) => {
      dotRef.current.forEach((dot, i) => {
        const position = dot.getBoundingClientRect();

        const X = position.left + position.width / 2;
        const Y = position.top + position.height / 2;

        const offX = x.clientX - X;
        const offY = x.clientY - Y;

        const dis = Math.hypot(offX, offY);

        if (dis < 110 && !isActive.current[i]) {
          isActive.current[i] = true;
          gsap.killTweensOf(imageRef.current[i]);

          gsap.to(
            imageRef.current[i],

            {
              opacity: 1,
              scale: 1,
              clipPath: "inset(0% ,0% ,0% ,0%)",
              duration: 0.4,
              ease: "power3.out",
            },
          );
        }

        if (dis >= 110 && isActive.current[i]) {
          isActive.current[i] = false;

          gsap.killTweensOf(imageRef.current[i]);

          gsap.to(imageRef.current[i], {
            opacity: 0,
            scale: 0,

            clipPath: "inset(50%,50%,50%,50%)",
            duration: 0.4,
            ease: "power3.in",
          });
        }

        if (dis < 110) {
          const ratioX = Math.max(-1, Math.min(1, offX / 110));
          const ratioY = Math.max(-1, Math.min(1, offY / 110));

          aim[i].x = offX * 0.28;
          aim[i].y = offY * 0.28;

          aim[i].rotateY = ratioX * -15;
          aim[i].rotateX = ratioY * 15;
        }
      });
    };

    const frame = () => {
      imageRef.current.forEach((img, i) => {
        if (!img) return;

        live[i].x += (aim[i].x - live[i].x) * 0.12;
        live[i].y += (aim[i].y - live[i].y) * 0.12;

        live[i].rotateX += (aim[i].rotateX - live[i].rotateX) * 0.12;
        live[i].rotateY += (aim[i].rotateY - live[i].rotateY) * 0.12;

        gsap.set(img, {
          x: live[i].x,
          y: live[i].y,
          rotateX: live[i].rotateX,
          rotateY: live[i].rotateY,
        });
      });
    };

    window.addEventListener("mousemove", handleMouse);
    gsap.ticker.add(frame);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      gsap.ticker.remove(frame);
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
            ref={(e) => (dotRef.current[0] = e)}
            className=" relative cursor-pointer perspective-[800px] mx-8  h-7 w-12 rounded-lg  bg-white"
          >
            <span
              ref={(e) => (imageRef.current[0] = e)}
              className="h-60 border-2 border-[#f8f8f8]  -right-40  w-80 absolute  -top-25 rounded-2xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover "
                src={paraImg1}
                alt=""
              />
            </span>
          </span>
          mare
        </span>
        <span>that follows</span>
        <span className="text-[#dc2121c1] flex justify-center gap-7 ">
          <span>y</span>
          <span>o</span>
          <span>u</span>
        </span>
        <span className="flex justify-center items-center gap-4">
          home
          <span
            ref={(e) => (dotRef.current[1] = e)}
            className=" relative mx-8 cursor-pointer inline-block h-7 w-12 rounded-lg   bg-white"
          >
            <span
              ref={(e) => {
                imageRef.current[1] = e;
              }}
              className="h-60 border-2 border-[#f8f8f8]  w-80 absolute -right-36  -top-28 rounded-2xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover "
                src={paraImg2}
                alt=""
              />
            </span>
          </span>
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
          un
          <span
            ref={(e) => (dotRef.current[2] = e)}
            className=" relative cursor-pointer  inline-block h-7 mx-8 w-12 rounded-lg  bg-white"
          >
            <span
              ref={(e) => (imageRef.current[2] = e)}
              className="h-60 border-2 border-[#f8f8f8] inline-block  w-80 absolute -left-35 -top-28 rounded-2xl overflow-hidden"
            >
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
