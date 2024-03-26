import React from "react";

function Landing() {
  return (
    <div
      style={{ backgroundImage: "url('./images/bannerbg.jpg')" }}
      className='h-[80vh] relative flex flex-col justify-center bg-cover bg-center items-center
    before:content-[""] before:absolute before:inset-0 before:bg-black before:opacity-[0.4] before:w-full before:h-full'
    >
      <h1 className="relative smT0:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl tracking-wider leading-[1.3] text-center font-bold capitalize text-white">
        stylish creative
        <br />
        designs.
      </h1>
      <div className="scroll absolute bottom-[50px] left-1/2 -translate-x-1/2 cursor-pointer">
        <a href="#text-links-part" className="flex flex-col items-center">
        <span className="block animate-custom-animation border-b-2 border-r-2  w-[30px] h-[30px]"></span>
        <span className="block text-center tracking-wider text-xl mt-3 capitalize text-white font-bold">
          scroll
        </span>
      </a>
      </div>
    </div>
  );
}

export default Landing;
