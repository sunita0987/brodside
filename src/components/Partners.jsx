import React from "react";
import dazzle from "../assets/images/dazzleshap.png";
import nervous from "../assets/images/nervous.png";
import fkks from "../assets/images/fkks.png";
import footer from "../assets/images/footer.png";

const Partners = () => {
  return (
    <section className="bg-white py-12 px-6 text-center">
      <h2 className="text-3xl  font-bold mr-200 mb-10">-Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <img
            src={dazzle}
            alt="Dazzle Ship Logo"
            className="mx-auto w-30 h-30 mb-4"
          />
          <h3 className="font-bold text-lg ">DAZZLE SHIP...</h3>
          <p className=" text-gray-700 mt-2 ff-courier new">
            - Creative Production Studio
            <br />
            <br />
            Working across fashion,
            <br /> gaming, music & tech. <br />
            Previous clients include: The <br />
             James Bond Franchise, <br />
            Activision, Microsoft and <br /> 
            Drone Racing League.
          </p>
        </div>
        <div>
          <img
            src={nervous}
            alt="Nervous Logo"
            className="mx-auto w-30 h-30 mb-4"
          />
          <h3 className="font-bold text-lg">Nervous</h3>
          <p className="text-sm text-gray-700 mt-2">
            - Web3 Dev Team
            <br />
            <br />
            Previously known for:
            <br /> AdamBombSquad,
            <br /> Warpsound_ai,
            <br /> LessThanJake
            <br />
          </p>
        </div>
        <div>
          <img
            src={fkks}
            alt="FKKS Logo"
            className="mx-auto w-50  h-auto mb-1"
          />
          <h3 className="font-bold text-lg mt-25 ">FKKS</h3>
          <p className="text-sm text-gray-700 mt-2">
            - IP Rights / Terms
            <br />
            <br />
            Jeremy Goldman <br /> and Zach Lewis <br /> @ Frankfurt Kurnit
            <br /> Klein & Selz PC
          </p>
        </div>
        <img src={footer} alt="Footer Logo" className="max-w-5xl mb-[-49px]" />
      </div>
    </section>
  );
};

export default Partners;
