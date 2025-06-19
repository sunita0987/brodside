import React from "react";
import journey1 from "../assets/images/1stimage.png";
import journey2 from "../assets/images/2ndimage.png";
import journey3 from "../assets/images/3rdimage.png";

const Journey = () => {
  return (
    <section className="bg-white px-4">
      <h2 className="text-6xl font-bold text-black mb-10 mt-10 ">
        - The Journey Ahead...
      </h2>
      <div className="grid md:grid-cols-3">
        <div>
          <img
            src={journey1}
            alt="Broadsiders"
            className="mb-4 w-full rounded"
          />
          <h3 className="text-lg ml-10 ff-Neue Machina">
            <span className="font-bold">5,454</span> generative <br />
            Broadsider heroes.
            <br />
            <br />
          </h3>
          <p className="text-gray-700 mt-2 font-light ml-10">
            Each with unique names,
            <br /> features and traits. <br />
            <br />
            Including 1/1s, legendaries <br /> and rarity pulled from a total
            <br /> of 201 billion
            <br /> unique combinations.
          </p>
        </div>
        <div>
          <img src={journey2} alt="NFT Story" className="mb-4 w-full rounded" />
          <h3 className="text-lg  text-black ml-10">
            <span className="font-bold">11 Episodic NFTs</span> telling <br />
            the story of your specific <br /> character
            <br />
            <br />
          </h3>
          <p className="text-gray-700 mt-2 ml-10 font-light ">
            (All of which is already <br /> written) with new art for each
            <br /> episode, will be airdropped
            <br /> bi-weekly to Broadsider <br /> holders.
          </p>
        </div>
        <div>
          <img src={journey3} alt="Book NFT" className="mb-4 w-full rounded" />
          <h3 className="text-lg  ml-10">
            <span className="font-bold">Month 6:</span> Merge and
            <br /> burn Episode NFTs into <br /> a 1/1 full book NFT.
            <br />
            <br />
          </h3>
          <p className="text-gray-700 mt-2 ml-10 font-light">
            Featuring your specic <br /> character with exclusive 1<br /> of 1
            art - with epub les of
            <br /> your character's story so
            <br /> you can print / sell copies,
            <br />
            including print-on demand <br /> options for physical copies.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Journey;
