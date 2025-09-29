import Link from 'next/link';
import { Users, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import PageHeader from "@/components/sections/PageHeader";

export default function BeekeepingExpansionPage() {
  return (
    <div className="">
      {/* Breadcrumb */}
      {/*<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">*/}
      {/*  <Link href="/projects" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors">*/}
      {/*    <ArrowLeft className="mr-2 h-4 w-4" />*/}
      {/*    Back to Projects*/}
      {/*  </Link>*/}
      {/*</div>*/}

      {/* Header */}
      {/*<section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">*/}
      {/*  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center">*/}
      {/*      <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">*/}
      {/*        <Users className="h-10 w-10 text-white" />*/}
      {/*      </div>*/}
      {/*      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">*/}
      {/*        Beekeeping Expansion*/}
      {/*      </h1>*/}
      {/*      <p className="text-xl text-gray-600 mb-8">*/}
      {/*        Our Apiary Network & Training Program*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <PageHeader
          title={"Beekeeping Expansion"}
          subtitle={"Our Apiary Network & Training Program"}
          breadcrumbs={[{label: 'Home', href: '/'}, {label:'Bee Keeping', href: 'home/projects/beekeeping'}]}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re on a mission to spread the art of beekeeping across Northern Uganda. Through the Beekeeping Expansion project,
              we train local farmers (men and women alike), youth and middle income earners in intergrated farming and provide them with starter hives at subsidized costs.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Training Programs</h3>
                    <p className="text-gray-600">Comprehensive workshops covering bee biology, hive management, and honey harvesting hygiene.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Starter Hives</h3>
                    <p className="text-gray-600">We provide quality starter hives to help farmers begin their beekeeping journey.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Workshops</h3>
                    <p className="text-gray-600">Regular workshops in Kitgum and Gulu, bringing knowledge directly to farming communities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Building</h3>
                    <p className="text-gray-600">Creating networks of beekeepers who support and learn from each other.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
              <p className="text-gray-700 mb-6">
                By growing our apiary network village by village, we create new income streams for families and increase
                pollination for crops. This project isn&apos;t just about producing more honey – it&apos;s about building self-reliance
                and a buzzing community of beekeepers who protect the environment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">4,000+</div>
                  <div className="text-gray-600">Jobs created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1600+</div>
                  <div className="text-gray-600"> Arces of degraded land regenerated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Villages Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200%</div>
                  <div className="text-gray-600">Income Increase</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-gray-700 mb-4">
                Farmers who once struggled with unreliable harvests are now entrepreneurial beekeepers, and the whole region
                benefits from increased food security and biodiversity. We hold workshops teaching everything from bee biology
                to honey harvesting hygiene, ensuring our beekeepers have all the knowledge they need to succeed.
              </p>
              <p className="text-gray-700">
                The results speak for themselves: increased crop yields from better pollination, new revenue streams from honey
                sales, and stronger, more resilient communities that work together to protect their environment.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Beekeeping Program</h3>
              <p className="text-amber-100 mb-6">
                Ready to start your beekeeping journey? Get trained and start your hive with our comprehensive program.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}