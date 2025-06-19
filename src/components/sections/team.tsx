// src/components/TeamSection.tsx
import React from "react";
import {FaLeaf} from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
    {
        name: "Wycliff Odong",
        position: "Founder & CEO",
        image: "/team/odong.jpg",
    },
    {
        name: "Achiro Nancy Hope",
        position: "Sales Lead",
        image: "/team/achiro.jpg",
    },
    {
        name: "Simon Peter",
        position: "Operations Manager",
        image: "/team/peter.jpg",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-[#f6f4f0] py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="container mx-auto text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full thm-bg-secondary">
                            <FaLeaf className="text-white text-xl"/>
                        </div>
                        <span className="ml-3 text-sm font-medium thm-text-secondary uppercase tracking-wide">
                          Our Team
                        </span>
                    </div>
                    <h2 className="thm-section-title thm-text-primary">Meet Our Team</h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="card bg-white rounded-xl shadow-md">
                            <figure>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={100}
                                    height={95}
                                    className="w-full h-90 object-cover mb-2"
                                />
                            </figure>

                            <div className="card-body">
                                <h3 className="text-lg font-semibold text-green-900">{member.name}</h3>
                                <p className="text-sm text-green-700">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;