import React from 'react'
import ScrollSmooth from './components/ScrollSmooth';
import SideSlider from './components/SideSlider'

const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SideSlider/>
    <div>
      <ScrollSmooth/>
      <div>helo</div>
      <button>click</button>

    </div>
    </div>
  )
}

export default App