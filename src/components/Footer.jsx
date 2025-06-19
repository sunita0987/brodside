import React from "react";

const Footer = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-[#1154B0] text-white text-center px-4">
      <div className="flex flex-col sm:flex-row items-center gap-10 mb-6">
        <input
          type="email"
          placeholder="broadsider@email.com"
          className="w-[550px] md:flex-1 px-4 py-3 rounded text-[#070004] text-lg border bg-white"
        />
        <button className="bg-[#FFF173] text-black px-5 py-3 rounded shadow-md font-regular text-2xl hover:bg-yellow-300  cursor-pointer">
          NOTIFY ME
        </button>
      </div>
      <div className="text-lg sm:text-base font-bold space-y-1 mb-6">
        <p>
          100% ORGANIC COMMUNITY <br /> NO PAID INFLUENCERS <br /> NO PAID ADS
        </p>
        <p className="text-white font-extrabold mt-2 text-2xl">
          NONE OF THEM ARE AS STRONG AS ALL OF US
        </p>
      </div>
      <div className="flex gap-4 text-xl underline font-regular ">
        <a href="#" className="hover:text-yellow-300">
          LEGAL -
        </a>
        <a href="#" className="hover:text-yellow-300">
          TWITTER
        </a>
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.93 4.93 0 0 0 2.16-2.71c-.95.56-2.01.97-3.13 1.19a4.92 4.92 0 0 0-8.4 4.48A13.96 13.96 0 0 1 1.67 3.15a4.91 4.91 0 0 0 1.52 6.57A4.92 4.92 0 0 1 .96 9v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.41A9.87 9.87 0 0 1 .48 19.54a13.9 13.9 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.06 10.06 0 0 0 24 4.56z" />
        </svg>
      </div>
    </div>
  );
};
export default Footer;
