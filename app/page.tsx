"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Typewriter from "@/components/typewriter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);

const [loading,setLoading]=useState(false);
const [success,setSuccess]=useState(false);

const handleSubmit = async (e:any) => {

e.preventDefault();

setLoading(true);
setSuccess(false);

const formData=new FormData(e.target);

const data={
name:formData.get("name"),
email:formData.get("email"),
phone:formData.get("phone"),
message:formData.get("message"),
type:"Homepage Brand Partner"
};

await fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

setLoading(false);
setSuccess(true);

formRef.current?.reset();

setTimeout(()=>{
setSuccess(false);
},4000);

};
  return (
    <>
      <main className="min-h-screen bg-[#f3f4f6] px-4 sm:px-6 md:px-10 lg:px-16 pt-0 md:pt-4">

        <Header />

        {/* HERO SECTION */}
<section
  className="relative isolate overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center
  min-h-[90vh] md:min-h-0
  max-w-[1400px] mx-auto
  mt-0 md:mt-4 mb-8 sm:mb-12 md:mb-16
  gap-4 md:gap-16
  px-4 sm:px-6 md:px-10
  py-0 sm:py-2 md:py-10
  md:rounded-[32px]
  md:bg-gradient-to-b md:from-white/80 md:to-white/55
  md:backdrop-blur-md md:border md:border-black/5
  md:shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
>

  {/* IMAGE */}
  <div className="order-1 md:order-1 w-full flex justify-center -mb-10 md:mb-0">
  <Reveal>
    <Image
      src="/TSMA_NEW.png"
      alt="TSMA Distribution"
      width={800}
      height={600}
      className="block w-full max-w-[260px] sm:max-w-[340px] md:max-w-[520px] lg:w-[42vw] lg:max-w-[950px] h-auto"
      priority
    />
  </Reveal>
</div>

  {/* TEXT */}
  <div className="order-1 md:order-1 text-center md:text-left flex flex-col justify-center md:justify-start md:pt-1">

    <Reveal>
      <h1
        id="hero-heading"
        className="
          font-black
          uppercase
          leading-[0.9]
          tracking-tight
          text-[30px]
          sm:text-[40px]
          md:text-[72px]
          lg:text-[96px]
          xl:text-[110px]
          mt-4
        "
      >
        THE SUN <br />
        MARKETING <br />
        ALLIANCE
      </h1>
    </Reveal>

    <Reveal>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-3 sm:mt-4 font-medium leading-relaxed">
        <Typewriter />
      </p>
    </Reveal>

    <Reveal>
      <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-6 sm:px-7 md:px-10 py-3 md:py-3.5 rounded-full shadow-lg text-sm sm:text-base"
          aria-label="Contact TSMA office in Hapur, Uttar Pradesh"
        >
          Become a Brand Partner
        </Link>

        <a
          href="https://myswipe.store/hapur/categories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition px-6 sm:px-7 md:px-10 py-3 md:py-3.5 text-sm sm:text-base font-semibold shadow-sm"
        >
          Explore Store
        </a>
      </div>
    </Reveal>

  </div>

</section>

      {/* BRAND PORTFOLIO */}<section
  id="brands"
  className="mt-6 sm:mt-8 pt-6 sm:pt-8 pb-5 sm:pb-7 bg-gradient-to-b from-white to-[#fafafa] overflow-hidden 
rounded-[40px] sm:rounded-[80px] md:rounded-[120px] 
max-w-[1500px] mx-auto 
shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/5"
  aria-label="Brand portfolio"
>
  <div className="px-6 sm:px-10 md:px-12 pb-3 sm:pb-4 flex items-end justify-between gap-6">
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111]">
        Brand Portfolio
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-gray-600">
        Trusted distribution partner for leading FMCG brands.
      </p>
    </div>
    <a
  href="/brands"
  className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition whitespace-nowrap"
>
  Open Store →
</a>
  </div>


{/* ROW 1 */}

<div className="relative overflow-hidden mb-3 sm:mb-4">

<div className="flex animate-scroll gap-10 sm:gap-16 md:gap-20 w-max items-center">

{[...Array(2)].map((_, i) => (

<div key={i} className="flex gap-10 sm:gap-16 md:gap-20 items-center">

<img src="/brands/mydreem.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/ertay.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/sr25.png" className="h-14 sm:h-16 md:h-20 lg:h-28 xl:h-32 object-contain transition duration-300 hover:scale-110" />
<img src="/brands/marko.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/meera.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/richberry.png" className="h-14 sm:h-16 md:h-20 lg:h-28 xl:h-32 object-contain transition duration-300 hover:scale-110" />
<img src="/brands/saras.png" className="h-14 sm:h-16 md:h-20 lg:h-28 xl:h-32 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/hoppin.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/kaypee.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />

</div>

))}

