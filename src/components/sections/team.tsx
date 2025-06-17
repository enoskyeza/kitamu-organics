// src/components/TeamSection.tsx
import React from "react";

const teamMembers = [
  {
    name: "Grace Auma",
    position: "Founder & CEO",
    image: "/team/grace.jpg",
  },
  {
    name: "Peter Okello",
    position: "Head of Beekeeping",
    image: "/team/peter.jpg",
  },
  {
    name: "Janet Laker",
    position: "Operations Manager",
    image: "/team/janet.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#f6f4f0] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-900">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-green-900">{member.name}</h3>
              <p className="text-sm text-green-700">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;