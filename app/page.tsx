import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal"
import Typewriter from "@/components/typewriter";
export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#f3f4f6] px-16 pt-0">

      {/* HEADER */}
      <header className="flex items-center justify-between max-w-[1400px] mx-auto">

        {/* LOGO */}
        <Reveal>
        <Link href="/" className="flex items-center">
  <Image
    src="/LOGO.png"
    alt="The Sun Marketing Alliance"
    width={250}
    height={250}
    className="object-contain cursor-pointer"
  />
</Link>
        </Reveal>

        {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1300px] mx-auto mt-4 gap-16">
        
        {/* IMAGE */}
        <div className="flex justify-center">
          <Reveal>
          <img
            src="/TSMA_NEW.png"
            alt="TSMA Distribution"
            className="w-[650px] md:w-[750px] lg:w-[750px] object-contain"
          />
        </Reveal>
        </div>
        {/* TEXT */}
        <div>

          <Reveal>
          <h1 className="
            font-black
            uppercase
            leading-[0.9]
            tracking-tight
            text-[70px]
            md:text-[100px]
            lg:text-[120px]
          ">
            THE SUN <br />
            MARKETING <br />
            ALLIANCE
          </h1>
          </Reveal>

          <Reveal>
          <p className="text-3xl text-gray-700 mt-4 font-medium">
  <Typewriter />
</p>
          </Reveal>

          <Reveal>
          <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-12 py-4 rounded-full shadow-lg">
            HAPUR - 245101, UTTAR PRADESH
          </button>
          </Reveal>

        </div>

      </section>
{/* BRAND PORTFOLIO */}
<section className="mt-2 pt-12 pb-6 bg-white overflow-hidden 
rounded-[150px] 
max-w-[1500px] mx-auto 
shadow-[0_30px_80px_rgba(0,0,0,0.08)] border-t border-gray-200">


  {/* ROW 1 */}
  <div className="relative overflow-hidden mb-4">
  <div className="flex animate-scroll gap-20 w-max">

    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-20 items-center">

        <img src="/brands/mydreem.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/ertay.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/sr25.png" className="h-28 object-contain transition duration-300 hover:scale-140" />
        <img src="/brands/marko.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/meera.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/richberry.png" className="h-32 object-contain transition duration-300 hover:scale-135" />
        <img src="/brands/saras.png" className="h-32 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/hoppin.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/kaypee.png" className="h-36 object-contain transition duration-300 hover:scale-150" />

      </div>
    ))}

  </div>
</div>

{/* ROW 2 */}
<div className="relative overflow-hidden">
  <div className="flex animate-scroll-reverse gap-20 w-max">

    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-20">

        <img src="/brands/amal.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/madhur.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/ankit.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/panchwati.png" className="h-30 object-contain transition duration-300 hover:scale-155" />
        <img src="/brands/ausome.png" className="h-30 object-contain transition duration-300 hover:scale-105" />
        <img src="/brands/richbite.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/shivani.png" className="h-36 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/trang.png" className="h-42 object-contain transition duration-300 hover:scale-150" />
        <img src="/brands/bunty.png" className="h-36 object-contain transition duration-300 hover:scale-150" />

      </div>
    ))}

  </div>
</div>

</section>
      {/* ABOUT SECTION */}
{/* ABOUT SECTION */}
<section className="max-w-[1400px] mx-auto mt-8 pt-24 px-6">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <Reveal>
      <h2 className="text-5xl font-bold leading-tight">
        Structured Wholesale Distribution Across North India
      </h2>
      </Reveal>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        The Sun Marketing Alliance (TSMA) operates a wholesale-focused FMCG
        distribution network connecting distributors and wholesalers across
        <b> Western Uttar Pradesh, Delhi, and Uttarakhand.</b>
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        With two operational godowns strategically located in Hapur and
        Dhampur (Bijnor) — a 9,500+ sq.ft two‑storey hub in Hapur and a 4,000+ sq.ft facility in Dhampur — we efficiently cover the wide spread area through a structured dispatch system.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Unlike conventional distributors, we operate with a dedicated team of
        <b> 5+ belt-wise sales representatives</b> ensuring direct market coverage,
        strong wholesaler relationships, and consistent order cycles.
      </p>

      {/* READ MORE BUTTON */}
      <div className="mt-10">
        <Link
          href="/about"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Read More
        </Link>
      </div>
    </div>

    {/* RIGHT STATS */}
    <div className="grid grid-cols-2 gap-8">

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h3 className="text-4xl font-black">2</h3>
        <p className="mt-2 text-gray-600">Operational Branches</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h3 className="text-4xl font-black">450+</h3>
        <p className="mt-2 text-gray-600">Dealers</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h3 className="text-4xl font-black">5+</h3>
        <p className="mt-2 text-gray-600">Dedicated Sales Team</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md p-8 text-center">
        <h3 className="text-4xl font-black">3+</h3>
        <p className="mt-2 text-gray-600">States Connected</p>
      </div>
      </Reveal>

    </div>

  </div>

