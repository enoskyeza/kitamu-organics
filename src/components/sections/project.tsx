import React from "react";

const VideoStorySection = () => {
  return (
    <section className="bg-[#1a3e2a] text-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Impact. Real People.</h2>
          <p className="text-lg mb-6">
            Meet our farmers who are transforming their communities through sustainable
            beekeeping and organic farming. Their stories are what drive our mission forward.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-500 transition">
            Explore More Stories
          </button>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
            <video
              className="w-full h-full object-cover"
              preload="none"
              poster="/videos/hero-farmer-thumb.jpg"
              controls
            >
              <source src="/videos/farmer-story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStorySection;