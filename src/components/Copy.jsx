import React from "react";
import maskImage from "../assets/images/4thiamge.png";

const Copy = () => {
  return (
    <div className="grid md:grid-cols-2 md:p-12">
      <div className="flex justify-center items-center">
        <img src={maskImage} alt="Colorful Mask" className="w-full h-full " />
      </div>
      <div className="text-gray-800 mt-6 md:mt-0 bg-[#C4C4C4] w-80 h-80">
        <p className="text-sm mb-4 font-mono text-gray-500 ml-5 mt-10">
          Collection features rare cc0 traits contributed by guest artists and
          from projects including:
        </p>
        <ul className="space-y-1 font-bold text-sm  ml-5">
          <li>
            <span className="font-bold">XCOPY</span>, <span>Rektguy</span>,
          </li>
          <li>
            <span>
              Moonbirds ,<br />
            </span>
            <span>Goblintown</span>, <span>Nouns</span>,
          </li>
          <li>
            <span>Blitmaps</span>,
            <span>
              Kristy <br /> Glas
            </span>
            , <span>Cryptoadz</span>,
          </li>
          <li>
            <span>
              Eclectic Method, <br />
            </span>
            <span>Grilla Gang</span>,
          </li>
          <li>
            <span>Robness</span>, <span>Max Osiris</span>
          </li>
          <li className="font-normal text-gray-600">and more.</li>
        </ul>
      </div>
    </div>
  );
};
export default Copy;
