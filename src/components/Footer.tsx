import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/images/logo.png"
              alt="Broeren & Co."
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              A long-term holding company based in Los Angeles,
              dedicated to acquiring and operating established small businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold-muted">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/for-business-owners" className="text-gray-300 hover:text-white text-sm transition-colors">
                  For Business Owners
                </Link>
              </li>
              <li>
                <Link href="/criteria" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Acquisition Criteria
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold-muted">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Los Angeles, California</li>
              <li>
                <a href="mailto:rigel@broerenandco.com" className="hover:text-white transition-colors">
                  rigel@broerenandco.com
                </a>
              </li>
              <li>
                <a href="tel:+12132615670" className="hover:text-white transition-colors">
                  (213) 261-5670
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Broeren & Co. Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
