// src/components/GallerySection.tsx
import React from "react";

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
        <h2 className="text-3xl font-bold mb-10 text-green-900">Our Work in Pictures</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300"
            />
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
