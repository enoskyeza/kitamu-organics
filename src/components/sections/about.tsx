'use client'
import Image from "next/image";
import { FaHandshake, FaAward, FaLeaf } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="w-full">
      {/* ABOUT SECTION */}
      <div className="theme-bg-light text-green-900 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-96 md:h-full">
            <Image
              src="/images/about-bees.jpg"
              alt="Beekeeping in action"
              fill
              className="object-cover rounded-xl shadow-md"
              priority
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="text-lg font-semibold text-green-700 flex items-center gap-2">
              <FaLeaf className="text-green-800" /> About Us
            </span>
            <h2 className="text-4xl font-bold text-green-900">
              Nature-Powered Solutions for Health & Livelihood
            </h2>
            <p className="text-lg text-green-800">
              At Kitamu Natural Organics, we support over 4,000 households in Northern Uganda
              through sustainable beekeeping, natural farming, and eco-conscious value addition.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-3">
                <FaAward className="text-green-800 text-3xl" />
                <div>
                  <p className="font-bold text-lg">Experienced</p>
                  <p className="text-sm text-green-700">Over 10 years of community engagement</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaHandshake className="text-green-800 text-3xl" />
                <div>
                  <p className="font-bold text-lg">Trusted</p>
                  <p className="text-sm text-green-700">Thousands of loyal customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div
        className="bg-green-900 text-white py-20 px-6 sm:px-12 md:px-20 lg:px-32"
        style={{
          backgroundImage: "url('/images/honeycomb-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold">4,000+</p>
            <p className="text-sm text-green-200">Partnered Farmers</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">8+</p>
            <p className="text-sm text-green-200">Natural Products</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">10+</p>
            <p className="text-sm text-green-200">Years of Impact</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">30+</p>
            <p className="text-sm text-green-200">Districts Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}