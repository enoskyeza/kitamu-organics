'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import WhatsappChatButton from "@/components/utils/WhatsappChat";

export default function ContactPage() {
  const [selectedBranch, setSelectedBranch] = useState('kitgum');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const branches = {
    kitgum: {
      // Head office and main processing facility
      name: 'Kitamu Natural Organics-Kitgum',
      label: 'Kitgum',
      address: 'Kitgum Town, Northern Uganda',
      phone: '+256782976755',
      email: 'info@kitamunaturalorganics.com',
      hours: 'Mon‑Fri: 8:00AM–5:00PM, Sat: 9:00AM–2:00PM',
      coordinates: { lat: 3.288889, lng: 32.877778 },
      description: 'Our main processing facility and headquarters',
      directions: 'https://maps.app.goo.gl/24vYiu3DtF9TAF8Z6'
    },
    kisaasi: {
      // Kampala retail outlet and customer service centre
      name: 'Kitamu Natural Organics–Kisaasi',
      label: 'Kisaasi',
      address: '28KulambiroRingRd, Kampala',
      phone: '+256788120945',
      email: 'kisaasi@kitamu.co.ug',
      hours: 'Mon‑Fri: 9:00AM–6:00PM, Sat: 10:00AM–4:00PM',
      coordinates: { lat: 0.369450, lng: 32.602767 },
      description: 'Urban retail outlet and customer service centre',
      directions: 'https://maps.app.goo.gl/CuteSjmv1GBwRT999'
    },
    gulu: {
      // This branch is not yet live; we use the centre of Gulu town
      name: 'Kitamu Natural Organics–Gulu',
      label: 'Gulu',
      address: 'Gulu Town, Northern Uganda',
      phone: '+256772123457',
      email: 'gulu@kitamu.co.ug',
      hours: 'Mon‑Fri: 8:00AM–5:00PM, Sat: 9:00AM–2:00PM',
      coordinates: { lat: 2.78167, lng: 32.29917 },
      description: 'Regional training centre and distribution hub)',
      directions: 'https://maps.app.goo.gl/n1uDn6DgU33KiipBA'
    },
  } as const;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const focusOnBranch = (branchKey: string) => {
    setSelectedBranch(branchKey);
    // In a real implementation, this would center the map on the selected branch
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Get in touch with Kitamu Natural Organics. We&apos;re here to help with your beekeeping journey,
            product inquiries, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Have questions about our products or services? We&apos;d love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-green-800 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="beekeeping-training">Beekeeping Training</option>
                    <option value="wholesale-partnership">Wholesale Partnership</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our three branches across Uganda
            </p>
          </div>

          {/* Branch Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(branches).map(([key, branch]) => (
              <button
                key={key}
                onClick={() => focusOnBranch(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedBranch === key
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-green-800 border-2 border-green-200 hover:border-orange-400 hover:text-orange-600'
                }`}
              >
                {branch.label} Branch
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 relative">
                {/* Placeholder for Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Showing: {branches[selectedBranch as keyof typeof branches].name}
                    </p>
                  </div>
                </div>

                <iframe
                  src={`https://maps.google.com/maps?q=${branches[selectedBranch as keyof typeof branches].coordinates.lat},${branches[selectedBranch as keyof typeof branches].coordinates.lng}&z=14&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Branch Information */}
            <div className="space-y-6">
              {Object.entries(branches).map(([key, branch]) => (
                <div
                  key={key}
                  className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                    selectedBranch === key
                      ? 'ring-2 ring-orange-400 shadow-xl'
                      : 'hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      selectedBranch === key ? 'bg-orange-100' : 'bg-green-100'
                    }`}>
                      <MapPin className={`h-6 w-6 ${
                        selectedBranch === key ? 'text-orange-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-800 mb-2">{branch.name}</h3>
                      <p className="text-gray-600 mb-4">{branch.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{branch.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{branch.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{branch.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700">{branch.hours}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => window.open(`${branch.directions}`, '_blank')}
                        className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      {/*<section className="py-16 bg-gradient-to-r from-green-800 to-green-900 text-white">*/}
      {/*  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>*/}
      {/*      <p className="text-green-100">*/}
      {/*        Ready to start your beekeeping journey or have questions about our products?*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*      <div className="text-center">*/}
      {/*        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <Phone className="h-8 w-8 text-white" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold mb-2">Call Us</h3>*/}
      {/*        <p className="text-green-100">+256 772 123 456</p>*/}
      {/*        <p className="text-green-200 text-sm">Mon-Fri: 8AM-5PM</p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <Mail className="h-8 w-8 text-white" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold mb-2">Email Us</h3>*/}
      {/*        <p className="text-green-100">info@kitamu.co.ug</p>*/}
      {/*        <p className="text-green-200 text-sm">We reply within 24 hours</p>*/}
      {/*      </div>*/}

      {/*      <div className="text-center">*/}
      {/*        <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">*/}
      {/*          <MessageCircle className="h-8 w-8 text-white" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>*/}
      {/*        <p className="text-green-100">+256 772 123 456</p>*/}
      {/*        <p className="text-green-200 text-sm">Quick responses</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <WhatsappChatButton />
    </div>
  );
}