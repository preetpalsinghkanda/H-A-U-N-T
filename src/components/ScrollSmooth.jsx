import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import ScrollTrigger from "gsap"

gsap.registerPlugin(ScrollTrigger);

const ScrollSmooth = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      duration: 0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time) => {lenis.raf(time*1000)};

    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    return ()=>{
        gsap.ticker.remove(ticker)
        lenis.destroy()
    }
  }, []);

  return null;
};

export default ScrollSmooth;
