'use client'
import Image from 'next/image'
import {FaHandshake, FaAward, FaLeaf} from 'react-icons/fa'
import CountUp from 'react-countup'

export default function AboutSection() {
    const stats = [
        {end: 400, label: 'Partnered Farmers'},
        {end: 8, label: 'Natural Products'},
        {end: 10, label: 'Years of Impact'},
        {end: 30, label: 'Districts Served'},
    ]

    return (
        <section className="w-full">
            {/* ABOUT SECTION */}
            <div className="bg-primary text-white py-16 px-6 sm:px-12 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image Column */}
                    <div className="relative w-full h-64 md:h-80 overflow-visible ">
                        <div
                            className="
                                  z-10
                                  md:absolute
                                  top-44 left-1/2      /* start centered in the parent */
                                  transform
                                  -translate-x-1/2 -translate-y-1/2  /* truly center its own origin */
                                             /* rotate counter‐clockwise */
                                "
                            style={{width: '93%', height: 'auto'}}  /* or use Tailwind w-40 h-32 etc */
                        >
                            <Image
                                src="/images/beekeeper.png"
                                alt="Beekeeping in action"
                                width={720}
                                height={250}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700">
                            <FaLeaf className="text-white text-xl"/>
                          </div>
                          <span className="text-white uppercase tracking-wide">About Us</span>
                        </span>

                        <h2 className="thm-section-title text-white font-bold">Good Nature For You</h2>

                        <p className="text-lg text-gray-200">
                            Kitamu Natural Organics champions nature-based beekeeping and Farmer-Managed Natural
                            Regeneration to revitalize land and livelihoods in Northern Uganda.
                        </p>

                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700">
                                    <FaAward className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Experienced</p>
                                    <p className="text-gray-300 text-sm">Over 10 years of community engagement</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700">
                                    <FaHandshake className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Trusted</p>
                                    <p className="text-gray-300 text-sm">Thousands of loyal customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STATS SECTION */}
            <div
                className="relative bg-green-300/20 text-green-900 py-20 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden">
                {/* World Map + Honeycomb Backgrounds */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: "url('/textures/map.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // mixBlendMode: 'overlay',
                        opacity: 0.2,
                        filter: 'blur(0px)',
                        zIndex: 0,
                    }}
                />

                {/* Top Gradient Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(163,177,138,1), rgba(163,177,138,0.7))',
                        zIndex: 1,
                    }}
                />

                {/* Noise Overlay */}
                {/*<div*/}
                {/*    style={{*/}
                {/*        position: 'absolute',*/}
                {/*        inset: 0,*/}
                {/*        backgroundImage: "url('/textures/noise.png')",*/}
                {/*        backgroundRepeat: 'repeat',*/}
                {/*        opacity: 0.05,*/}
                {/*        pointerEvents: 'none',*/}
                {/*        zIndex: 2,*/}
                {/*    }}*/}
                {/*/>*/}

                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 divide-x divide-green-800">
                    {stats.map((stat) => (
                        <div key={stat.label} className="py-4 text-center px-4">
                            <p className="text-5xl md:text-6xl font-extrabold">
                                +<CountUp end={stat.end} duration={2}/>
                            </p>
                            <p className="mt-2 text-sm font-medium tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


// 'use client'
// import Image from "next/image";
// import {FaHandshake, FaAward, FaLeaf} from "react-icons/fa";
//
// export default function AboutSection() {
//     return (
//         <section className="w-full">
//             {/* ABOUT SECTION */}
//             <div className="theme-bg-light text-green-900 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                     {/* Image */}
//                     <div className="relative w-full ">
//                         <div
//                             className="
//                                   md:absolute
//                                   top-4 left-1/2      /* start centered in the parent */
//                                   transform
//                                   -translate-x-1/2 -translate-y-1/2  /* truly center its own origin */
//                                              /* rotate counter‐clockwise */
//                                 "
//                             style={{width: '90%', height: 'auto'}}  /* or use Tailwind w-40 h-32 etc */
//                         >
//                             <Image
//                                 src="/images/beekeeper.png"
//                                 alt="Beekeeping in action"
//                                 width={720}
//                                 height={250}
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </div>
//
//                     {/* Text */}
//                     <div className="space-y-6 ">
//                         <span className="text-lg font-semibold text-green-700 flex items-center gap-2">
//                           <FaLeaf className="text-green-800"/> About Us
//                         </span>
//                         <h2 className="text-4xl font-bold text-green-900">
//                             Nature-Powered Solutions for Health & Livelihood
//                         </h2>
//                         <p className="text-lg text-green-800">
//                             At Kitamu Natural Organics, we support over 4,000 households in Northern Uganda
//                             through sustainable beekeeping, natural farming, and eco-conscious value addition.
//                         </p>
//                         <div className="flex gap-8 pt-4">
//                             <div className="flex items-center gap-3">
//                                 <FaAward className="text-green-800 text-3xl"/>
//                                 <div>
//                                     <p className="font-bold text-lg">Experienced</p>
//                                     <p className="text-sm text-green-700">Over 10 years of community engagement</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <FaHandshake className="text-green-800 text-3xl"/>
//                                 <div>
//                                     <p className="font-bold text-lg">Trusted</p>
//                                     <p className="text-sm text-green-700">Thousands of loyal customers</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             {/* STATS SECTION */}
//             <div
//                 className="relative bg-green-900 text-white py-20 px-6 sm:px-12 md:px-20 lg:px-32"
//             >
//                 {/* 1) Blurred honeycomb background */}
//                 <div
//                     style={{
//                         position: 'absolute',
//                         inset: 0,
//                         backgroundImage: "url('/textures/stat-bg.png')",
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         mixBlendMode: 'overlay',
//                         opacity: 0.1,
//                         filter: 'blur(1px)',
//                         zIndex: 0,
//                     }}
//                 />
//
//                  {/*2) Grain / noise overlay*/}
//                 <div
//                     style={{
//                         position: 'absolute',
//                         inset: 0,
//                         backgroundImage: "url('/textures/noise.png')",
//                         backgroundRepeat: 'repeat',
//                         opacity: 0.03,
//                         pointerEvents: 'none',
//                         zIndex: 1,
//                     }}
//                 />
//                 <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
//                     <div>
//                         <p className="text-4xl font-extrabold">4,000+</p>
//                         <p className="text-sm text-green-200">Partnered Farmers</p>
//                     </div>
//                     <div>
//                         <p className="text-4xl font-extrabold">8+</p>
//                         <p className="text-sm text-green-200">Natural Products</p>
//                     </div>
//                     <div>
//                         <p className="text-4xl font-extrabold">10+</p>
//                         <p className="text-sm text-green-200">Years of Impact</p>
//                     </div>
//                     <div>
//                         <p className="text-4xl font-extrabold">30+</p>
//                         <p className="text-sm text-green-200">Districts Served</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
//
