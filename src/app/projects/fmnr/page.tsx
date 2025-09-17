import Link from 'next/link';
import { TreePine, Sprout, TrendingUp, Heart } from 'lucide-react';
import PageHeader from "@/components/sections/PageHeader";

export default function FMNRPage() {
  return (
    <div className="">
            <PageHeader
          title={"FMNR Program"}
          subtitle={"Farmer-Managed Natural Regeneration – Restoring Farmland with Farmers"}
          breadcrumbs={[{label: 'Home', href: '/'}, {label:'FMNR', href: 'home/projects/beekeeping'}]}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Our commitment to sustainability shines in our FMNR project, where we team up with local farmers to bring back 
              trees and life to degraded lands. Farmer-Managed Natural Regeneration (FMNR) is a simple but powerful practice.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is FMNR?</h2>
              <p className="text-gray-700 mb-6">
                Instead of planting new trees, farmers protect and nurture wild tree stumps and seedlings that sprout naturally 
                in their fields. This approach works with nature's own regenerative power to restore degraded landscapes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Sprout className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Natural Regeneration</h3>
                      <p className="text-gray-600">Identify and protect beneficial tree shoots that grow naturally in fields</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <TreePine className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proper Pruning</h3>
                      <p className="text-gray-600">Learn correct pruning techniques to allow healthy tree regrowth</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Training Topics</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-700">Identifying beneficial tree shoots</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-700">Correct pruning techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-700">Protecting seedlings from livestock</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-700">Managing trees with crops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Transformation Process</h2>
              <p className="text-gray-700 mb-6">
                We train communities around Kitgum in FMNR techniques. Over time, formerly barren fields turn into productive 
                agroforests with shade, improved soil, and habitat for pollinators (like our bees!).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏜️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Before FMNR</h3>
                  <p className="text-gray-600 text-sm">Degraded, barren farmland with poor soil and low productivity</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sprout className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">During Process</h3>
                  <p className="text-gray-600 text-sm">Training farmers and protecting natural tree regeneration</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">After FMNR</h3>
                  <p className="text-gray-600 text-sm">Productive agroforests with improved soil and biodiversity</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Farmers</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Better crop yields from improved soil</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">More fodder and fruit for farm families</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Additional income from tree products</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Reduced need for expensive inputs</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Environment</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <TreePine className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Cooler, greener environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TreePine className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Increased biodiversity and pollinator habitat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TreePine className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Carbon sequestration and climate benefits</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TreePine className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Soil erosion prevention</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Restoring Hope</h2>
                  <p className="text-gray-700">
                    This project is restoring hope along with forests – farmers see that they can heal their land with the tools 
                    they already have. It's truly a win-win for people and nature. The transformation from degraded land to 
                    productive agroforest gives communities a sense of pride and environmental stewardship.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
              <p className="text-green-100 mb-6">
                Learn how to regenerate your land with FMNR techniques. Join our training programs and start restoring 
                your farmland naturally.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-green-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Our FMNR Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}