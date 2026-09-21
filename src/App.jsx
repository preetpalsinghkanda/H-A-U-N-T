import React from 'react'
import ScrollSmooth from './components/ScrollSmooth';
import SideSlider from './components/SideSlider'
import Navbar from './components/Navbar';
import Award from './components/Award';

const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* <SideSlider/> */}
    <div>
      <ScrollSmooth/>

      <Navbar/>

      <Award/>
      
    </div>
    </div>
  )
}

export default App