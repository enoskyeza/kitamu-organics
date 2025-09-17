// src/components/GallerySection.tsx
import React from "react";
import Image from "next/image";
import {FaLeaf} from "react-icons/fa";

const images = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
];

const GallerySection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="container mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full thm-bg-secondary">
            <FaLeaf className="text-white text-xl" />
          </div>
          <span className="ml-3 text-sm font-medium thm-text-secondary uppercase tracking-wide">
            Gallery
          </span>
        </div>
        <h2 className="thm-section-title thm-text-primary">Our Work in Pictures</h2>
      </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={800}
                height={600}
                className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
        <button className="mt-8 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
          View Full Gallery
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
