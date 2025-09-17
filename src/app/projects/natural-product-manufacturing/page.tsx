import Link from 'next/link';
import { ArrowLeft, Factory, Shield, Users, Sparkles } from 'lucide-react';

export default function NaturalProductManufacturingPage() {
  return (
    <div className="py-16">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/projects" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Factory className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Natural Product Manufacturing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From Hive to Jar in Kitgum
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Natural Product Manufacturing is our initiative to add value right here at home. In our Kitgum processing facility, 
              we carefully craft everything we harvest – turning raw honey into clean, bottled goodness and shea nuts into smooth butter – 
              all under strict quality control.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">From Hive to Jar</h3>
                  <p className="text-gray-600 mb-4">
                    "From hive to jar" means we preserve purity at every step: no chemicals, no shortcuts, 
                    just farm-fresh ingredients transformed with modern food-safe techniques.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Careful harvesting from our apiaries</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Modern food-safe processing techniques</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Strict quality control measures</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Chemical-free preservation</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Products</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Pure Raw Honey</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Cold-Pressed Shea Butter</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Kitamu Honey Wine</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Infused Essential Oils</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">Odii Paste</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Local Employment</h3>
                      <p className="text-gray-600">
                        This project has created local jobs in Kitgum, especially for youth and women who handle 
                        processing and packaging.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Value Retention</h3>
                      <p className="text-gray-600">
                        By manufacturing locally, we ensure that more of the value stays within the community 
                        and our customers get genuinely fresh, Ugandan-made products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mt-6">
                We're also innovating new products like Kitamu Honey Wine and infused oils, showcasing the richness 
                of our region. When you see the Kitamu label, you know it was made with care in Northern Uganda.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Chemicals</h3>
                  <p className="text-gray-600 text-sm">100% natural processing with no harmful additives or preservatives</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Modern Facility</h3>
                  <p className="text-gray-600 text-sm">State-of-the-art processing equipment ensuring food safety</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Control</h3>
                  <p className="text-gray-600 text-sm">Rigorous testing and quality assurance at every step</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="text-green-100 mb-6">
                See how we maintain quality and value-addition in our manufacturing process. 
                Interested in wholesale or B2B partnerships?
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-full bg-white text-green-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}