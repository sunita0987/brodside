import React from "react";
import phase1 from "../assets/images/phase1.png";
import phase2 from "../assets/images/phase2.png";
// import phase3 from "../assets/images/phase3.png";
import phase4 from "../assets/images/phase4.png";

const Start = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16 text-gray-800 font-sans">
      <h2 className="text-xl md:text-3xl font-bold mb-6">
        -Starting with <span className="text-black">Storytelling...</span>
      </h2>
      <div className="grid md:grid-cols-2">
        <img src={phase1} alt="Phase 1" className="  w-full " />
        <img src={phase2} alt="Phase 2" className=" w-full" />
        <div className=" bg-[#7CA3D6] p-6  w-full">
          <h3 className="font-bold text-lg mb-2">
            Broadside is set in a new <br /> Solar Punk storyworld
          </h3>
          <p className="text-sm md:text-base text-gray-700">
            Decentralized from the start with lots of room <br /> to explore
            both for the creators
            <br /> and the community.
            <br />
            <br />
            <br />
            ... and this is all just Phase 1.
          </p>
        </div>
        <img src={phase4} alt="Futuristic scene" className=" w-full" />
      </div>
    </section>
  );
};

export default Start;
