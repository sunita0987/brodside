import React from "react";
import skullIcon from "../assets/images/matt.png";

const ReconnectSection = () => {
  return (
    <section className="bg-[#D8D8D8] py-10 px-6 text-center">
      <div className="flex justify-center mb-6">
        <img src={skullIcon} alt="Skull Icon" className="w-12 h-12" />
      </div>
      <p className="max-w-3xl mx-auto text-xl text-gray-800  leading-relaxed ff-Neue Machina">
        <strong>Charlie, Vector</strong> and
        <strong>  Matt reconnected on Broadside</strong> because <br /> they saw a
        way to combine all they have learned into a <br /> decentralized
        franchise powered by NFTs that they believe can
        <br />
        <strong className="font-bold ff-Neue Machina">
          help people understand and participate in the real and rapidly <br />
          decentralizing world taking shape around us
        </strong>
        , as distributed <br /> technology continues to transform culture in
        exciting ways.
      </p>
    </section>
  );
};
export default ReconnectSection;