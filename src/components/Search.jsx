import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import Navbar from "./Navbar";
const Search = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wallpaper})`,
      }}
      className=" min-h-screen bg-no-repeat w-full bg-cover text-white"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-2">
        <Navbar />
      </div>
    </div>
  );
};

export default Search;
