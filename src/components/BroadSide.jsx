import React from "react";
import cc0Icon from "../assets/images/cc.png"

const Broadside = () => {
  return (
    <div className="bg-[#999999] p-6 md:p-12 text-gray-900 font-sans">
      <h2 className="text-2xl md:text-3xl ">
        - <span className="font-bold">Broadside Avatars</span> offer<br/>
        <span className="font-extrabold">two</span> different licensing models:
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
        <div className="flex flex-col items-start space-y-4">
          <img
            src={cc0Icon}
            alt="CC0 Icon"
            className="w-80 h-50 object-contain"
          />
          <p className="text-sm md:text-base line-height-6">
            <span className="font-bold">1.</span> All Broadsiders featuring
            existing<br/> cc0 artwork from other collections <br/> and artists are cc0.
            Meaning you <br/> and anyone else can continue <br/> telling their story in any
            way<br/> you like, on any platform you wish.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-5xl font-bold leading-tight text-white uppercase">
            Full <br />
            Commercial <br />
            Rights
          </h3>
          <p className="text-sm md:text-base">
            <span className="font-bold">2.</span> Broadsiders without cc0 traits<br/>
            grant the holder full commercial<br/> rights to that Broadsider's name<br/>
            and likeness. Meaning you as the<br/> holder and only you as the holder<br/>
            have the ability to exploit your<br/> character commercially and <br/> continue
            telling their story in any<br/> way you like, on any platform you <br/> wish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Broadside;
