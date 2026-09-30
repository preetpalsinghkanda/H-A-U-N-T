import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SideSlider = ({ movie, setCheckMovie }) => {
  const closeRef = useRef(null);
  // const overlayRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      closeRef.current,
      {
        x: "100vw",
      },
      {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      },
    );
  }, []);

  const handleClose = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setCheckMovie(null);
      },
    });

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
    <>
      <div className="fixed inset-0 bg-black/80 z-2"> </div>
      <div
        ref={closeRef}
        className="border  border-[#ffffff66] bg-black w-[72vw] z-10  right-3 rounded-t-[25px] rounded-b-[25px]  fixed top-2 bottom-2"
      >
        <div className="border border-[#ffffff66] cross absolute top-25 -left-6.5 flex items-center justify-center rounded-full w-13 z-20 bg-[#000000] h-13">
          <span
            onClick={handleClose}
            style={{ fontWeight: "700" }}
            className="material-symbols-outlined  !text-[35px]   transition-transform hover:rotate-180 duration-400"
          >
            close
          </span>
        </div>

        <div className="text-[#ffffffbb]">
          <div className="h-90 relative">
            <img
              className="w-full h-full rounded-[25px] object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
            <div className="absolute bg-gradient-to-b inset-0 from-transparent via-100% via-black/100  to-black"></div>
          </div>

          <div className="flex px-10 relative bottom-3">
            <img
              className="h-80 relative bottom-12  rounded-2xl"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <div className="flex w-full flex items-center  font-momo gap-2 flex-col">
              <div className="flex gap-4 items-center justify-center">
                {" "}
                <h2 className="z-11    text-5xl">{movie.title}</h2>
                <span className="self-center rounded-2xl border px-3 text-lg   font-[100]">
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>
              <span className=" relative right-5 font-livvic font-normal">
                {movie.release_date}
              </span>

              <p className="px-10 text-xl py-10 text-start">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSlider;
