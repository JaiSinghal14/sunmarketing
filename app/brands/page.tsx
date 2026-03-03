import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import fs from "fs";
import path from "path";

export default function Brands() {
  // read all logo files from public/brands at build time (this component is a server component)
  const brandsDir = path.join(process.cwd(), "public", "brands");
  let files: string[] = [];
  try {
    files = fs.readdirSync(brandsDir);
  } catch (e) {
    console.error("Failed to read brands directory", e);
  }

  // custom URL map for brands that don't follow filename conventions
  // add entries like 'myimg.png': '/brands/some-custom-path'
  const linkMap: Record<string,string> = {
    'richberry.png': 'https://myswipe.store/hapur/category/RICH%20BERRY%20GWALIOR-1128042',
    'sr25.png': 'https://myswipe.store/hapur/category/SR%2025-54',
    'mydreem.png': 'https://myswipe.store/hapur/category/MY%20DREAM-41',
    'marko.png': 'https://myswipe.store/hapur/category/MARKO-38',
    'ertay.png': 'https://myswipe.store/hapur/category/MAKKAD%20JI-34',
    'kaypee.png': 'https://myswipe.store/hapur/category/KAYPEE-33',
    'richbite.png': 'https://myswipe.store/hapur/category/SUPREME-1128037',
    'bunty.png': 'https://myswipe.store/hapur/category/BUNTY%20TOFFEE-1128032',
    'madhur.png': 'https://myswipe.store/hapur/category/MADHUR-36',
    'ausome.png': 'https://myswipe.store/hapur/category/KMP%20HYD-32',
    'hoppin.png': 'https://myswipe.store/hapur/category/HOPINS-26',
    'ankit.png': 'https://myswipe.store/hapur/category/DUKES-20',
    'amal.png': 'https://myswipe.store/hapur/category/AMAL%20BISCUIT-10',
    'meera.png': 'https://myswipe.store/hapur/category/MEERA-7',
    'saras.png': 'https://myswipe.store/hapur/category/SARAS%20PAN-50',
    'shivani.png': 'https://myswipe.store/hapur/category/SHIVANI-49',
    'panchwati.png': 'https://myswipe.store/hapur/category/PANCHWATI-44',
  };

  // slug helper must be declared before use
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/\.[^/.]+$/, "") // remove extension
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

  // include brands present in linkMap but missing images
  const existingSet = new Set(files.map(f => f.toLowerCase()));
  const extras = Object.keys(linkMap).filter(k => !existingSet.has(k));

  const displayItems = [
    ...files,
    ...extras, // some may not have actual image files
  ];

  const brandItems = displayItems.map(f => {
    const lower = f.toLowerCase();
    const hasImage = files.some(x => x.toLowerCase() === lower);
    const name = f.replace(/\.[^/.]+$/, "");
    const url = linkMap[lower] || `/brands/${encodeURIComponent(slugify(name))}`;
    return { file: hasImage ? f : null, name, url };
  });

  return (
    <>
      <div className="min-h-screen bg-[#f3f4f6] px-16 pt-0">
        {/* HEADER */}
        <header className="pt-8 flex items-center justify-between max-w-[1400px] mx-auto">
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

        <section className="max-w-[1400px] mx-auto py-20">
          <Reveal>
            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-4 text-center">
              Brands We Deal In
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              We partner with a wide variety of FMCG manufacturers across categories to bring quality products to our distribution network. Browse the brands below.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-lg text-gray-600 text-center">
              (<span className="font-semibold">Note:</span> This is a subset of our offerings. Visit the store below to see the full list of brands.)
            </p>
          </Reveal>
        </section>

        {/* BRAND GRID */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto pb-20">
            {brandItems.map(({file, name, url}) => {
              const isExternal = url.startsWith('http');
              const Container: any = isExternal ? 'a' : Link;

              return (
                <Container
                  key={name}
                  href={url}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center hover:shadow-lg transition"
                >
                  {file ? (
                    <Image
                      src={`/brands/${file}`}
                      alt={name}
                      width={120}
                      height={120}
                      className="object-contain mb-2"
                    />
                  ) : (
                    <div className="h-[120px] w-full flex items-center justify-center bg-gray-200 rounded mb-2">
                      <span className="text-gray-500">{name}</span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-800 mt-1">
                    {name}
                  </span>
                </Container>
              );
            })}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-center text-gray-600 italic">
            Note: some brands are not shown here – head to the store link below for the complete catalog.
          </p>
        </Reveal>

        {/* STORE CTA AT BOTTOM */}
        <div className="max-w-[1400px] mx-auto py-12 pt-6 text-center">
          <Reveal>
            <div className="inline-flex items-center space-x-4 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              <a href="/store" className="bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-10 py-4 rounded-full shadow-xl inline-block">
                Explore Our Full Store
              </a>
            </div>
          </Reveal>
          <p className="mt-4 text-lg text-gray-600">Click above to browse thousands of products and place your order instantly.</p>
        </div>
      </div>

      {/* FOOTER (same as other pages) */}
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