import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Business Owners | Broeren & Co. Holdings",
  description: "A personal letter to business owners considering succession. Learn what selling to Broeren & Co. looks like.",
};

export default function ForBusinessOwnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-navy mb-6">For Business Owners</h1>
            <p className="text-xl text-soft-gray leading-relaxed">
              If you&apos;ve spent years building a business, you deserve a buyer who understands what that means.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Letter */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-8">A Personal Letter to Business Owners</h2>
            <div className="bg-warm-white p-8 md:p-12 rounded-lg border border-gray-200">
              <div className="prose prose-lg text-charcoal">
                <p className="leading-relaxed mb-6">
                  If you&apos;re reading this, you&apos;ve probably spent years, maybe decades, building
                  something real. A business that serves customers, employs people, and has a reputation
                  worth protecting.
                </p>
                <p className="leading-relaxed mb-6">
                  Whether you&apos;re thinking about retirement, estate planning, or simply ready to pursue
                  a new chapter — I understand that selling a business you&apos;ve built is a significant decision.
                </p>
                <p className="leading-relaxed mb-6">
                  I started Broeren & Co. Holdings because I saw too many business owners facing a difficult
                  choice: sell to a buyer who will change everything, or work until you simply can&apos;t anymore.
                </p>
                <p className="leading-relaxed mb-6">
                  I believe there should be another option. One where your employees keep their jobs.
                  Where your customers continue to be served well. Where your business name and reputation
                  live on.
                </p>
                <p className="leading-relaxed mb-6">
                  We buy businesses to keep them permanently. We are not flipping companies or rolling
                  them into something unrecognizable. We are building a family of businesses that we will
                  own and operate for the long haul.
                </p>
                <p className="leading-relaxed mb-6">
                  If and when you&apos;re ready to have a conversation, we&apos;ll move at your pace.
                  There&apos;s no pressure, no timeline, and everything is confidential.
                </p>
                <p className="leading-relaxed mb-6">
                  And if you decide to stay involved after a sale, whether as an advisor, a part-time
                  consultant, or in any other capacity, we welcome that.
                </p>
                <p className="leading-relaxed text-navy font-medium">
                  Your life&apos;s work deserves a thoughtful transition. I&apos;d be honored to discuss
                  what that could look like for you.
                </p>
                <p className="mt-8 text-navy">
                  Sincerely,<br />
                  <span className="font-semibold">Rigel Broeren</span><br />
                  <span className="text-soft-gray text-sm">Founder, Broeren & Co. Holdings</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Selling to Us Looks Like */}
      <section className="py-20 bg-warm-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy mb-12 text-center">What Selling to Us Looks Like</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Intro Conversation</h3>
                  <p className="text-soft-gray leading-relaxed">
                    We start with a simple phone call or meeting. No paperwork, no commitment. Just
                    a chance to get to know each other and see if there might be a fit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Learn About Your Goals</h3>
                  <p className="text-soft-gray leading-relaxed">
                    Everyone&apos;s situation is different. We take time to understand what matters most
                    to you — whether it&apos;s valuation, timing, employee retention, staying involved,
                    or creative structures like seller financing. We&apos;re open to structuring deals
                    that work for both sides.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Confidential Evaluation</h3>
                  <p className="text-soft-gray leading-relaxed">
                    If we both want to proceed, we&apos;ll review your business in detail. Everything
                    stays confidential. We move carefully and respect your privacy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Flexible Closing Timing</h3>
                  <p className="text-soft-gray leading-relaxed">
                    There&apos;s no rush. Whether you want to close in weeks or months, we work on
                    your schedule and accommodate your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="text-xl text-navy mb-2">Ongoing Support After Transition</h3>
                  <p className="text-soft-gray leading-relaxed">
                    The relationship doesn&apos;t end at closing. We value the knowledge only you have,
                    and we welcome continued involvement in whatever form works for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg border border-gold/30 text-center">
              <p className="text-charcoal italic">
                &ldquo;Owners may stay involved beyond a sale.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl mb-6">Ready to Have a Conversation?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            All conversations are confidential and non-obligatory. We&apos;re here when you&apos;re ready.
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
