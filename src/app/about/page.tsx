// My current about
import Link from 'next/link';

import { Heart, Users, Award, Leaf, Group, Clock, Smile} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";

const values = [
  {
    icon: <Heart className="h-8 w-8 text-brand-primary" />,
    title: "Community First",
    description:
      "We believe in putting the community at the center of everything we do, ensuring that our initiatives benefit local people directly.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-brand-accent" />,
    title: "Environmental Stewardship",
    description:
      "Our commitment to sustainable practices ensures that our beekeeping activities contribute to environmental conservation and biodiversity.",
  },
  {
    icon: <Award className="h-8 w-8 text-brand-primary" />,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in honey production, processing, and community training to ensure exceptional quality in everything we do.",
  },
  {
    icon: <Group className="h-8 w-8 text-brand-primary" />,
    title: "Empowerment Through Education",
    description:
      "We believe that knowledge transfer and skills development are key to creating lasting change in rural communities.",
  },
  {
    icon: <Users className="h-8 w-8 text-brand-accent" />,
    title: "Team Work",
    description:
      "Like the bees, we believe that when we work together as a team, everyone achieves more.",
  },
  {
    icon: <Clock className="h-8 w-8 text-brand-accent" />,
    title: "Time Management",
    description:
      "We value the optimal use of time and seasons for increased productivity.",
  },
  {
    icon: <Smile className="h-8 w-8 text-brand-primary" />,
    title: "Customer Experience",
    description:
      "We believe that the first product we serve is customer experience—the warm one served with a smile.",
  },
];

const teamMembers = [
  {
      name: "Achiro Nancy Hope",
      position: "Sales Lead - Kitgum",
      image: "/team/achiro.jpg",
  },
  {
      name: "Omona Paul",
      position: "Sales Lead - Kisaasi",
      image: "/team/paul.jpg",
  },
  {
      name: "James Komakech",
      position: "Apiary master",
      image: "/team/jimmy.png",
  },
];


