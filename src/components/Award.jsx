import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import movie1 from "../assets/awards/img1.jpg";
import movie2 from "../assets/awards/img2.jpg";
import movie3 from "../assets/awards/img3.jpg";
import movie4 from "../assets/awards/img4.jpg";
import movie5 from "../assets/awards/img5.jpg";
import movie6 from "../assets/awards/img6.jpg";

const Award = () => {
  // const []
const firstImage = useRef(true)
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const awardSectionRef = useRef(null);

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
    const awardSection = awardSectionRef.current;

    if (!image || !section) return;

    const y = gsap.quickTo(image, "y", {
      ease: "power3.out",
    });

    const handleMouse = (e) => {
      y(e.clientY - 400);
    };

    // const handleMouseEnter = () => {
    //   gsap.fromTo(
    //     imageRef.current,
    //     {
    //       opacity: 0,
    //       scale: 0,
    //       clipPath: "inset(50% 50% 50% 50%)",
    //     },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       clipPath: "inset(0%  0% 0% 0%)",
    //       duration: 0.4,
    //     },
    //   );

     
    // };

     const handleMouseLeave =()=>{
        gsap.fromTo(imageRef.current,{
          opacity : 1,
          scale:1 ,
          clipPath : "inset(0% 0% 0% 0%)",
          
        },{
          opacity : 0,
          scale : 0 ,
          clipPath : "inset(50% 50% 50% 50%)",
          duration : 0.2

        })

        firstImage.current = true
      }

    // const

    section.addEventListener("mousemove", handleMouse);
    // awardSection.addEventListener("mouseenter", handleMouseEnter);
    awardSection.addEventListener("mouseleave",handleMouseLeave)
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-white my-30 flex flex-col gap-12    mx-auto"
    >
      <h2 className="uppercase mx-30 font-mouse text-5xl text-[#666666]">
        oscar winning
      </h2>

      <div
        ref={awardSectionRef}
        className=" mx-16 pb-10 flex flex-col gap-5 "
      >
        {oscarMovies.map((oscarMovie) => (
          <div
            onMouseEnter={() => {
              setActiveMovie(oscarMovie.id - 1);

              if(firstImage.current){
                firstImage.current = false 
             
              gsap.fromTo(
                imageRef.current,
                {
                  opacity: 0,
                  scale: 0,
                  clipPath: "inset(50% 50% 50% 50%)",
                },
                {
                  opacity: 1,
                  scale: 1,
                  clipPath: "inset(0%  0% 0% 0%)",
                  duration: 0.4,
                },
              );}

            }}
            
            key={oscarMovie.id}
            className={`flex award_section justify-between cursor-pointer hover:text-[#aca9a9] transition duration-75 text-[#535353]`}
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

      <div
        ref={imageRef}
        className="absolute pointer-events-none right-90  opacity-0  h-130 w-90 rounded-3xl overflow-hidden "
      >
        <img
          className="h-full w-full object-cover"
          src={oscarMovies[activeMovie].img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Award;
