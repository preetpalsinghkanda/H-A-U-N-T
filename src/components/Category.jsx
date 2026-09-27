import React from "react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
// import img1 from "../assets/hereditary_img.jpg";

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

  const stageRef = useRef(null);

  const preCardPosition = [
    { cx: -400, cy: -150 },
    { cx: 400, cy: -150 },
    { cx: -400, cy: 250 },
    { cx: 400, cy: 250 },
  ];

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

  useLayoutEffect(() => {
    const movieName = itemRefs.current;
    const movieCard = cardRefs.current;
    const list = listRef.current;

    gsap.set(movieCard, {
      scale: 0,
    });

    const positionCards = (i, item1) => {
      const movies = cat[i].movies;

      const itemRect = item1.getBoundingClientRect();
      const stageRect = stageRef.current.getBoundingClientRect();

      const itemCenterX = itemRect.left + itemRect.width / 2 - stageRect.left;
      const itemCenterY = itemRect.top + itemRect.height / 2 - stageRect.top;

      movieCard.forEach((card, cardI) => {
        const movie = movies[cardI];
        const poster = movieImgs[movie];

        if (poster) {
          card.src = `https://image.tmdb.org/t/p/w500${poster}`;
        }

        const positionCard = preCardPosition[cardI];

        const randomRotation = gsap.utils.random(-8, 8);

        gsap.to(card, {
          left: itemCenterX + positionCard.cx + gsap.utils.random(-50, 90),
          top: itemCenterY + positionCard.cy + gsap.utils.random(-50, 90),
          xPercent: -50,
          yPercent: -50,
          rotation: randomRotation,
          duration: 0.8,
          ease: "elastic.out(1,0.5)",
          overwrite: "auto",
        });
      });
    };

    movieName.forEach((i, itemI) => {
      const handleMouseEnter = () => {
        positionCards(itemI, i);

        gsap.to(movieCard, {
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1,0.6)",
        });
      };

      const handleMouseLeave = () => {};

      i.addEventListener("mouseenter", handleMouseEnter);
      i.addEventListener("mouseleave", handleMouseLeave);
    });
  }, [movieImgs]);

  return (
    <div className=" text-white  px-30 ">
      {/* container */}
      <div className="w-full pt-22 pb-30   relative h-full rounded-4xl flex justify-center items-center bg-[#ffffffcd]  text-center overflow-hidden  flex-col">
        <p className="text-2xl mb-10 font-semibold italic text-[#A6A6A6] font-livvic">
          Explore the collection
        </p>

        {/* stage */}
        <div
          ref={stageRef}
          className="w-full flex items-center justify-center relative "
        >
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
            className="flex flex-col   justify-center items-center font-extrabold"
          >
            {/* items */}

            {cat.map((c, i) => (
              <div
                key={i}
                ref={(x) => {
                  itemRefs.current[i] = x;
                }}
                className="flex h-[90px]  w-full justify-center items-center "
              >
                <div className="place-items-center cursor-pointer  ">
                  <h4
                    className="text-7xl font-momo  flex items-center justify-center    text-[#0000009c] duration-400
                  transition-transform hover:font-mouse    hover:text-black  hover:scale-x-[1.55]"
                  >
                    {c.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
