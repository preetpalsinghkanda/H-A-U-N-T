import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import img1 from "../assets/hereditary_img.jpg";

const Category = () => {
  const cat = [
    {
      name: "Horror",
      movies: ["The Exorcist", "Hereditary", "The Conjuring", "Sinister"],
    },
    {
      name: "Creepy",
      movies: [
        "The Blair Witch Project",
        "Creep",
        "The Black Phone",
        "Barbarian",
      ],
    },
    {
      name: "Psychological Horror",
      movies: ["Black Swan", "The Shining", "Jacob's ladder", "The Machinist"],
    },
    {
      name: "Supernatural Horror",
      movies: ["The Ring", "Insidious", "The Others", "The Grudge"],
    },
    {
      name: "Analog Horror",
      movies: [
        "Skinamarink",
        "Lake Mungo",
        "Broadcast Signal Intrusion",
        "The Mandela Catalogue",
      ],
    },
    {
      name: "Gothic Horror",
      movies: [
        "Crimson Peak",
        "The Woman in Black",
        "Sleepy Hollow",
        "The Others",
      ],
    },
    {
      name: "Paranormal",
      movies: [
        "Paranormal Activity",
        "The Taking of Deborah Logan",
        "Host",
        "Gonjiam: Haunted Asylum",
      ],
    },
    {
      name: "Body Horror",
      movies: ["The Fly", "The Thing", "Tetsuo: The Iron Man", "Titane"],
    },
    {
      name: "Cosmic Horror",
      movies: [
        "The Void",
        "Color Out of Space",
        "Annihilation",
        "Event Horizon",
      ],
    },
    {
      name: "Uncanny",
      movies: ["Possum", "Vivarium", "Men", "Infinity Pool"],
    },
    {
      name: "Bloody Horror",
      movies: ["Evil Dead", "Terrifier", "Saw", "Braindead"],
    },
    {
      name: "and more!",
      movies: [
        "Midsommar",
        "Talk to Me",
        "It Follows",
        "The Autopsy of Jane Doe",
      ],
    },
  ];

  const [movieImgs, setMovieImgs] = useState({});

  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const cardRefs = useRef([]);

  useLayoutEffect(()=>{

    const movieName = itemRefs.current
    const movie

    // gsap.set()

  },[])

  useEffect(() => {
    const fetchMoviesPoster = async () => {
      const allPosters = cat.flatMap((category) => category.movies);

      const posters = {};

      for (const poster of allPosters) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=deb05651a8e73ebd82e41339eee37f85&query=${encodeURIComponent(poster)}`,
          );

          const data = await response.json();

          if (data.results?.[0]?.poster_path) {
            posters[poster] = data.results[0].poster_path;
          }
        } catch (err) {
          console.log({
            message: "No results / Failed",
            error: err,
          });
        }
      }
      setMovieImgs(posters);
    };
    fetchMoviesPoster();
  }, []);

  return (
    <div className=" text-white  px-30 ">
      {/* container */}
      <div className="w-full pt-22 pb-30 border  relative h-full rounded-4xl flex justify-center items-center bg-[#ffffffcd]  text-center overflow-hidden gap-2 flex-col">
        <p className="text-2xl mb-10 font-semibold italic text-[#A6A6A6] font-livvic">
          Explore the collection
        </p>

        {/* stage */}
        <div className="w-full flex items-center justify-center relative ">
          {/* cards */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 1, 2, 3].map((_, i) => (
              <img
                key={i}

                ref={(x) => {
                  cardRefs.current[i] = x;
                }}
                className={`absolute w-[clamp(78px,16vw,210px)]  border-4 aspect-[2/3] object-cover rounded-2xl 
                  
                  ${i === 0 ? "top-[-20.5%] left-[7.5%]" : ""}
                  ${i === 1 ? "top-[-10.5%] right-[7.5%]" : ""}
                  ${i === 2 ? "bottom-[30.5%] left-[12.5%]" : ""}
                  ${i === 3 ? "right-[12.5%] bottom-[42%]" : ""}
                  `}
                alt=""
              />
            ))}

            {/* <img
              className="absolute w-[clamp(78px,16vw,210px)]  border-4 aspect-[2/3] object-cover rounded-2xl top-[-20.5%] left-[7.5%]"
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(78px,16vw,210px)] border-4 aspect-[2/3] object-cover rounded-2xl top-[-10%] right-[7.5%] "
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(76px,15vw,200px)] border-4 aspect-[2/3] object-cover rounded-2xl bottom-[30%] left-[12.5%]"
              src={img1}
              alt=""
            />
            <img
              className="absolute w-[clamp(78px,15vw,200px)] border-4 rounded-2xl right-[12.5%] bottom-[42%] "
              src={img1}
              alt=""
            /> */}
          </div>

          {/* list  */}
          <div
            ref={listRef}
            className="flex flex-col justify-center items-center gap-3 font-extrabold"
          >
            {/* items */}

            {cat.map((c, i) => (
              <div
                key={i}
                ref={(x) => {
                  itemRefs.current[i] = x;
                }}
                className="flex w-full justify-center items-center "
              >
                <span className="place-items-center">
                  <h4 className="text-7xl font-momo text-black ">{c.name}</h4>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
