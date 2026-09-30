import React, { useRef, useState } from "react";
import wallpaper from "../assets/wallpaper.jpg";
import Navbar from "./Navbar";
import gsap from "gsap";
import img1 from "../assets/hereditary_img.jpg";

const Search = () => {
  // const nameRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  const [input, setInput] = useState("");

  const movieSearch = async (input) => {
    if (!input.trim()) {
      setMovieList([]);
      return;
    }

    try {
      const find =
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=deb05651a8e73ebd82e41339eee37f85
&query=${encodeURIComponent(input)}`);

      const response = await find.json();

      const hrrMovie = response.results
        .filter((m) => m.genre_ids.includes(27))
        .slice(0, 3);

      setMovieList(hrrMovie);
      console.log(movieList);
    } catch (err) {
      console.log(`error : ${err}`);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
      className=" min-h-screen bg-no-repeat w-full bg-cover text-white"
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-2">
        <Navbar />

        <div className="mx-auto my-30 w-fit  ">
          <div className="shadow-lg bg-[#ffffffba] flex rounded-full w-fit">
            <input
              value={input}
              onChange={(x) => {
                setInput(x.target.value);
                movieSearch(x.target.value);
              }}
              placeholder="Annabelle"
              className="bg-none text-black font-bold font-livvic text-xl  px-10 focus:outline-none "
              type="text"
            />
            <span
              onClick={() => movieSearch(input)}
              className="shadow-xl rounded-full scale-x-114 scale-y-114  bg-black flex items-center justify-center  h-12 w-12"
            >
              <span
                style={{ fontSize: "26px" }}
                className="material-symbols-outlined "
              >
                search
              </span>
            </span>
          </div>
        </div>

        <div className=" mx-auto w-[60vw] grid grid-cols-3">
          {movieList.map((movie) => (
            <div className="  gap-1 flex items-center flex-col">
              <img
                className="h-80 rounded-2xl w-auto"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
              <span className="font-livvic font-bold text-xl text-[#ff110095]">
                ( {movie.release_date.slice(0, 4)} )
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
