"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-navy mb-6">Contact Us</h1>
            <p className="text-xl text-soft-gray leading-relaxed">
              We&apos;d love to hear from you. All conversations are confidential and non-obligatory.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl text-navy mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-medium mb-1">Phone</h3>
                      <a href="tel:+13105551234" className="text-soft-gray hover:text-navy transition-colors">
                        (310) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-medium mb-1">Email</h3>
                      <a href="mailto:info@broerenco.com" className="text-soft-gray hover:text-navy transition-colors">
                        info@broerenco.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-navy font-medium mb-1">Location</h3>
                      <p className="text-soft-gray">Los Angeles, California</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-warm-white rounded-lg border-l-4 border-gold">
                  <h3 className="text-navy font-semibold mb-3">Our Confidentiality Promise</h3>
                  <p className="text-soft-gray text-sm leading-relaxed mb-3">
                    We understand that considering a sale is a deeply personal decision. Every conversation
                    we have is held in the strictest confidence.
                  </p>
                  <ul className="text-soft-gray text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Your inquiry will never be shared with anyone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No obligation to proceed at any stage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Your employees and customers will not know about our discussions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl text-navy mb-8">Send a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl text-navy mb-2">Thank You</h3>
                    <p className="text-soft-gray">
                      We&apos;ve received your message and will be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-navy font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-navy font-medium mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                        placeholder="Smith Auto Repair"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-navy font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
                        placeholder="Los Angeles, CA"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-navy font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors resize-none"
                        placeholder="Tell us about your situation or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-4 text-center"
                    >
                      Send Message
                    </button>

                    <p className="text-soft-gray text-sm text-center">
                      Your information is confidential and will never be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
