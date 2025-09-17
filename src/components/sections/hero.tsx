'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoLoaded) {
            const el = entry.target as HTMLVideoElement;
            el.play?.();
            setIsVideoLoaded(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const el = videoRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [isVideoLoaded]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Poster image loads fast */}
      <Image
        src="/images/bee-farm-thumb.jpg"
        alt="Beekeepers in Northern Uganda"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-green-950/80 mix-blend-multiply z-10" />

      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/bee-farm-thumb.jpg"
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/bee-farming.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Improving Our Ecosystem Through Beekeeping
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
          We use sustainable bee farming to regenerate nature and livelihoods in Northern Uganda and beyond.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-yellow-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
            View Products
          </button>
          <button className="bg-white/90 hover:bg-green-600 hover:text-white text-green-800 font-semibold py-3 px-6 rounded-xl shadow-md transition">
            Learn More
          </button>
        </div>
      </div>

        {/* Mouse scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center relative">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scrollWheel" />
          </div>
        </div>

    </section>
  );
}