import React from "react";

const Contact = () => {
  return (
    <div className=" relative text-white">
      <h4 className="text-center my-6 font-momo text-4xl">Contact Us</h4>
      <p className="text-center my-4 mx-auto text font-livvic font-[500] flex flex-col max-w-[50vw]">
        contact "US" , No it’s just me here if you have any suggestions or
        feedback feel free to contact me on mail{" "}
        <span className="italic">preetpalsinghkanda@gmail.com</span> i would
        love to hear from you...
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="fixed cursor-pointer focus:outline-0 py-1 font-livvic font-bold rounded-full border px-6 border-[#ffffff8f] bottom-8 right-12 text-white"
      >
        Home
      </button>
    </div>
  );
};

export default Contact;
