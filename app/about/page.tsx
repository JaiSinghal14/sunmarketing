"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
    <main className="min-h-screen bg-[#f3f4f6] px-4 sm:px-6 md:px-10 lg:px-16 pt-3 md:pt-4">
      <Header />

      {/* HERO SECTION */}
      <section className="max-w-[1400px] mx-auto py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <Reveal>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-6 sm:mb-8">
                About The Sun Marketing Alliance
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                The Sun Marketing Alliance is a structured FMCG wholesale distribution network operating across North India. Founded in 2003 with a single brand and one person, we’ve grown into a team of 20+ serving 450+ dealers.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
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
                className="w-full max-w-[520px] sm:max-w-[600px] object-contain rounded-3xl shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      

      {/* MISSION, VISION, VALUES SECTION */}
      <section className="bg-white py-14 sm:py-16 md:py-20 rounded-[60px] sm:rounded-[100px] max-w-[1400px] mx-auto my-12 sm:my-16 md:my-20 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {/* MISSION */}
          <Reveal>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To provide structured, reliable FMCG distribution services that strengthen wholesale networks and ensure consistent market supply across North India.
              </p>
            </div>
          </Reveal>

          {/* VISION */}
          <Reveal>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-4xl">🌟</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To establish TSMA as the most trusted wholesale distribution partner across North India, known for operational excellence and market expertise.
              </p>
            </div>
          </Reveal>

          {/* VALUES */}
          <Reveal>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-2xl sm:text-4xl">💎</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mb-3 sm:mb-4">Our Values</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Reliability, Transparency, Consistency, and Customer-Centric Service form the foundation of everything we do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPERATIONS & STRENGTHS */}
      <section className="max-w-[1400px] mx-auto py-14 sm:py-16 md:py-20">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 text-[#111] text-center">
            Operations & Strengths
          </h2>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6">
          <Reveal>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We operate a fully structured distribution system designed for speed, consistency, and daily market execution. Our strong manpower and logistics backbone ensures fast movement and reliable service across all territories — a well-equipped setup built for high-volume daily operations.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">
              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">👥</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">20+ trained staff</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Across sales, operations & logistics</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">🚚</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">7–8 company vehicles</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Enabling daily, timely deliveries</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">🧭</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">Belt-wise market staff</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Dedicated staff covering all territories regularly</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">🧾</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">Accounts & billing</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Separate systems ensuring transparency and accuracy</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">💵</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">In-house cashier</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Smooth financial operations</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">☎️</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">Tele-calling team</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Order follow-ups & retailer coordination</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">🔁</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">Sales → Warehouse → Delivery</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">Strong coordination across the supply chain</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] items-start">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center text-lg sm:text-xl">🤝</div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#111] mb-1 leading-snug">Specialised sales team</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">A 5-member team for high-volume belts + dedicated belt-wise salesmen</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              This structure gives us unmatched market penetration and ensures faster brand growth across the entire territory. We are the only distributor in the region operating with a belt-wise dedicated salesman structure, enabling deep customer presence and high-frequency touchpoints in both rural and urban markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* KEY METRICS SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-14 sm:py-16 md:py-20 rounded-[60px] sm:rounded-[100px] max-w-[1400px] mx-auto my-12 sm:my-16 md:my-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
          <Reveal>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">30+</h3>
              <p className="text-sm sm:text-base md:text-lg text-orange-100 font-semibold">Districts Covered</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">450+</h3>
              <p className="text-sm sm:text-base md:text-lg text-orange-100 font-semibold">Active Dealers</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">5+</h3>
              <p className="text-sm sm:text-base md:text-lg text-orange-100 font-semibold">Delivery Vehicles</p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 sm:mb-2">80+</h3>
              <p className="text-sm sm:text-base md:text-lg text-orange-100 font-semibold">Active Markets</p>
            </div>
          </Reveal>
        </div>
      </section>
      

      

      {/* FOUNDER SECTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-20">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 sm:mb-14 md:mb-16 text-[#111]">
            Meet Our Founder
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* IMAGE */}
          <Reveal>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/amitsinghal.png"
                  alt="Amit Singhal — Founder"
                  width={280}
                  height={280}
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
          </Reveal>

          {/* CONTENT */}
          <div>
            <Reveal>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111] mb-2">
                [Amit Kumar Singhal]
              </h3>
            </Reveal>

            <Reveal>
              <p className="text-lg sm:text-xl md:text-2xl text-orange-500 font-semibold mb-6 sm:mb-8">
                Founder & Managing Director
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                With over a decade of experience in FMCG distribution, our founder established The Sun Marketing Alliance with a vision to create a structured, reliable distribution network across North India.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Through dedication to operational excellence, strong relationships, and systematic market coverage, TSMA has grown to serve 450+ dealers across 30+ districts while maintaining the highest standards of service quality.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                His commitment to innovation and growth continues to drive TSMA forward as a trusted partner in wholesale FMCG distribution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </main>
      </>
  );
}