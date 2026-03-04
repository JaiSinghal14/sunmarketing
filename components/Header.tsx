"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/brands", label: "PRODUCTS" },
  { href: "https://myswipe.store/hapur/categories", label: "STORE" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between max-w-[1400px] mx-auto py-3 md:py-4">
      <Reveal>
        <Link
          href="/"
          className="flex items-center"
          aria-label="Go to TSMA home"
        >
          <Image
            src="/LOGO.png"
            alt="The Sun Marketing Alliance"
            width={180}
            height={180}
            className="object-contain w-[130px] sm:w-[160px] md:w-[200px]"
            priority
          />
        </Link>
      </Reveal>

      {/* Desktop nav */}
      <Reveal>
        <nav
          className="hidden md:flex bg-white/80 backdrop-blur-md shadow-xl rounded-full px-7 lg:px-10 py-3 gap-6 lg:gap-10 text-xs lg:text-sm font-semibold tracking-wider"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return isExternal ? (
              <a
                key={link.href + link.label}
                href={link.href}
                className="hover:text-orange-500 transition"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="hover:text-orange-500 transition"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Reveal>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur-md p-2 shadow-sm"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="flex flex-col gap-[5px]">
          <span
            className={`block h-[2px] w-5 rounded-full bg-black transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-black transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden">
          <div className="rounded-3xl bg-white shadow-2xl border border-gray-200 px-6 py-5">
            <nav className="flex flex-col gap-3 text-sm font-semibold tracking-wide">
              {navLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return isExternal ? (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    className="py-1 text-gray-800 hover:text-orange-500 transition"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="py-1 text-gray-800 hover:text-orange-500 transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

