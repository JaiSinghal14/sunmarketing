"use client";

import Reveal from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gallery() {
  return (
    <>
    <main className="min-h-screen bg-[#f3f4f6] px-4 sm:px-6 md:px-10 lg:px-16 pt-3 md:pt-4">
      <Header />

      <section className="max-w-[1100px] mx-auto py-12 sm:py-16 md:py-20">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] bg-white border border-gray-200 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
          {/* subtle top gradient */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-orange-500/10 to-transparent" />

          <div className="relative p-7 sm:p-10 md:p-14">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                Gallery is under construction
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <Reveal>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tight text-[#111]">
                    Coming Soon.
                  </h1>
                </Reveal>
                <Reveal>
                  <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                    We’re building a photo gallery showcasing our warehouses, team moments,
                    and brand partnerships. Check back soon for updates.
                  </p>
                </Reveal>

                <Reveal>
                  <div className="mt-7">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                      <span>Progress</span>
                      <span className="font-semibold text-gray-800">In progress</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-gray-900 transition"
                      >
                        Contact Us
                      </a>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:border-gray-400 transition"
                      >
                        Back to Home
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* creative illustration */}
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-6 bg-orange-500/10 blur-3xl rounded-[40px]" />
                  <div className="relative rounded-[28px] border border-gray-200 bg-[#f7f7f8] p-8 sm:p-10 overflow-hidden">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/15 blur-2xl" />
                    <div className="absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-black/5 blur-2xl" />

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-white shadow flex items-center justify-center">
                        <span className="text-lg">🛠️</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111]">TSMA Gallery</p>
                        <p className="text-xs text-gray-600">Uploading visuals soon</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-2xl bg-white border border-gray-200 shadow-sm"
                        />
                      ))}
                    </div>

                    <p className="mt-6 text-xs sm:text-sm text-gray-600">
                      Tip: add images into `public/gallery/` and we’ll wire them into a
                      proper gallery layout.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      
    <Footer />
    </main>
    </>
  );
}
