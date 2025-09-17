import Link from 'next/link';
import { ArrowRight, Users, Factory, TreePine } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'beekeeping-expansion',
      title: 'Beekeeping Expansion',
      subtitle: 'Our Apiary Network & Training',
      description: 'Spreading the art of beekeeping across Northern Uganda through training programs and starter hives for local farmers.',
      icon: Users,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      features: ['4,000+ farmers trained', 'Modern hive management', 'Community workshops', 'Income generation']
    },
    {
      id: 'natural-product-manufacturing',
      title: 'Natural Product Manufacturing',
      subtitle: 'From Hive to Jar in Kitgum',
      description: 'Value addition through our Kitgum processing facility, creating quality natural products and local employment.',
      icon: Factory,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      features: ['Local processing facility', 'Quality control', 'Job creation', 'Product innovation']
    },
    {
      id: 'fmnr',
      title: 'FMNR Program',
      subtitle: 'Restoring Farmland with Farmers',
      description: 'Farmer-Managed Natural Regeneration to restore degraded lands and create productive agroforests.',
      icon: TreePine,
      color: 'from-green-600 to-emerald-500',
      bgColor: 'bg-emerald-50',
      features: ['Land restoration', 'Improved crop yields', 'Biodiversity increase', 'Climate resilience']
    }
  ];

  return (
    <div className="pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Community Projects
          </h1>
          <p className="text-xl text-gray-600">
            At Kitamu, our work goes beyond products – it's about projects that uplift communities and heal the land. 
            Here's what we're actively working on:
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div key={project.id} className={`${project.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`bg-gradient-to-r ${project.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg font-medium text-gray-600 mb-4">{project.subtitle}</p>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join us in creating positive change through sustainable agriculture and community empowerment.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}