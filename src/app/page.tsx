import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-navy mb-6 leading-tight">
              Broeren & Co. Holdings
            </h1>
            <p className="text-xl text-charcoal mb-4 leading-relaxed">
              A long-term holding company based in Los Angeles that acquires and operates established small businesses.
            </p>
            <p className="text-lg text-soft-gray mb-10">
              We partner with owners seeking succession and continuity for their employees and customers.
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
          <h2 className="text-3xl text-navy text-center mb-16">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3">Permanent Ownership</h3>
              <p className="text-soft-gray leading-relaxed">
                We do not flip or resell companies. When we acquire a business, we intend to own and operate it indefinitely.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3">Operator-Led</h3>
              <p className="text-soft-gray leading-relaxed">
                We personally manage and support our businesses. We are hands-on owners, not distant investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-navy mb-3">Respect for Legacy</h3>
              <p className="text-soft-gray leading-relaxed">
                We retain employees, name, and customer relationships whenever possible. Your legacy matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl text-navy mb-6">Industries We Focus On</h2>
            <h3 className="text-xl text-charcoal mb-8">Repair & Maintenance Businesses</h3>
            <div className="grid grid-cols-2 gap-4 text-soft-gray">
              <div className="bg-white p-4 rounded">Automotive Repair</div>
              <div className="bg-white p-4 rounded">Equipment Repair</div>
              <div className="bg-white p-4 rounded">Specialized Technical Services</div>
              <div className="bg-white p-4 rounded">Local Service Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              <div>
                <h2 className="text-3xl text-navy mb-4">Meet the Founder</h2>
                <p className="text-soft-gray leading-relaxed mb-4">
                  Based in Los Angeles, I started Broeren & Co. Holdings with a simple belief:
                  great small businesses deserve owners who will nurture them for the long term.
                </p>
                <p className="text-soft-gray leading-relaxed">
                  Too many business owners face limited options when it&apos;s time to step back.
                  I created this company to offer a different path&mdash;one that honors the work
                  you&apos;ve put in and protects the people who depend on your business.
                </p>
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
