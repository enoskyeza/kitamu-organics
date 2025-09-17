
'use client'
import { FaBook, FaTools, FaLeaf, FaLightbulb, FaArrowRight } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'Agriculture Training',
      icon: <FaBook className="text-4xl thm-text-primary" />,
      description:
        'Hands-on courses and workshops to equip farmers with modern, sustainable beekeeping and agroforestry techniques.',
    },
    {
      title: 'Installation',
      icon: <FaTools className="text-4xl text-white" />,
      description:
        'End-to-end setup of hives, apiaries, and regenerative farm systems—professionally installed for optimal yield.',
      featured: true,
    },
    {
      title: 'Nutrient Systems',
      icon: <FaLeaf className="text-4xl thm-text-primary" />,
      description:
        'Custom soil and plant nutrition plans using organic inputs to boost hive health and ecosystem resilience.',
    },
    {
      title: 'Strategic Advice',
      icon: <FaLightbulb className="text-4xl thm-text-primary" />,
      description:
        'Personalized consulting on market access, value-addition, and scaling your beekeeping business for long-term success.',
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full thm-bg-secondary">
            <FaLeaf className="text-white text-xl" />
          </div>
          <span className="ml-3 text-sm font-medium thm-text-secondary uppercase tracking-wide">
            Our Services
          </span>
        </div>
        <h2 className="thm-section-title thm-text-primary">Experience The Real Agriculture</h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-[28px] shadow-2xl overflow-visible">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white items-end">
            {services.map((svc) => (
              <div
                key={svc.title}
                className={
                  `p-8 text-center flex flex-col items-center justify-between ` +
                  (svc.featured
                    ? 'relative -mt-8 text-white '
                    : '')
                }
              >
                {svc.featured && (
                  <div className="mt-4 md:mt-0 absolute w-full inset-x-0 sm:inset-x-0 lg:inset-x-0 -top-0 h-[calc(100%)]
                  md:-top-8 md:h-[calc(100%+2rem)] bg-primary rounded-[28px] z-0" />
                )}

                <div className="mt-4 md:mt-0 relative z-10 w-full flex flex-col items-center justify-between">
                  <div className="mb-4">
                    {svc.icon}
                  </div>
                  <h3
                    className={
                      `font-semibold text-lg mb-2 ` +
                      (svc.featured ? 'text-white' : 'thm-text-primary')
                    }
                  >
                    {svc.title}
                  </h3>
                  <p className={
                      `text-sm mb-4 ` +
                      (svc.featured ? 'text-gray-100' : 'text-gray-600')
                    }>
                    {svc.description}
                  </p>
                  <a
                    href="#"
                    className={
                      `inline-flex items-center font-medium hover:underline ` +
                      (svc.featured ? 'text-white' : 'thm-text-secondary')
                    }
                  >
                    Learn More <FaArrowRight className="ml-2 text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
