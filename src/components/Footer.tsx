import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Broeren & Co. Holdings</h3>
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
                <a href="mailto:info@broerenco.com" className="hover:text-white transition-colors">
                  info@broerenco.com
                </a>
              </li>
              <li>
                <a href="tel:+13105551234" className="hover:text-white transition-colors">
                  (310) 555-1234
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
