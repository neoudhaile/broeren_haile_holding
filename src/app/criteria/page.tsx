import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acquisition Criteria | Broeren & Co. Holdings",
  description: "We acquire established, cash-flowing businesses with durable competitive positions and management teams already in place.",
};

export default function CriteriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-navy mb-6">Acquisition Criteria</h1>
            <p className="text-xl text-soft-gray leading-relaxed">
              We acquire established, cash-flowing businesses with durable competitive positions
              and management teams already in place.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-10">What We Look For</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Free Cash Flow: $1M &ndash; $3M</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We focus on businesses with proven, durable cash flows and a track record of consistent performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">10+ Years in Operation</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We value businesses that have stood the test of time. A decade or more of operations
                    demonstrates stability and a proven business model.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Recurring &amp; Non-Discretionary Revenue</h3>
                  <p className="text-soft-gray leading-relaxed">
                    Recurring, contractual, or non-discretionary revenue preferred. B2B client bases with
                    low customer concentration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Management in Place</h3>
                  <p className="text-soft-gray leading-relaxed">
                    A team capable of running day-to-day operations without owner involvement — or a clear
                    path to building one during transition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Durable Competitive Position</h3>
                  <p className="text-soft-gray leading-relaxed">
                    Durable advantage through relationships, reputation, regulation, geography, certifications,
                    or switching costs. We look for businesses that are hard to replicate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Focus On */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-6">Industries We Focus On</h2>
            <p className="text-soft-gray leading-relaxed mb-8">
              We are industry-agnostic in principle but have particular focus in:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Industrial and specialty contracting</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Environmental and waste services</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Specialty manufacturing and fabrication</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Commercial services</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Infrastructure and civil construction</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">Insurance distribution and specialty services</span>
              </div>
            </div>
            <p className="text-soft-gray mt-6 leading-relaxed">
              We are nationwide. Geography is not a constraint.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Not Acquire */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-10">What We Do Not Acquire</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Franchises</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Licensed care businesses (residential care, home health, childcare)</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Tobacco, vape, or cannabis businesses</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Commodity businesses with no pricing power</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Startups or early-stage ventures</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Distressed businesses requiring significant restructuring</span>
                </div>
              </div>
              <div className="p-5 bg-warm-white rounded-lg border border-gray-200 md:col-span-2">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-charcoal">Asset-intensive businesses such as real estate or transportation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sellers Can Expect */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-10">What Sellers Can Expect From Us</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-navy mb-2 font-medium">Permanence</h3>
                <p className="text-soft-gray leading-relaxed">
                  We do not sell businesses. When we acquire your company, we intend to own it indefinitely.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-navy mb-2 font-medium">No Disruption</h3>
                <p className="text-soft-gray leading-relaxed">
                  Employees keep their jobs. Customers keep their relationships. The business keeps its identity.
                  On a case-by-case basis, we assist management with financial systems and relationships,
                  marketing and lead generation, and technology implementation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-navy mb-2 font-medium">Conservative Capital Structure</h3>
                <p className="text-soft-gray leading-relaxed">
                  We do not burden businesses with too much debt that threatens their employees or legacy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-navy mb-2 font-medium">Flexibility</h3>
                <p className="text-soft-gray leading-relaxed">
                  We work on your timeline. Whether you want to close in 60 days or 12 months, we adapt to your situation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg text-navy mb-2 font-medium">Confidentiality</h3>
                <p className="text-soft-gray leading-relaxed">
                  Every conversation is private and non-obligatory from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl mb-6">Does Your Business Fit?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Even if you&apos;re not sure, reach out. There&apos;s no obligation and everything is confidential.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-muted text-navy font-medium py-3 px-8 rounded transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
