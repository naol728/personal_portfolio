import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
const projectdata = [
  {
    src: "moodmix.png",
    link: "https://moodmix-gold.vercel.app/",
  },
  {
    src: "nafbrands.png",
    link: "https://github.com/naol728/ecommerce_frontend",
  },
  {
    src: "contcreai.jpg",
    link: "it is under development",
  },
  {
    src: "dataanalytics.png",
    link: "https://data-analythics-website.vercel.app/",
  },
  {
    src: "popcorn.png",
    link: "https://github.com/naol728/popcorns",
  },
  {
    src: "worldwise.png",
    link: "https://github.com/naol728/worldwise",
  },
  {
    src: "reactfastpizza.png",
    link: "https://github.com/naol728/redux-intro",
  },
];
export default function Products() {
  const [index, setIndex] = useState(1);
  function prevbtn() {
    if (0 == index) setIndex(projectdata.length - 1);
    else setIndex(index - 1);
  }
  function nxtbtn() {
    if (projectdata.length - 1 == index) setIndex(0);
    else setIndex(index + 1);
  }
  return (
    <div className=" p-6 " id="products">
      <h2 className="text-center font-extrabold text-xl mb-5">Products</h2>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">{projectdata[index].link}</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          <div className="">
            <div className="absolute top-2/4 left-8 sm:left-10  p-1 text-xl border sm:text-4xl cursor-pointer">
              <GrPrevious onClick={prevbtn} />
            </div>
            <div>
              <a href={projectdata[index].link} target="_blank">
                <img src={projectdata[index].src} alt="/" />
              </a>
            </div>
            <div className="absolute top-2/4 right-8 sm:right-10 p-1  text-xl border sm:text-4xl cursor-pointer">
              <GrNext onClick={nxtbtn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
