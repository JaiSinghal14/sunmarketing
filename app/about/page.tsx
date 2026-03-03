"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <>
    <div className="min-h-screen bg-[#f3f4f6] px-16 pt-0">
      {/* HEADER */}
      <header className="pt-0 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/LOGO.png"
            alt="The Sun Marketing Alliance"
            className="h-40 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
          />
        </Link>

        {/* NAVBAR */}
        <nav className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-12 py-4 flex gap-12 text-sm font-semibold tracking-wider">
          <Link href="/" className="hover:text-orange-500 transition">HOME</Link>
          <Link href="/about" className="hover:text-orange-500 transition">ABOUT</Link>
          <Link href="/gallery" className="hover:text-orange-500 transition">GALLERY</Link>
          <Link href="/brands" className="hover:text-orange-500 transition">PRODUCTS</Link>
          <Link href="/brands" className="hover:text-orange-500 transition">BRANDS</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">CONTACT</Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <Reveal>
              <h1 className="text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-8">
                About The Sun Marketing Alliance
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                The Sun Marketing Alliance is a structured FMCG wholesale distribution network operating across North India. Founded in 2003 with a single brand and one person, we’ve grown into a team of 20+ serving 450+ dealers.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our journey includes building a main godown in 2020 and opening a second facility in Dhampur in 2024. With two strategically positioned warehouses — a 9,500+ sq.ft, 2-storey modern hub in Hapur and a 4,000+ sq.ft warehouse in Dhampur (Bijnor) — we maintain fast replenishment and high-volume stock movement to all regions. Today we cover Western Uttar Pradesh, Delhi, and Uttarakhand with dedicated logistics and belt-wise sales coverage.
              </p>
            </Reveal>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex justify-center">
            <Reveal>
              <img
                src="/warehouse_hapur.png"
                alt="TSMA Warehouse in Hapur"
                className="w-full max-w-[600px] object-contain rounded-3xl shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      

      {/* MISSION, VISION, VALUES SECTION */}
      <section className="bg-white py-20 rounded-[100px] max-w-[1400px] mx-auto my-20 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* MISSION */}
          <Reveal>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide structured, reliable FMCG distribution services that strengthen wholesale networks and ensure consistent market supply across North India.
              </p>
            </div>
          </Reveal>

          {/* VISION */}
          <Reveal>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To establish TSMA as the most trusted wholesale distribution partner across North India, known for operational excellence and market expertise.
              </p>
            </div>
          </Reveal>

          {/* VALUES */}
          <Reveal>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-4">Our Values</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reliability, Transparency, Consistency, and Customer-Centric Service form the foundation of everything we do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPERATIONS & STRENGTHS */}
      <section className="max-w-[1400px] mx-auto py-20">
        <Reveal>
          <h2 className="text-6xl md:text-7xl font-bold mb-12 text-[#111] text-center">
            Operations & Strengths
          </h2>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-6">
          <Reveal>
            <p className="text-xl text-gray-700 leading-relaxed">
              We operate a fully structured distribution system designed for speed, consistency, and daily market execution. Our strong manpower and logistics backbone ensures fast movement and reliable service across all territories — a well-equipped setup built for high-volume daily operations.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">👥</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">20+ trained staff</h4>
                  <p className="text-sm text-gray-600">Across sales, operations & logistics</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">🚚</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">7–8 company vehicles</h4>
                  <p className="text-sm text-gray-600">Enabling daily, timely deliveries</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">🧭</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">Belt-wise market staff</h4>
                  <p className="text-sm text-gray-600">Dedicated staff covering all territories regularly</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">🧾</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">Accounts & billing</h4>
                  <p className="text-sm text-gray-600">Separate systems ensuring transparency and accuracy</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">💵</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">In-house cashier</h4>
                  <p className="text-sm text-gray-600">Smooth financial operations</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">☎️</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">Tele-calling team</h4>
                  <p className="text-sm text-gray-600">Order follow-ups & retailer coordination</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">🔁</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">Sales → Warehouse → Delivery</h4>
                  <p className="text-sm text-gray-600">Strong coordination across the supply chain</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-6 min-h-[140px] items-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl">🤝</div>
                <div>
                  <h4 className="text-xl font-semibold text-[#111] mb-1">Specialised sales team</h4>
                  <p className="text-sm text-gray-600">A 5-member team for high-volume belts + dedicated belt-wise salesmen</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-lg text-gray-700 leading-relaxed">
              This structure gives us unmatched market penetration and ensures faster brand growth across the entire territory. We are the only distributor in the region operating with a belt-wise dedicated salesman structure, enabling deep customer presence and high-frequency touchpoints in both rural and urban markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEY METRICS SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 rounded-[100px] max-w-[1400px] mx-auto my-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <Reveal>
            <div>
              <h3 className="text-6xl font-black text-white mb-2">30+</h3>
              <p className="text-lg text-orange-100 font-semibold">Districts Covered</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-6xl font-black text-white mb-2">450+</h3>
              <p className="text-lg text-orange-100 font-semibold">Active Dealers</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-6xl font-black text-white mb-2">5+</h3>
              <p className="text-lg text-orange-100 font-semibold">Delivery Vehicles</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-6xl font-black text-white mb-2">80+</h3>
              <p className="text-lg text-orange-100 font-semibold">Active Markets</p>
            </div>
          </Reveal>
        </div>
      </section>
      

      

      {/* FOUNDER SECTION */}
      <section className="max-w-[1400px] mx-auto px-16 py-20">
        <Reveal>
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-16 text-[#111]">
            Meet Our Founder
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <Reveal>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/amitsinghal.png"
                  alt="Amit Singhal — Founder"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
          </Reveal>

          {/* CONTENT */}
          <div>
            <Reveal>
              <h3 className="text-5xl font-bold text-[#111] mb-2">
                [Amit Kumar Singhal]
              </h3>
            </Reveal>

            <Reveal>
              <p className="text-2xl text-orange-500 font-semibold mb-8">
                Founder & Managing Director
              </p>
            </Reveal>

            <Reveal>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                With over a decade of experience in FMCG distribution, our founder established The Sun Marketing Alliance with a vision to create a structured, reliable distribution network across North India.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Through dedication to operational excellence, strong relationships, and systematic market coverage, TSMA has grown to serve 450+ dealers across 30+ districts while maintaining the highest standards of service quality.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-xl text-gray-700 leading-relaxed">
                His commitment to innovation and growth continues to drive TSMA forward as a trusted partner in wholesale FMCG distribution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
    


      <footer className="relative bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-gray-300 pt-36 pb-16 overflow-hidden">

        {/* Curved Top Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-28 fill-[#111111]"
            preserveAspectRatio="none"
          >
            <path d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,69.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-16">

          {/* LEFT COLUMN - LOGO */}
          <div>
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-orange-00 opacity-10 blur-3xl rounded-full"></div>
              <img
                src="/tsma.png"
                alt="Sun Marketing Alliance"
                className="relative w-52 drop-shadow-[0_0_20px_rgba(255,115,0,0.15)]"
              />
            </div>

            <div className="w-16 h-[3px] bg-orange-500 mb-6 rounded-full"></div>

            <p className="text-lg leading-[1.5] text-gray-400">
              Structured FMCG distribution network operating across Western Uttar
              Pradesh, Delhi and Uttarakhand with dedicated logistics and route-based
              supply systems.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <span>f</span>
              </div>
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <span>in</span>
              </div>
              <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
                <span>ig</span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="w-12 h-[2px] bg-orange-500 mb-6 rounded-full"></div>

            <ul className="space-y-3 text-lg">
              <li><Link href="/" className="hover:text-orange-500 transition cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition cursor-pointer">About</Link></li>
              <li><Link href="/brands" className="hover:text-orange-500 transition cursor-pointer">Brands</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* COVERAGE */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Coverage
            </h4>
            <div className="w-12 h-[2px] bg-orange-500 mb-6 rounded-full"></div>

            <ul className="space-y-3 text-lg text-gray-400">
              <li>Western Uttar Pradesh</li>
              <li>Delhi NCR</li>
              <li>Kumaun Region</li>
              <li>Garhwal Region</li>
            </ul>
          </div>

          {/* MAP + CONTACT */}
          <div>
            <h4 className="text-2xl font-semibold text-white mb-4">
              Our Location
            </h4>
            <div className="w-12 h-[2px] bg-orange-500 mb-6 rounded-full"></div>

            {/* Glass Map Card */}
              <div className="relative bg-white/5 border border-white/10 
                      backdrop-blur-md rounded-2xl overflow-hidden 
                      shadow-[0_15px_40px_rgba(0,0,0,0.5)] mb-6">
                <iframe
                  className="w-full h-[200px]"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=the%20sun%20marketing%20alliance%20hapur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>

            <p className="text-lg text-gray-400">📍 Hapur, Uttar Pradesh</p>
            <p className="text-lg text-gray-400">📞 +91 XXXXX XXXXX</p>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#1f1f1f] mt-20 pt-8 text-center text-gray-500 text-sm tracking-wide">
          © 2026 <span className="text-gray-400">Sun Marketing Alliance</span>. All rights reserved.
        </div>

      </footer>
      </>
  );
}