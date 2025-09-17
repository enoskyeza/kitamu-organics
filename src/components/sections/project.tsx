import React from "react";

const VideoStorySection = () => {
  return (
    <section className="bg-[#1a3e2a] text-white py-16 px-4 relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="thm-section-title font-bold mb-4">Real Impact. Real People.</h2>
          <p className="text-lg mb-6">
            We currently support over 4,00 local households in beekeeping and agroforestry, from Kitgum to Gulu.
            By choosing Kitamu, you’re empowering Ugandan farmers, creating jobs, and helping regenerate our land.
            Our bees don’t just make honey – they pollinate crops and bring life back to barren fields.
            Together, we’re building a sweeter, greener future for Uganda. See Our Projects
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
              poster="/images/harvesting.jpg"
              controls
            >
              <source src="/videos/harvest.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStorySection;