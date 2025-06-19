import React from "react";
import { teamMembers } from "../utils/teamMembers";

const Team = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 text-gray-900">
      <h2 className="text-5xl font-semibold mb-10">- The Team...</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-sm">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-bold text-center text-base">{member.name}</h3>
            <p className="text-gray-600 whitespace-pre-line text-justify ml-20">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
