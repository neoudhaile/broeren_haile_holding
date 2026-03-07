"use client";

import Link from "next/link";
import { useState } from "react";

function ImageWithFallback({
  src,
  alt,
  className,
  fallbackText = "Photo"
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 text-gray-400 text-sm ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-warm-white to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/images/logo.jpg"
              alt="Broeren & Co."
              className="h-12 md:h-16 mx-auto mb-8"
            />
            <div className="w-16 h-px bg-gold mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-charcoal mb-4 leading-relaxed font-light">
              A holding company based in Los Angeles that acquires and operates established businesses long-term.
            </p>
            <p className="text-lg text-soft-gray mb-12 max-w-2xl mx-auto">
              We partner with owners seeking succession or looking to grow their business while maintaining continuity for their employees and customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/for-business-owners" className="btn-primary inline-block text-center">
                For Business Owners
              </Link>
              <Link href="/contact" className="btn-secondary inline-block text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-navy mb-4">What Makes Us Different</h2>
            <div className="w-12 h-px bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3 font-medium">Permanent Ownership</h3>
              <p className="text-soft-gray leading-relaxed">
                We do not flip or resell companies. When we acquire a business, we intend to own and operate it indefinitely.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-6 -rotate-2 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3 font-medium">Operator-Led</h3>
              <p className="text-soft-gray leading-relaxed">
                We personally manage and support our businesses. We are hands-on owners, not distant investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-2 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3 font-medium">Respect for Legacy</h3>
              <p className="text-soft-gray leading-relaxed">
                We retain employees, name, and customer relationships whenever possible. Your legacy matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries with Images */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-navy mb-4">Industries We Focus On</h2>
              <p className="text-soft-gray">Repair & Maintenance Businesses</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <ImageWithFallback
                    src="/images/auto-repair.jpg"
                    alt="Automotive Repair"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText="Auto"
                  />
                </div>
                <p className="text-charcoal text-center text-sm font-medium">Automotive Repair</p>
              </div>
              <div className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <ImageWithFallback
                    src="/images/equipment-repair.jpg"
                    alt="Equipment Repair"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText="Equipment"
                  />
                </div>
                <p className="text-charcoal text-center text-sm font-medium">Equipment Repair</p>
              </div>
              <div className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <ImageWithFallback
                    src="/images/technical-services.jpg"
                    alt="Specialized Technical Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText="Technical"
                  />
                </div>
                <p className="text-charcoal text-center text-sm font-medium">Technical Services</p>
              </div>
              <div className="group">
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
                  <ImageWithFallback
                    src="/images/local-service.jpg"
                    alt="Local Service Companies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackText="Service"
                  />
                </div>
                <p className="text-charcoal text-center text-sm font-medium">Local Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-100 rounded-2xl flex-shrink-0 overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/images/founder.jpg"
                  alt="Rigel Broeren"
                  className="w-full h-full object-cover"
                  fallbackText="Photo"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl text-navy mb-2">Meet the Founder</h2>
                <p className="text-gold font-medium mb-6">Rigel Broeren</p>
                <p className="text-soft-gray leading-relaxed mb-4">
                  Based in Los Angeles, I started Broeren & Co. with a simple belief:
                  great small businesses deserve owners who will nurture them for the long term.
                </p>
                <p className="text-soft-gray leading-relaxed">
                  Too many business owners face limited options when it&apos;s time to step back.
                  I created this company to offer a different path, one that honors the work
                  you&apos;ve put in and protects the people who depend on your business.
                </p>
                <Link href="/about" className="inline-block mt-6 text-navy font-medium hover:text-gold transition-colors">
                  Learn more about our approach &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl mb-6">Ready to Start a Conversation?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            We&apos;re here to listen. Every conversation is confidential and non-obligatory.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-muted text-navy font-medium py-3 px-8 rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