</div>
</div>


{/* ROW 2 */}

<div className="relative overflow-hidden">

<div className="flex animate-scroll-reverse gap-10 sm:gap-16 md:gap-20 w-max items-center">

{[...Array(2)].map((_, i) => (

<div key={i} className="flex gap-10 sm:gap-16 md:gap-20 items-center">

<img src="/brands/amal.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/madhur.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/ankit.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/panchwati.png" className="h-14 sm:h-16 md:h-20 lg:h-28 xl:h-32 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/ausome.png" className="h-12 sm:h-14 md:h-18 lg:h-24 xl:h-28 object-contain transition duration-300 hover:scale-110" />
<img src="/brands/richbite.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/shivani.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/trang.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />
<img src="/brands/bunty.png" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain transition duration-300 hover:scale-125" />

</div>

))}

</div>
</div>

</section>
      {/* ABOUT SECTION */}
<section
  className="max-w-[1400px] mx-auto mt-10 md:mt-12 pt-16 md:pt-24 px-4 sm:px-6"
  aria-labelledby="about-heading"
>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>
      <Reveal>
      <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Structured Wholesale Distribution Across North India
      </h2>
      </Reveal>

      <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-relaxed">
        The Sun Marketing Alliance (TSMA) operates a wholesale-focused FMCG
        distribution network connecting distributors and wholesalers across
        <b> Western Uttar Pradesh, Delhi, and Uttarakhand.</b>
      </p>

      <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        With two operational godowns strategically located in Hapur and
        Dhampur (Bijnor) — a 9,500+ sq.ft two‑storey hub in Hapur and a 4,000+ sq.ft facility in Dhampur — we efficiently cover the wide spread area through a structured dispatch system.
      </p>

      <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Unlike conventional distributors, we operate with a dedicated team of
        <b> 5+ belt-wise sales representatives</b> ensuring direct market coverage,
        strong wholesaler relationships, and consistent order cycles.
      </p>

      {/* READ MORE BUTTON */}
      <div className="mt-8 sm:mt-10">
        <Link
          href="/about"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Read More
        </Link>
      </div>
    </div>

    {/* RIGHT STATS */}
    <div className="grid grid-cols-2 gap-6 sm:gap-8">

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md border border-black/5 p-6 sm:p-8 text-center hover:-translate-y-0.5 hover:shadow-lg transition">
        <h3 className="text-3xl sm:text-4xl font-black">2</h3>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Operational Branches</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md border border-black/5 p-6 sm:p-8 text-center hover:-translate-y-0.5 hover:shadow-lg transition">
        <h3 className="text-3xl sm:text-4xl font-black">450+</h3>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Dealers</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md border border-black/5 p-6 sm:p-8 text-center hover:-translate-y-0.5 hover:shadow-lg transition">
        <h3 className="text-3xl sm:text-4xl font-black">5+</h3>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Dedicated Sales Team</p>
      </div>
      </Reveal>

      <Reveal>
      <div className="bg-white rounded-2xl shadow-md border border-black/5 p-6 sm:p-8 text-center hover:-translate-y-0.5 hover:shadow-lg transition">
        <h3 className="text-3xl sm:text-4xl font-black">3+</h3>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">States Connected</p>
      </div>
      </Reveal>

    </div>

  </div>

</section>

{/* INFRASTRUCTURE & COVERAGE */}
<section
  id="coverage"
  className="max-w-[1400px] mx-auto mt-12 md:mt-16 px-4 sm:px-6 pt-16 md:pt-24 border-t border-gray-200"
  aria-labelledby="coverage-heading"
>

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
      <h2 id="coverage-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Regional Coverage & Market Presence
      </h2>
      </Reveal>
      <div className="mt-5 sm:mt-6 flex gap-6 sm:gap-10">

<div className="mt-6 sm:mt-8 grid grid-cols-3 gap-6 sm:gap-8 max-w-md">

  <div>
    <h3 className="text-2xl sm:text-3xl font-black">30+</h3>
    <p className="text-gray-600 text-xs sm:text-sm">Districts Covered</p>
  </div>

  <div>
    <h3 className="text-2xl sm:text-3xl font-black">2</h3>
    <p className="text-gray-600 text-xs sm:text-sm">Operational Hubs</p>
  </div>

  <div>
    <h3 className="text-2xl sm:text-3xl font-black">80+</h3>
    <p className="text-gray-600 text-xs sm:text-sm">Active Markets</p>
  </div>

