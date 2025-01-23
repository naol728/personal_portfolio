import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
const words = [
  {
    text: "Hello",
  },
  {
    text: "I’m",
  },
  {
    text: "Naol",
  },
  {
    text: "Meseret",
  },
];
export default function Home() {
  const [open, setopen] = useState(true);
  return (
    <div className="h-dvh" id="home">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full  ">
        <div className="border-solid border-black border-[10px] rounded-full">
          <img
            src="myphoto.jpg"
            className="size-40 rounded-full shadow-lg shadow-slate-700 sm:size-44 lg:size-52"
          />
        </div>
        <TypewriterEffectSmooth
          className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 "
          words={words}
        />
        <div className=" hidden sm:flex join join-vertical absolute right-20 top-48">
          {open && (
            <>
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Default"
                value="default"
              />
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Retro"
                value="retro"
              />
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Valentine"
                value="valentine"
              />
              <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Aqua"
                value="aqua"
              />
            </>
          )}
        </div>
        <button className="btn btn-primary px-7">
          <a href="naolcv.pdf" download>
            download CV
          </a>{" "}
        </button>
        <p className="text-center mt-3 p-10 text-sm sm:text-base font-semibold ">
          {" "}
          a passionate front-end web developer dedicated to creating stunning
          and user-friendly websites. With a keen eye for design and a deep
          understanding of web technologies, I specialize in transforming ideas
          into visually appealing and responsive designs.{" "}
        </p>
      </div>
    </div>
  );
}
