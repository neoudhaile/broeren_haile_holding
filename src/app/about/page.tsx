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
                    After graduating from the <span className="text-navy font-medium">USC Marshall School of Business</span>, I founded
                    Broeren & Co. Holdings with a simple conviction: the best businesses are the ones worth holding forever.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Broeren & Co. acquires businesses nationwide, with a focus on durable cash flows, management depth,
                    and competitive positions that compound over time.
                  </p>
                  <p className="leading-relaxed">
                    My goal is simple: to build a permanent portfolio of exceptional businesses&mdash;not flip
                    them in a few years for a quick profit.
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
                At Broeren & Co. Holdings, we are building a permanent portfolio of exceptional businesses, not
                a fund with an exit date or a PE firm on a 5-year clock.
              </p>
              <p className="leading-relaxed mb-6">
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
                We acquire businesses because we believe the best returns come from patient capital allocation
                and management stewardship. When you pair durable cash flows with competent operators and a
                permanent time horizon, the results compound in ways that short-term ownership never achieves.
              </p>
              <p className="leading-relaxed mb-6">
                We look for businesses that have stood the test of time&mdash;companies with loyal customers,
                skilled employees, and solid reputations. These are the businesses that make up the backbone
                of their industries.
              </p>
              <p className="leading-relaxed">
                When we find such a business, we preserve what makes it special&mdash;the people, the name,
                the reputation&mdash;while providing the capital and strategic support to help it continue
                compounding for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-4">Investment Types</h2>
            <p className="text-soft-gray leading-relaxed mb-10">
              We structure every acquisition around the seller&apos;s situation. There is no single deal
              type — we adapt to what works for you.
            </p>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl text-navy mb-3 font-medium">Legacy Buyout</h3>
                <p className="text-soft-gray leading-relaxed">
                  The owner is ready for a clean exit. A capable management team already runs the business.
                  Transition period of 90 days to one year. This is our most common structure.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl text-navy mb-3 font-medium">Managed Transition</h3>
                <p className="text-soft-gray leading-relaxed">
                  The owner is operationally involved but a capable second-in-command exists or can be developed.
                  Owner reduces involvement gradually over one to three years while we build the management
                  layer beneath them.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl text-navy mb-3 font-medium">Partnership Buyout</h3>
                <p className="text-soft-gray leading-relaxed">
                  The owner wants to retain meaningful equity and remain operationally active for two to five years.
                  We acquire a majority position, the owner continues as operator, and we provide capital, strategic
                  support, and long-term permanence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What a Great Business Looks Like */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-8">What a Great Business Looks Like to Us</h2>
            <div className="prose prose-lg text-soft-gray">
              <p className="leading-relaxed mb-6">
                Exceptional businesses share three traits: a management team that runs the operation without
                the owner, consistent and durable cash flow, and a competitive position that compounds over time.
              </p>
              <p className="leading-relaxed mb-6">
                Whether owners are selling for retirement, estate planning, or a new chapter entirely, they
                share one thing: the desire to see their business continue as it always has — same name,
                same people, same reputation.
              </p>
              <p className="leading-relaxed mb-6">
                That is precisely what we offer. We do not take over management. We do not merge, rebrand,
                or restructure. We rely on the people already inside the business to keep doing what made
                it worth acquiring in the first place.
              </p>
              <p className="leading-relaxed">
                Good businesses — ones still building toward exceptional — are more common and equally welcome.
                When we acquire a good business, we work alongside its team to strengthen what&apos;s already
                working: capital allocation, operational systems, and the management depth that creates
                long-term durability.
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
