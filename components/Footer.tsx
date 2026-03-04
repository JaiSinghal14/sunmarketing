import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#111111] via-[#0d0d0d] to-[#050505] text-gray-300 pt-24 pb-14 overflow-hidden mt-16">
      {/* Curved Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-[#111111]"
          preserveAspectRatio="none"
        >
          <path d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,69.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L0,0Z"></path>
        </svg>
      </div>

      {/* subtle glow background */}
      <div className="pointer-events-none absolute inset-x-0 top-10 h-40 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative w-full px-6 sm:px-8 lg:px-10 grid gap-12 md:grid-cols-4">
        {/* LEFT COLUMN - LOGO + TEXT */}
        <div>
          <div className="relative inline-block mb-5">
            <div className="absolute inset-0 bg-orange-00 opacity-10 blur-3xl rounded-full" />
            <img
              src="/tsma.png"
              alt="Sun Marketing Alliance"
              className="relative w-40 sm:w-48 drop-shadow-[0_0_20px_rgba(255,115,0,0.15)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 mb-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Since 2003
          </div>

          <div className="w-14 h-[3px] bg-orange-500 mb-4 rounded-full" />

          <p className="text-sm sm:text-base leading-relaxed text-gray-400">
            Wholesale-focused FMCG distribution partner for Western Uttar Pradesh,
            Delhi NCR and Uttarakhand, built on reliable logistics and deep market
            coverage.
          </p>

          <div className="mt-4 space-y-1 text-xs sm:text-sm text-gray-400">
            <p>2 operational branches • 450+ dealers • 80+ active markets</p>
            <p>Structured route-based dispatch with company-owned vehicles.</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide">
            Quick Links
          </h4>
          <div className="w-10 h-[2px] bg-orange-500 mb-5 rounded-full" />

          <ul className="space-y-2 text-base">
            <li>
              <Link
                href="/"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Products &amp; Brands
              </Link>
            </li>
            <li>
              <Link
                href="/#coverage"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://myswipe.store/hapur/categories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                Online Store
              </a>
            </li>
          </ul>
        </div>

        {/* NETWORK SNAPSHOT */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Network Snapshot
          </h4>
          <div className="w-10 h-[2px] bg-orange-500 mb-5 rounded-full" />

          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
            <li>• 2 branches – Hapur &amp; Dhampur (Bijnor)</li>
            <li>• 30+ districts across Western Uttar Pradesh</li>
            <li>• Delhi NCR, Kumaun &amp; Garhwal regions</li>
            <li>• 5+ belt-wise sales representatives</li>
          </ul>
        </div>

        {/* MAP + CONTACT */}
        <div>
          <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 tracking-wide">
            Our Location
          </h4>
          <div className="w-10 h-[2px] bg-orange-500 mb-5 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] mb-5">
            <iframe
              className="w-full h-[200px] sm:h-[220px]"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=the%20sun%20marketing%20alliance%20hapur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm sm:text-base text-gray-300 font-semibold">
              Hapur Office
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              43, Prahlad Nagar, near New Mandi, Hapur – 245101, Uttar Pradesh
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-300 font-semibold">
              Dhampur Office
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Near sugar mill, Dhampur – 246761, Bijnor, Uttar Pradesh
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-300">
              📞 Office IVR:{" "}
              <a href="tel:+919403891214" className="text-orange-300 hover:text-orange-200">
                +91 94038 91214
              </a>
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              📞 Direct:{" "}
              <a href="tel:+919412219289" className="text-orange-300 hover:text-orange-200">
                +91 94122 19289
              </a>
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              ✉{" "}
              <a
                href="mailto:info@sunmarketing.in"
                className="text-orange-300 hover:text-orange-200"
              >
                info@sunmarketing.in
              </a>
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              🌐{" "}
              <a
                href="https://sunmarketing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-orange-200"
              >
                sunmarketing.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-[#1f1f1f] mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm tracking-wide">
        © 2026{" "}
        <span className="text-gray-400">Sun Marketing Alliance</span>. All
        rights reserved.
      </div>
    </footer>
  );
}

