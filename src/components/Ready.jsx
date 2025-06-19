import React from "react";

const Ready = () => {
  return (
    <div className="py-10 flex justify-center items-center bg-[url('../assets/images/yellow.png')] bg-cover bg-center">
      <div className="  p-6 w-full max-w-3xl">
        <h2 className="text-black text-xl font-bold mb-10">Are you ready?</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="broadsider@email.com"
            className="w-full md:flex-1 px-4 py-3 rounded text-black text-lg border bg-white"
          />
          <button className="bg-[#7BFFCC] hover:bg-teal-400 px-10 py-3 font-bold rounded text-black tracking-wide border-3 cursor-pointer">
            NOTIFY ME
          </button>
        </div>
        <div className="mt-6 flex items-center text-black font-semibold">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.56c-.89.39-1.84.66-2.84.78a4.93 4.93 0 0 0 2.16-2.71c-.95.56-2.01.97-3.13 1.19a4.92 4.92 0 0 0-8.4 4.48A13.96 13.96 0 0 1 1.67 3.15a4.91 4.91 0 0 0 1.52 6.57A4.92 4.92 0 0 1 .96 9v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.41A9.87 9.87 0 0 1 .48 19.54a13.9 13.9 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.06 10.06 0 0 0 24 4.56z" />
          </svg>
          Follow on Twitter
        </div>
      </div>
    </div>
  );
};
export default Ready;
