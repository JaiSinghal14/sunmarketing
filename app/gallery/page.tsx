"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <>
    <div className="min-h-screen bg-[#f3f4f6] px-16 pt-0">
      {/* HEADER */}
      <header className="pt-8 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
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

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto py-20">
        <Reveal>
          <h1 className="text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-8 text-center">
            Our Gallery
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-2xl text-gray-700 leading-relaxed text-center">
            A collection of photos from our facilities, team moments, and brand partnerships. Browse to get a visual feel of TSMA in action.
          </p>
        </Reveal>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[1400px] mx-auto py-20">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* placeholders; replace with real paths */}
            <img src="/warehouse_hapur.png" alt="TSMA Warehouse in Hapur" className="w-full h-48 object-cover rounded-xl" />
            <img src="/gallery/godown1.jpg" alt="Our godown in Hapur" className="w-full h-48 object-cover rounded-xl" />
            <img src="/gallery/godown2.jpg" alt="Dhampur facility" className="w-full h-48 object-cover rounded-xl" />
            <img src="/gallery/founder_brand1.jpg" alt="Founder with brand owner" className="w-full h-48 object-cover rounded-xl" />
            <img src="/gallery/founder_brand2.jpg" alt="Founder with partner" className="w-full h-48 object-cover rounded-xl" />
            {/* additional slots can be added here */}
          </div>
        </Reveal>
      </section>

      
    </div>
    {/* FOOTER (copied from about page) */}
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
              <li><Link href="/gallery" className="hover:text-orange-500 transition cursor-pointer">Gallery</Link></li>
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
