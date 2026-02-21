import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acquisition Criteria | Broeren & Co. Holdings",
  description: "Learn about the types of businesses we look for. Revenue $1M-$10M, 5-30 employees, established customer base.",
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
              We focus on established, profitable businesses with strong fundamentals
              and room to grow under permanent ownership.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-10">What We Typically Look For</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-warm-white rounded-lg">
                <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">$1M &ndash; $10M in Revenue</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We focus on businesses with proven revenue streams and a track record of consistent performance.
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
                  <h3 className="text-xl text-navy mb-2">5 &ndash; 30 Employees</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We value businesses with dedicated teams. The people behind the business are as important
                    as the business itself.
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
                  <h3 className="text-xl text-navy mb-2">Established Customer Base</h3>
                  <p className="text-soft-gray leading-relaxed">
                    Businesses with loyal, recurring customers and a solid reputation in their community
                    are exactly what we&apos;re looking for.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Repair & Maintenance Focus</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We have particular expertise in automotive repair, equipment maintenance,
                    technical services, and local service companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're NOT Looking For */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-10">What We Are NOT Looking For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg text-navy mb-2">Startups</h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  We look for businesses with established operations and proven track records,
                  not early-stage ventures.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg text-navy mb-2">Turnarounds</h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  We prefer healthy businesses that need succession, not distressed situations
                  requiring significant restructuring.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg text-navy mb-2">Speculative Ventures</h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  We focus on real businesses with real customers, not concepts or
                  high-risk speculative opportunities.
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
            Even if you&apos;re not sure, we&apos;d love to have a conversation. There&apos;s no obligation,
            and everything is confidential.
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