export default function AboutPage() {
  const headerInfo = {
    title: "About Us",
    subtitle: `How Kitamu Natural Organics grew from a small bee farm 
    to a thriving social enterprise transforming Northern Uganda.`
  } as const

  return (
    <div className="">
      {/* Header */}
      <PageHeader
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
          breadcrumbs={[{label: 'Home', href: '/'}, {label: 'about', href: '/about'}]}
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold thm-text-primary mb-4">Our Story</h2>
              <div className="w-20 h-1 thm-bg-accent mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Kitamu Natural Organics was born from a simple yet powerful vision: to transform
                livelihoods in Northern Uganda through sustainable beekeeping. Founded in 2020 in
                Kitgum District, our organization emerged from the recognition that the region&apos;s
                post-conflict recovery needed innovative approaches to rural development.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The name &apos;Kitamu&apos; means &apos;sweet&apos; in Swahili, reflecting not only the natural sweetness
                of our honey but also the sweet transformation we aim to bring to communities across
                Northern Uganda. What started as a small initiative to train local farmers in beekeeping
                has grown into a comprehensive program encompassing training, processing, and marketing.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Today, we run two beekeeping training centers showcasing the nexus between traditional and modern beekeeping 
                for natural regeneration. while working with over 8000 trained beekeepers across five districts, operating a
                modern honey processing facility, and partnering with government
                agencies, NGOs, and private sector organizations. Our integrated approach combines
                technical training, quality processing, fair trade practices, and environmental
                conservation to create sustainable impact.
              </p>

              <p className="text-gray-700 leading-relaxed">
                As we look to the future, our commitment remains unchanged: to continue expanding
                opportunities for rural communities while maintaining our dedication to quality,
                sustainability, and community empowerment. We believe that through beekeeping,
                we&apos;re not just producing honey – we&apos;re cultivating hope, prosperity, and resilience
                across Northern Uganda.
              </p>
            </div>
          </div>
        </section>


      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="thm-bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                  To use beekeeping to provide competitive, quality, adaptive and affordable solutions while putting Local Economic Development at the centre of our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="thm-bg-accent text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-center thm-text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                  To be a leader in catalyzing Local Economic Development in Uganda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                The principles that guide our work and define our commitment to communities across Northern Uganda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Leadership */}
      <section className="py-16 bg-[#f6f4f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">The People Behind Kitamu</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                    src={'/team/wyclif.jpeg'}
                    alt='Odong Wycliff, CEO Kitamu Organics Limited'
                    fill
                    className="object-cover rounded-md "
                />
                {/*<div className="absolute bottom-[-51px] right-[-10px] w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mx-auto md:mx-0 mb-4"></div>*/}
              </div>

              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Odong Wycliff</h3>
                <p className="text-lg text-amber-600 font-medium mb-4">Founder & Chief Beekeeper</p>
                <p className="text-gray-700 mb-4">
                  Wycliff is an agroforestry specialist and passionate beekeeper with over 10 years of hands-on experience.
                  Born and raised in Kitgum, he combined his love for nature and community to start Kitamu Natural Organics.
                </p>
                <p className="text-gray-700">
                  You&apos;ll often find Wycliff out in the field – climbing up to check beehives or showing farmers how to prune trees –
                  always with a warm smile. Under his leadership, Kitamu has become a model for how business can benefit both people and the planet.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700 italic">
                &quot;Our team also includes local processing experts, field extension officers, and community trainers –
                all dedicated to quality and service. We&apos;re a proud Ugandan team, working together to bring you the best of our land.&quot;
              </p>
            </div>
          </div>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {teamMembers.map((member, idx) => (
                  <div key={idx} className="card bg-white rounded-xl shadow-md">
                      <figure>
                          <Image
                              src={member.image}
                              alt={member.name}
                              width={400}
                              height={400}
                              className="w-full h-80 object-cover mb-2"
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join the Kitamu Family</h2>
            <p className="text-xl text-amber-100 mb-8">
              We invite you to join the Kitamu family – where quality meets purpose. Thank you for supporting a 
              home-grown Ugandan company thats sweetening lives in more ways than one!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-amber-600 transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





      {/*<section className="py-16">*/}
      {/*  <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="prose prose-lg max-w-none">*/}
      {/*      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">*/}
      {/*        <h2 className="text-3xl font-bold text-gray-900 mb-6">From Dream to Reality</h2>*/}
      {/*        <p className="text-gray-700 mb-6">*/}
      {/*          Kitamu Natural Organics began with a simple idea: empower communities through nature. Our founder, */}
      {/*          Odong Wycliff, grew up in a farming family in Kitgum and saw firsthand the challenges local farmers faced. */}
      {/*          In 2018 (with just a few hives and a big dream), he set out to change that.*/}
      {/*        </p>*/}
      {/*        */}
      {/*        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">*/}
      {/*          <div className="bg-amber-50 rounded-xl p-6">*/}
      {/*            <h3 className="text-xl font-semibold text-gray-900 mb-4">2018 - The Beginning</h3>*/}
      {/*            <ul className="space-y-2">*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Started with a few hives in Kitgum</span>*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Taught handful of neighbors sustainable harvesting</span>*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Focus on organic, healthy products</span>*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </div>*/}
      {/*          */}
      {/*          <div className="bg-green-50 rounded-xl p-6">*/}
      {/*            <h3 className="text-xl font-semibold text-gray-900 mb-4">Today - The Impact</h3>*/}
      {/*            <ul className="space-y-2">*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-green-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Working with hundreds of beekeepers</span>*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-green-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Covering Kitgum to Gulu region</span>*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center space-x-2">*/}
      {/*                <div className="w-2 h-2 bg-green-400 rounded-full"></div>*/}
      {/*                <span className="text-gray-700">Thriving social enterprise</span>*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        */}
      {/*        <p className="text-gray-700">*/}
      {/*          Every jar of honey and every tin of shea butter carries a piece of our story – one of community cooperation, */}
      {/*          resilience, and innovation. We&apos;re proud to be building a business that Ugandans can trust for quality,*/}
      {/*          and that our farmers can rely on for a fair market.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*/!* Our Impact *!/*/}
      {/*<section className="py-16 bg-gray-50">*/}
      {/*  <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Goes Beyond Sales</h2>*/}
      {/*      <p className="text-xl text-gray-600 max-w-3xl mx-auto">*/}
      {/*        We&apos;re creating a self-sustaining ecosystem where the land is healthy, the products are pure, and the people thrive.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*      <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">*/}
      {/*        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">*/}
      {/*          <Heart className="h-10 w-10 text-green-600" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Restoration</h3>*/}
      {/*        <p className="text-gray-600">*/}
      {/*          Training farmers in beekeeping and Farmer-Managed Natural Regeneration to restore forests and increase crop yields.*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">*/}
      {/*        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">*/}
      {/*          <Users className="h-10 w-10 text-blue-600" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-bold text-gray-900 mb-4">Women&apos;s Empowerment</h3>*/}
      {/*        <p className="text-gray-600">*/}
      {/*          Partnering with women&apos;s cooperatives to make shea butter and oils, ensuring women have steady incomes and stronger voices.*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">*/}
      {/*        <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">*/}
      {/*          <Award className="h-10 w-10 text-amber-600" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-bold text-gray-900 mb-4">Community Development</h3>*/}
      {/*        <p className="text-gray-600">*/}
      {/*          Creating sustainable livelihoods that put children through school, put food on tables, and inspire the next generation.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}


      {/* Why Choose Kitamu */}
      {/*<section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">*/}
      {/*  <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Kitamu?</h2>*/}
      {/*      <p className="text-xl text-gray-600">*/}
      {/*        When you choose Kitamu Natural Organics, you&apos;re choosing more than a product – you&apos;re supporting a movement.*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="space-y-8">*/}
      {/*      <div className="bg-white rounded-2xl p-8 shadow-lg">*/}
      {/*        <div className="flex items-start space-x-4">*/}
      {/*          <div className="bg-amber-100 p-3 rounded-lg">*/}
      {/*            <Target className="h-6 w-6 text-amber-600" />*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <h3 className="text-xl font-bold text-gray-900 mb-3">Pure Quality, Guaranteed</h3>*/}
      {/*            <p className="text-gray-700">*/}
      {/*              We deliver 100% natural, unadulterated products. No additives, no shortcuts – just the pure honey, */}
      {/*              butter, or oil as nature intended. Every batch is lab-tested and tasted for excellence.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="bg-white rounded-2xl p-8 shadow-lg">*/}
      {/*        <div className="flex items-start space-x-4">*/}
      {/*          <div className="bg-green-100 p-3 rounded-lg">*/}
      {/*            <Heart className="h-6 w-6 text-green-600" />*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability at Heart</h3>*/}
      {/*            <p className="text-gray-700">*/}
      {/*              Our entire business is built on eco-friendly practices – from bee-friendly farming (no bees are harmed in harvest) */}
      {/*              to re-growing trees on degraded land. We prioritize the health of our environment so that our products are good for you and the Earth.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="bg-white rounded-2xl p-8 shadow-lg">*/}
      {/*        <div className="flex items-start space-x-4">*/}
      {/*          <div className="bg-blue-100 p-3 rounded-lg">*/}
      {/*            <Users className="h-6 w-6 text-blue-600" />*/}
      {/*          </div>*/}
      {/*          <div>*/}
      {/*            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Empowerment</h3>*/}
      {/*            <p className="text-gray-700">*/}
      {/*              Every Kitamu product directly supports Ugandan farmers. We work with smallholder beekeepers, women's groups, */}
      {/*              and youth entrepreneurs, ensuring they earn fair income. By buying from us, you help put children through school, */}
      {/*              put food on tables, and inspire the next generation of eco-conscious business owners.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}