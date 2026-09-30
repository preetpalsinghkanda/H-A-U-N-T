import React from "react";

const About = () => {
  return (
    <div className="text-[#ffffffc9] relative font-momo h-full">
      <h4 className="text-4xl text-center text-white my-10">About Us</h4>
      <p className="text-center mx-auto text font-livvic font-[500] flex flex-col max-w-[50vw]">
        HAUNT is a place for horror lovers. Discover terrifying stories, iconic
        nightmares, and movies that stay with you long after the screen goes
        dark. From psychological horror to supernatural nightmares find
        something that scares you (AI gen text)
        <span className="text-[#ff000070] font-mouse text-4xl">
          Stories fade. Fear doesn't
        </span>
      </p>

      <button onClick={()=>window.location.href="/"} className="fixed cursor-pointer focus:outline-0 py-1 font-livvic font-bold rounded-full border px-6 border-[#ffffff8f] bottom-8 right-12 text-white">Home</button>
    </div>
  );
};

export default About;
