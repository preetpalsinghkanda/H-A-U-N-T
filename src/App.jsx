import React from "react";
import ScrollSmooth from "./components/ScrollSmooth";
import SideSlider from "./components/SideSlider";
import Navbar from "./components/Navbar";
import Award from "./components/Award";
import Para from "./components/Para";

const App = () => {
  return (
    <div className="relative h-auto w-full overflow-hidden">
      {/* <SideSlider/> */}
      <div>
        <ScrollSmooth />
{/* 
        <Navbar />

        <Award /> */}

        <Para />
      </div>
    </div>
  );
};

export default App;
