import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-[#f3f4f6] px-16 pt-0">
        {/* HEADER */}
        <header className="pt-8 flex items-center justify-between max-w-[1400px] mx-auto">
          <Reveal>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="The Sun Marketing Alliance"
                width={250}
                height={250}
                className="object-contain cursor-pointer"
              />
            </Link>
          </Reveal>

          <Reveal>
            <nav className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-12 py-4 flex gap-12 text-sm font-semibold tracking-wider">
              <Link href="/" className="hover:text-orange-500 transition">HOME</Link>
              <Link href="/about" className="hover:text-orange-500 transition">ABOUT</Link>
              <Link href="/gallery" className="hover:text-orange-500 transition">GALLERY</Link>
              <Link href="/brands" className="hover:text-orange-500 transition">PRODUCTS</Link>
              <Link href="/brands" className="hover:text-orange-500 transition">BRANDS</Link>
              <Link href="/contact" className="hover:text-orange-500 transition">CONTACT</Link>
            </nav>
          </Reveal>
        </header>

        {/* CONTACT CONTENT */}
        <main className="max-w-[1200px] mx-auto py-20">
          <Reveal>
            <h1 className="text-5xl font-extrabold text-center mb-8">
              Contact Us
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed text-center">
              We'd love to hear from you. Whether you have a question about our
              products, services, or anything else, feel free to reach out using any
              of the options below or fill in the form.
            </p>
          </Reveal>

          {/* two column info + map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8 text-lg md:text-xl">

              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Hapur Office</p>
                    <p>43, Prahlad Nagar, near New Mandi, Hapur – 245101</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Dhampur Office</p>
                    <p>Near sugar mill, Dhampur - 246761, Bijnor</p>
                  </div>
                </div>
              </Reveal>

              {/* Phone Section */}
              <Reveal>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">☎</span>
                    <div>
                      <p className="font-semibold">Office IVR</p>
                      <a
                        href="tel:+919403891214"
                        className="text-orange-500 hover:underline"
                      >
                        +91 94038 91214
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-semibold">Direct Contact</p>
                      <a
                        href="tel:+919412219289"
                        className="text-orange-500 hover:underline"
                      >
                        +91 94122 19289
                      </a>
                    </div>
                  </div>

                </div>
              </Reveal>

              {/* Email */}
              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@sunmarketing.in"
                      className="text-orange-500 hover:underline"
                    >
                      info@sunmarketing.in
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Website */}
              <Reveal>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://sunmarketing.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline"
                    >
                      sunmarketing.in
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* WhatsApp */}
              <Reveal>
                <a
                  href="https://wa.me/919412219289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-6 py-3 rounded-full shadow"
                >
                  WhatsApp Us
                </a>
              </Reveal>

            </div>

            {/* Square Map */}
            <div className="relative">
              <div className="w-full aspect-square">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=the%20sun%20marketing%20alliance%20hapur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Reveal>
            <form className="mt-16 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-8 py-3 rounded-full">
                Send Message
              </button>
            </form>
          </Reveal>
        </main>
      </div>

      {/* FOOTER */}
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
        <li className="hover:text-orange-500 transition cursor-pointer">Home</li>
        <li className="hover:text-orange-500 transition cursor-pointer">About</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Brands</li>
        <li className="hover:text-orange-500 transition cursor-pointer">Contact</li>
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
                shadow-[0_15px_40px_rgba(0,0,0,0.5)] mb-6">        <iframe
                  className="w-[250px] h-[250px]"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={10}
                  marginWidth={100}
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