</div>
</div>

      <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-relaxed">
        Through our operational godowns in Hapur and Dhampur, we actively
        serve major wholesale markets across Western Uttar Pradesh,
        Delhi, and Uttarakhand.
      </p>

      <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
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
<section
  className="max-w-[1400px] mx-auto mt-10 md:mt-12 px-4 sm:px-6 pt-10 border-t border-gray-200"
  aria-labelledby="logistics-heading"
>

  <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <Reveal>
      <h2 id="logistics-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Infrastructure & Logistics Strength
      </h2>
      </Reveal>

      <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-700 leading-relaxed">
        Our distribution backbone is powered by company-owned delivery vehicles,
        structured dispatch systems, and strategically located godowns in
        Hapur and Dhampur.
      </p>

      <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
        With 5+ dedicated company vehicles operating on fixed routes,
        we ensure timely replenishment, reduced stock gaps, and
        consistent wholesale supply across districts.
      </p>

      <div className="mt-6 sm:mt-8 space-y-3">

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-lg sm:text-xl">✓</span>
          <p className="text-gray-800 text-sm sm:text-base font-medium">5+ Company-Owned Delivery Vehicles</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-lg sm:text-xl">✓</span>
          <p className="text-gray-800 text-sm sm:text-base font-medium">2 Operational Godowns</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-lg sm:text-xl">✓</span>
          <p className="text-gray-800 text-sm sm:text-base font-medium">Structured Route-Based Dispatch</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-lg sm:text-xl">✓</span>
          <p className="text-gray-800 text-sm sm:text-base font-medium">Reliable Weekly Market Coverage</p>
        </div>

      </div>

    </div>

    {/* RIGHT VISUAL */}
  <div className="flex items-center justify-center ">
  <img
    src="/logistic.png"
    alt="Logistics"
    className="max-h-[260px] sm:max-h-[320px] md:max-h-[360px] w-auto object-contain drop-shadow-lg"
  />
</div>



  </div>

</section>
<section
  className="relative bg-[#f5f1ea] py-14 sm:py-16 mt-10 rounded-t-[60px] sm:rounded-t-[100px] -mt-16 overflow-visible"
  aria-labelledby="partner-heading"
>

  <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center z-10">

    {/* LEFT CONTENT */}
    <div>
      <Reveal>
      <h2
        id="partner-heading"
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-5 sm:mb-6"
      >
  Let’s Grow <br />
  Together
</h2></Reveal>

      <Reveal>
      <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-relaxed max-w-xl mb-8 sm:mb-10">
  Partner with a structured FMCG distribution network operating across
  Western Uttar Pradesh, Delhi and Uttarakhand with dedicated logistics
  and route-based supply systems.
</p>
      </Reveal>

      <div className="mt-8 sm:mt-12 space-y-2 sm:space-y-4 text-gray-700 text-sm sm:text-base">
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
  className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] opacity-15 pointer-events-none select-none z-0"
/>

  {/* Form Card */}
  <Reveal>
  <div className="relative bg-white rounded-[26px] sm:rounded-[35px] p-8 sm:p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.12)] z-10">

    {/* Soft Glow */}
    <div className="absolute -inset-3 bg-orange-500 opacity-5 blur-3xl rounded-[40px] -z-10"></div>

    <h3 className="text-2xl sm:text-3xl font-bold text-[#111] mb-6 sm:mb-10">
      Become a Brand Partner
    </h3>

    <form
ref={formRef}
onSubmit={handleSubmit}
className="space-y-4 sm:space-y-6"
>

      <input
name="name"
type="text"
placeholder="Full Name"
        className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-orange-500 transition text-sm sm:text-base"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <input
name="email"
type="email"
placeholder="Email Address"
          className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-orange-500 transition text-sm sm:text-base"
        />

        <input
name="phone"
type="tel"
placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-orange-500 transition text-sm sm:text-base"
        />
      </div>

      <textarea
name="message"
placeholder="Your Message"
        rows={4}
        className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-orange-500 transition resize-none text-sm sm:text-base"
      />

      <button
      
type="submit"
disabled={loading}
className={`w-full text-white py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition duration-300 shadow-lg
${loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 hover:shadow-xl"}
`}
>
{loading ? "Sending..." : "Submit Inquiry"}
</button>
{success && (
<p className="text-green-600 text-sm font-medium">
✅ Inquiry sent successfully!
</p>
)}

    </form>

  </div>
  </Reveal>



    </div>

  </div>

</section>
        <Footer />
      </main>
    </>
  );
}