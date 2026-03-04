import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <main className="min-h-screen bg-[#f3f4f6] px-4 sm:px-6 md:px-10 lg:px-16 pt-3 md:pt-4">
        <Header />

        <section className="max-w-[1400px] mx-auto py-12 sm:py-16 md:py-20">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-[#111] mb-4 text-center">
              Brands We Deal In
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              We partner with a wide variety of FMCG manufacturers across categories to bring quality products to our distribution network. Browse the brands below.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 text-center">
              (<span className="font-semibold">Note:</span> This is a subset of our offerings. Visit the store below to see the full list of brands.)
            </p>
          </Reveal>
        </section>

        {/* BRAND GRID */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto pb-14 sm:pb-16 md:pb-20">
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
                  className="bg-white p-3 sm:p-4 shadow-md rounded-lg flex flex-col items-center hover:shadow-lg transition"
                >
                  {file ? (
                    <Image
                      src={`/brands/${file}`}
                      alt={name}
                      width={110}
                      height={110}
                      className="object-contain mb-2"
                    />
                  ) : (
                    <div className="h-[90px] sm:h-[110px] w-full flex items-center justify-center bg-gray-200 rounded mb-2">
                      <span className="text-xs sm:text-sm text-gray-500">{name}</span>
                    </div>
                  )}
                  <span className="text-xs sm:text-sm font-medium text-gray-800 mt-1 text-center line-clamp-2">
                    {name}
                  </span>
                </Container>
              );
            })}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-4 sm:mt-6 text-center text-gray-600 italic text-sm sm:text-base">
            Note: some brands are not shown here – head to the store link below for the complete catalog.
          </p>
        </Reveal>

        {/* STORE CTA AT BOTTOM */}
        <div className="max-w-[1400px] mx-auto py-10 sm:py-12 pt-4 sm:pt-6 text-center">
          <Reveal>
            <div className="inline-flex items-center space-x-3 sm:space-x-4 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              </svg>
              <a href="/store" className="bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-7 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl inline-block text-sm sm:text-base">
                Explore Our Full Store
              </a>
            </div>
          </Reveal>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">Click above to browse thousands of products and place your order instantly.</p>
        </div>
      <Footer />
      </main>
    </>
  );
}