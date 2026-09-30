import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import img from "../assets/awards/img1.jpg";
// import img2 from "../assets/awards/img2.jpg"

const HorrorMovie = () => {
  const [hrrMovies, setHrrMovies] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=deb05651a8e73ebd82e41339eee37f85&with_genres=27",
    )
      .then((res) => res.json())
      .then((data) => {
        setHrrMovies(
          data.results.filter((name) => name.poster_path).slice(0, 25),
        );
      });
  }, []);

  useEffect(() => {
    if (hrrMovies.length === 0) return;

    const x = gsap.context(() => {
      const item = gsap.utils.toArray(".poster");
      const gap = 24; //gapp
      const posterWidth = item[0].offsetWidth + gap;
      const posterTotalWidth = posterWidth * item.length;

      gsap.set(item, {
        x: (i) => i * posterWidth,
      });

      gsap.to(item, {
        x: `-=${posterTotalWidth}`,
        repeat: -1,
        duration: 55,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => {
            return gsap.utils.wrap(
              -posterWidth,
              posterTotalWidth - posterWidth,
              parseFloat(x),
            );
          }),
        },
      });
    }, containerRef);

    return () => x.revert();
  }, [hrrMovies]);

  return (
    <div className="overflow-hidden w-full">
      <div ref={containerRef} className="h-80 flex  relative">
        {hrrMovies.map((movie, i) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="w-56 h-80 poster shrink-0 rounded-2xl absolute  object-cover"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default HorrorMovie;
