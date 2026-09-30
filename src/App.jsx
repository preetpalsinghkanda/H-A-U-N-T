import React, { useEffect, useRef } from "react";
import ScrollSmooth from "./components/ScrollSmooth";
import SideSlider from "./components/SideSlider";
import Navbar from "./components/Navbar";
import Award from "./components/Award";
import Para from "./components/Para";
import TextScroll from "./components/TextScroll";
import Transition from "./components/Transition";
import Category from "./components/Category";
import Video from "./components/Video";
import cursor from "../public/cursor.png";
import movieChar from "./assets/char.jpg";
import HorrorMovie from "./components/HorrorMovie";
import { Route, Routes } from "react-router-dom";
import { Howl } from "howler";
import sound from "./assets/sound.mp3";
import Search from "./components/Search";

const Home = () => {
  return (
    <>
    <Navbar/>
      <HorrorMovie />
      <Award />
      <Video />
      <TextScroll />

      <Category />

      <img src={movieChar} className="w-full  py-10" alt="" />
      <Para />
      <Transition />
    </>
  );
};

const App = () => {
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [sound],
      loop: true,
      volume: 0.6,
    });

    const soundStrt = () => {
      soundRef.current.play();
    };

    window.addEventListener("click", soundStrt);
  }, []);

  return (
    <div
      style={{ cursor: `url(${cursor})  , auto` }}
      className="relative h-auto w-full overflow-hidden"
    >
      <ScrollSmooth />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
};

export default App;
