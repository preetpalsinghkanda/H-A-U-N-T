import React, { useEffect, useRef, useState } from "react";
import movie1 from "../assets/awards/img1.jpg";
import movie2 from "../assets/awards/img2.jpg";
import movie3 from "../assets/awards/img3.jpg";
import movie4 from "../assets/awards/img4.jpg";
import movie5 from "../assets/awards/img5.jpg";
import movie6 from "../assets/awards/img6.jpg";

const Award = () => {
  // const []

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const [activeMovie, setActiveMovie] = useState(0);

  const oscarMovies = [
    {
      id: 1,
      name: "The Silence of the Lambs",
      year: "1991",
      img: movie1,
    },
    {
      id: 2,
      name: "The Shape of Water",
      year: "2017",
      img: movie2,
    },
    {
      id: 3,
      name: "Pan's Labyrinth",
      year: "2006",
      img: movie3,
    },
    {
      id: 4,
      name: "The Exorcist",
      year: "1973",
      img: movie4,
    },
    {
      id: 5,
      name: "Get Out",
      year: "2017",
      img: movie5,
    },
    {
      id: 6,
      name: "Black Swan",
      year: "2010",
      img: movie6,
    },
  ];

  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;
  });

  return (
    <div
      ref={sectionRef}
      className="text-white my-30 flex flex-col gap-12    mx-auto"
    >
      <h2 className="uppercase mx-30 font-mouse text-5xl text-[#666666]">
        oscar winning
      </h2>

      <div className="border mx-16 flex flex-col gap-5 border-white">
        {oscarMovies.map((oscarMovie) => (
          <div
            key={oscarMovie.id}
            className="flex justify-between cursor-pointer hover:text-[#aca9a9] transition duration-75 text-[#535353]"
          >
            <div className="flex  gap-12">
              <span
                style={{ fontSize: "40px" }}
                className="material-symbols-outlined"
              >
                workspace_premium
              </span>
              <p className="font-livvic  font-medium text-4xl">
                {oscarMovie.name}
              </p>
            </div>
            <span className="text-4xl  font-livvic font-bold">
              {oscarMovie.year}
            </span>
          </div>
        ))}
      </div>

      {/* <div ref={imageRef} className="absolute h-130 w-90 rounded-3xl overflow-hidden ">
        <img className="h-full w-full object-cover" src={movie1} alt="" />

      </div> */}
    </div>
  );
};

export default Award;
