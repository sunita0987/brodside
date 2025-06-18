import React from "react";
import heroImage from "../assets/images/herosection.png";
import topImage from "../assets/images/bs.png";
import icon from "../assets/images/icon.png";

const Header = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center justify-center">
      <img
        src={heroImage}
        alt="Broads1de Heroes"
        className="absolute  w-full h-full object-cover  "
      />
      <div className="relative z-10 text-center  px-6 ">
        <img
          src={topImage}
          alt="Broads1de Logo"
          className=" w-full h-full mb-80"
        />
        <img src={icon}
         alt="Icon" 
         className="w-20 h-20 mx-auto " />
        <p className="text-3xl font-extrabold max-w-2xl mx-auto font-[Neue Machina]">
          A DECENTRALIZED TALE OF <br />
          5,454 ANONYMOUS HEROES
        </p>
      </div>
    </section>
  );
};

export default Header;
