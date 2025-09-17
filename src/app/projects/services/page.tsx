import { GraduationCap, Handshake, Droplets, Car as Jar, Leaf, Sparkles } from 'lucide-react';
import PageHeader from "@/components/sections/PageHeader";

export default function ServicesPage() {
  const services = [
    {
      title: 'Bee-Farming Training & Setup',
      description: 'Comprehensive beekeeping training and apiary setup services for individuals, families, and groups across Uganda.',
      icon: GraduationCap,
      features: [
        'Expert Guidance from experienced Ugandan beekeepers',
        'Personalized Support with customized apiary plans',
        'High Yields & Safety best practices training',
        'On-site installation and ongoing mentorship'
      ],
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Wholesale & B2B Partnerships',
      description: 'Reliable supply of natural products for businesses with consistent quality and competitive pricing.',
      icon: Handshake,
      features: [
        'Reliable Supply Chain backed by 4,000+ farmers',
        'Premium Quality Assurance with strict quality checks',
        'Local Impact story that adds value to your brand',
        'Custom packaging and white-label solutions'
      ],
      color: 'from-green-500 to-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  const products = [
    {
      title: 'Raw Honey',
      description: 'Unfiltered, raw honey packed with natural goodness straight from the beehive in Kitgum.',
      icon: Droplets,
      benefits: [
        'Boosts immunity and energy with antioxidants',
        '100% pure Ugandan honey with no additives',
        'Slow-harvested to preserve enzymes'
      ],
      color: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'Shea Butter (Cold-Pressed)',
      description: 'Creamy, nutrient-rich butter from wild shea nuts handpicked in Northern Uganda.',
      icon: Jar,
      benefits: [
        'Deeply moisturizes skin and hair naturally',
        'Rich in antioxidants and anti-inflammatory properties',
        'Ethically sourced from women-led cooperatives'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Odii Paste (Peanut & Sesame)',
      description: 'Northern Uganda\'s beloved wholesome spread made from roasted peanuts and sesame seeds.',
      icon: Jar,
      benefits: [
        'High in plant protein and healthy fats',
        'Only two ingredients - no preservatives added',
        'Authentic taste of Acholi cultural heritage'
      ],
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Lemongrass Oil',
      description: 'Pure essential oil extracted from organic lemongrass plants grown on our partner farms.',
      icon: Leaf,
      benefits: [
        'Invigorating aroma that relieves stress',
        'Natural antiseptic and antifungal qualities',
        'Chemical-free insect repellent properties'
      ],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const headerInfo = {
    title: 'Services & Products',
    subtitle: `We're more than just a products company – we're partners in skill-building and business. 
              See how we can work together.`,
    breadcrumbs: [{label: 'Home', href: '/'}, {label:'Services', href: 'home/projects/services'}]
  } as const


  return (
    <div className="">
      <PageHeader
          title={headerInfo.title}
          subtitle={headerInfo.subtitle}
          breadcrumbs={[...headerInfo.breadcrumbs]}
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}>
                  <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service CTAs */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">Interested in Bee-Farming?</h3>
              <p className="text-amber-100 mb-4">Contact us to enroll in the next training session or schedule a consultation.</p>
              <button className="px-6 py-2 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-center text-white">
              <h3 className="text-xl font-bold mb-3">Ready for Partnership?</h3>
              <p className="text-blue-100 mb-4">Contact our sales team for wholesale pricing, samples, or B2B discussions.</p>
              <button className="px-6 py-2 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All Kitamu Natural Organics products are made with care, using 100% natural ingredients sourced from 
              our own farms and trusted local partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${product.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {product.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <Sparkles className="h-4 w-4 text-amber-400 mt-1" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Promise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Natural</h3>
                <p className="text-gray-600 text-sm">No additives, no shortcuts – just pure products as nature intended</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainably Sourced</h3>
                <p className="text-gray-600 text-sm">Eco-friendly practices that benefit both you and the environment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Made</h3>
                <p className="text-gray-600 text-sm">Every product directly supports Ugandan farmers and their families</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}