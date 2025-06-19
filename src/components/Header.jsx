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
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-2xl font-light text-center max-w-2xl mx-auto px-4 opacity-50 ml-20 mt-10 ff-Neue Machina">
          WELC0ME T0 BR0ADSIDE...
          <br /> ACCEPT! REJECT!
          <br />
          <br />
          <br />
          C0NNECTING WALLETS. <br />
          ESTABLISHING PERIMETER.
          <br /> RENDERING ARM0R.
          <br /> ACTIVATING MAP CAMS. <br />
          CALIBRATING HAPTICS.
          <br /> RENDERING MAP
        </p>
      </div>
      <div className="relative z-10 text-center  px-6 ">
        <img
          src={topImage}
          alt="Broads1de Logo"
          className=" w-full h-full mb-80"
        />
        <img src={icon} alt="Icon" className="w-20 h-20 mx-auto " />
        <p className="text-4xl font-bold max-w-2xl mx-auto ff-Neue Machina">
          A DECENTRALIZED TALE OF <br />
          5,454 ANONYMOUS HEROES
        </p>
      </div>
    </section>
  );
};
export default Header;
