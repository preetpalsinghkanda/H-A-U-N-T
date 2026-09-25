import React from "react";
import ScrollSmooth from "./components/ScrollSmooth";
import SideSlider from "./components/SideSlider";
import Navbar from "./components/Navbar";
import Award from "./components/Award";
import Para from "./components/Para";
import TextScroll from "./components/TextScroll";

const App = () => {
  return (
    <div className="relative h-auto w-full overflow-hidden">
      {/* <SideSlider/> */}
      <div>
        <ScrollSmooth />

        <Navbar />

        <Award /> 

        <TextScroll/>

        <Para />
      </div>
    </div>
  );
};

export default App;
