import React from "react";
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

const App = () => {
  return (
    <div
      style={{ cursor: `url(${cursor})  , auto` }}
      className="relative h-auto w-full overflow-hidden"
    >
      {/* <SideSlider/> */}
      <div>
        <ScrollSmooth />

        <Navbar />

        <HorrorMovie />
        <Award />

        <TextScroll />

        <Category />

        {/* <Video/> */}

        <img src={movieChar} className="w-full  py-10" alt="" />
        <Para />
        <Transition />
      </div>
    </div>
  );
};

export default App;
