'use client'
import Image from 'next/image'
import {FaHandshake, FaAward, FaLeaf} from 'react-icons/fa'
import CountUp from 'react-countup'

export default function AboutSection() {
    const stats = [
        {end: 4000, label: 'Partnered Farmers'},
        {end: 8, label: 'Natural Products'},
        {end: 4, label: 'Years of Impact'},
        {end: 50, label: 'Districts Served'},
    ]

    return (
        <section className="w-full">
                {/* ABOUT SECTION */}
                <div className="bg-primary text-white ">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch">
                        {/* Image Column */}
                        <div className="relative w-full h-full">
                                <Image
                                  src="/images/beekeeper.png"
                                  alt="Beekeeping in action"
                                  fill
                                  className="object-cover"
                                  priority
                                />
                        </div>

                        {/* Text Column */}
                        <div className="space-y-6 py-20 px-6 sm:p-12 md:p-20 flex flex-col justify-center">
                            <span className="inline-flex items-center gap-2 text-sm font-semibold">
                              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700">
                                <FaLeaf className="text-white text-xl"/>
                              </div>
                              <span className="text-white uppercase tracking-wide">About Us</span>
                            </span>

                            <h2 className="thm-section-title text-white font-bold">Rooted in Nature, Growing with Community.</h2>

                            <p className="text-lg text-gray-200">
                                Kitamu Natural Organics is a Ugandan agribusiness born in Kitgum, Northern Uganda.
                                We believe authentic, organic products can transform communities. From raw honey to
                                cold-pressed shea butter, everything we offer comes straight from our own beehives and
                                local farms. By training farmers and planting trees, we’re improving lives and restoring
                                the environment – one jar at a time.
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


                    <div className="container relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:divide-x divide-green-800">
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