</section>
{/* INFRASTRUCTURE SECTION */}
{/* INFRASTRUCTURE & COVERAGE */}
<section className="max-w-[1400px] mx-auto mt-16 px-6 pt-24 border-t border-gray-200">

  <div className="grid md:grid-cols-[1fr_1.2fr] gap-20 items-start">
    
    {/* RIGHT MAP */}
<div className="flex justify-center -mt-6">
  <img
    src="/map_new.png"
    alt="TSMA Regional Coverage Map"
    className="w-full max-w-[850px]"
  />
</div>
    {/* LEFT CONTENT */}
    <div>
      <Reveal>
      <h2 className="text-6xl font-bold leading-tight">
        Regional Coverage & Market Presence
      </h2>
      </Reveal>
      <div className="mt-6 flex gap-10">

<div className="mt-8 grid grid-cols-3 gap-8 max-w-md">

  <div>
    <h3 className="text-3xl font-black">30+</h3>
    <p className="text-gray-600 text-sm">Districts Covered</p>
  </div>

  <div>
    <h3 className="text-3xl font-black">2</h3>
    <p className="text-gray-600 text-sm">Operational Hubs</p>
  </div>

  <div>
    <h3 className="text-3xl font-black">80+</h3>
    <p className="text-gray-600 text-sm">Active Markets</p>
  </div>

</div>
</div>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        Through our operational godowns in Hapur and Dhampur, we actively
        serve major wholesale markets across Western Uttar Pradesh,
        Delhi, and Uttarakhand.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Our structured distribution network ensures consistent market
        coverage across Bijnor, Moradabad, Bareilly and surrounding
        districts with dedicated belt-wise sales representatives.
      </p>
      <div className="mt-10">
        <Link
  href="/area"
  className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
>
  Read More
</Link>
      </div>
    </div>    
  </div>

</section>
{/* INFRASTRUCTURE & LOGISTICS */}
<section className="max-w-[1400px] mx-auto mt-8 px-6 pt-8 border-t border-gray-200">

  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <Reveal>
      <h2 className="text-5xl font-bold leading-tight">
        Infrastructure & Logistics Strength
      </h2>
      </Reveal>

      <p className="mt-8 text-lg text-gray-700 leading-relaxed">
        Our distribution backbone is powered by company-owned delivery vehicles,
        structured dispatch systems, and strategically located godowns in
        Hapur and Dhampur.
      </p>

      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        With 5+ dedicated company vehicles operating on fixed routes,
        we ensure timely replenishment, reduced stock gaps, and
        consistent wholesale supply across districts.
      </p>

      <div className="mt-8 space-y-3">

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-xl">✓</span>
          <p className="text-gray-800 font-medium">5+ Company-Owned Delivery Vehicles</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-xl">✓</span>
          <p className="text-gray-800 font-medium">2 Operational Godowns</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-xl">✓</span>
          <p className="text-gray-800 font-medium">Structured Route-Based Dispatch</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-xl">✓</span>
          <p className="text-gray-800 font-medium">Reliable Weekly Market Coverage</p>
        </div>

      </div>

    </div>

    {/* RIGHT VISUAL */}
  <div className="flex items-center justify-center ">
  <img
    src="/logistic.png"
    alt="Logistics"
    className="h-150 object-contain drop-shadow-lg"
  />
</div>



  </div>

</section>
<section className="relative bg-[#f5f1ea] py-16 mt-10 rounded-t-[100px] -mt-16 overflow-visible">

  <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center z-10">

    {/* LEFT CONTENT */}
    <div>
      <Reveal>
      <h2 className="text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-6">
  Let’s Grow <br />
  Together
</h2></Reveal>

      <Reveal>
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl mb-10">
  Partner with a structured FMCG distribution network operating across
  Western Uttar Pradesh, Delhi and Uttarakhand with dedicated logistics
  and route-based supply systems.
</p>
      </Reveal>

      <div className="mt-12 space-y-4 text-gray-700 text-base">
        <p>📍 Hapur & Dhampur, Uttar Pradesh</p>
        <p>🚛 5+ Dedicated Delivery Vehicles</p>
        <p>📦 80+ Active Markets Covered Weekly</p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative flex justify-center">

  {/* Chocolate Splash Under Card */}
  <img
  src="/choco-splash.png"
  alt="Chocolate Splash"
  className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 w-[900px] opacity-15 pointer-events-none select-none z-0"
/>

  {/* Form Card */}
  <Reveal>
  <div className="relative bg-white rounded-[35px] p-14 shadow-[0_30px_80px_rgba(0,0,0,0.12)] z-10">

    {/* Soft Glow */}
    <div className="absolute -inset-3 bg-orange-500 opacity-5 blur-3xl rounded-[40px] -z-10"></div>

    <h3 className="text-3xl font-bold text-[#111] mb-10">
      Become a Brand Partner
    </h3>

    <form className="space-y-6">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
      />

      <div className="grid grid-cols-2 gap-6">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition"
        />
      </div>

      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full border border-gray-300 rounded-xl px-6 py-4 outline-none focus:border-orange-500 transition resize-none"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl"
      >
        Submit Inquiry
      </button>

    </form>

  </div>
  </Reveal>



    </div>

  </div>

</section>
</main>
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