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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-navy mb-6">Our Approach</h1>
            <p className="text-xl text-soft-gray leading-relaxed">
              We believe in a different kind of business ownership&mdash;one built on patience,
              partnership, and a genuine respect for the businesses we acquire.
            </p>
          </div>
        </div>
      </section>

      {/* About Rigel */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-64 h-80 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                <ImageWithFallback
                  src="/images/rigel.jpg"
                  alt="Rigel Broeren"
                  className="w-full h-full object-cover"
                  fallbackText="Photo"
                />
              </div>
              <div>
                <h2 className="text-3xl text-navy mb-6">About Rigel Broeren</h2>
                <div className="prose prose-lg text-soft-gray">
                  <p className="leading-relaxed mb-4">
                    I&apos;m a Los Angeles native with deep roots in Southern California. After graduating from
                    the <span className="text-navy font-medium">USC Marshall School of Business</span>, I spent
                    years in real estate, learning how to evaluate assets, structure deals, and manage
                    long-term investments.
                  </p>
                  <p className="leading-relaxed mb-4">
                    That experience taught me a fundamental truth: the best investments are the ones you
                    hold onto. I founded Broeren & Co. Holdings to apply that same patient, long-term
                    approach to small business ownership.
                  </p>
                  <p className="leading-relaxed mb-4">
                    I focus exclusively on <span className="text-navy font-medium">Southern California businesses</span> because
                    I believe in being close to the companies I own. I want to know the employees, understand
                    the customers, and be available when I&apos;m needed.
                  </p>
                  <p className="leading-relaxed">
                    My goal is simple: to build a portfolio of great businesses that I&apos;ll own and
                    operate for decades&mdash;not flip in a few years for a quick profit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-8">Our Philosophy</h2>
            <div className="prose prose-lg text-soft-gray">
              <p className="leading-relaxed mb-6">
                At Broeren & Co. Holdings, we take a fundamentally different approach to business ownership.
                We are not looking to grow quickly, flip companies, or extract maximum value in the short term.
              </p>
              <p className="leading-relaxed mb-6">
                Instead, we seek to build a family of businesses that we will own and operate for decades.
                We measure success not in quarterly returns, but in the long-term health of our businesses,
                the satisfaction of their customers, and the well-being of their employees.
              </p>
              <p className="leading-relaxed">
                This patient, long-term mindset allows us to make decisions that truly serve the business&mdash;not
                just the next quarter&apos;s numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Buy Businesses */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-8">Why We Buy Businesses</h2>
            <div className="prose prose-lg text-soft-gray">
              <p className="leading-relaxed mb-6">
                We acquire businesses because we love the work of running them. There is something deeply
                satisfying about helping a good business become even better, about serving customers well,
                and about creating a stable environment for employees to thrive.
              </p>
              <p className="leading-relaxed mb-6">
                We look for businesses that have stood the test of time&mdash;companies with loyal customers,
                skilled employees, and solid reputations. These are the businesses that make up the backbone
                of local economies.
              </p>
              <p className="leading-relaxed">
                When we find such a business, we want to preserve what makes it special while providing the
                resources and support to help it continue to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Transition Ownership */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-8">How We Transition Ownership</h2>
            <div className="prose prose-lg text-soft-gray">
              <p className="leading-relaxed mb-6">
                We understand that selling a business you&apos;ve built is a significant decision. That&apos;s why
                we approach every transition with care, flexibility, and respect for the seller&apos;s wishes.
              </p>
              <p className="leading-relaxed mb-6">
                We work at your pace. Some owners want a quick transition; others prefer to stay involved
                for months or even years. We accommodate both approaches and everything in between.
              </p>
              <p className="leading-relaxed">
                Throughout the process, we prioritize open communication, confidentiality, and a genuine
                effort to understand what matters most to you about your business&apos;s future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8">What We Are Not</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gold-muted">Not Brokers</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We buy businesses for ourselves. We are the end buyer, not an intermediary.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gold-muted">Not Private Equity</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We have no fund with a mandated timeline. We don&apos;t need to sell in 5 years.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gold-muted">Not Consolidators</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We don&apos;t merge companies or resell them. Each business keeps its identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl text-navy mb-6">Interested in Learning More?</h2>
          <p className="text-soft-gray mb-8 max-w-xl mx-auto">
            We&apos;d love to hear from you. Whether you&apos;re considering selling or just want to
            have a conversation, we&apos;re here.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
