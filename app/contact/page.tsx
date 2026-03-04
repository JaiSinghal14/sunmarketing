"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
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
type:formData.get("type"),
message:formData.get("message")
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

};

  return (
    <>
      <main className="min-h-screen bg-[#f3f4f6] px-4 sm:px-6 md:px-10 lg:px-16 pt-3 md:pt-4">
        <Header />

        {/* CONTACT CONTENT */}
        <section className="max-w-[1200px] mx-auto py-12 sm:py-16 md:py-20">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3 sm:mb-4">
              Get in Touch
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed text-center">
              Looking to partner with TSMA, discuss distribution opportunities or need
              support? Call, write, or share your requirements and our team will respond
              quickly.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Business hours: Monday – Saturday, 10:00 AM to 7:00 PM (IST)
            </p>
          </Reveal>

          {/* two column info + map */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16">
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl">

              <Reveal>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Hapur Office</p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      43, Prahlad Nagar, near New Mandi, Hapur – 245101, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Dhampur Office</p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Near sugar mill, Dhampur – 246761, Bijnor, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Phone Section */}
              <Reveal>
                <div className="space-y-4 sm:space-y-6">
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl">☎</span>
                    <div>
                      <p className="font-semibold text-gray-900">Office IVR</p>
                      <a
                        href="tel:+919403891214"
                        className="text-orange-500 hover:underline"
                      >
                        +91 94038 91214
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xl sm:text-2xl">📱</span>
                    <div>
                      <p className="font-semibold text-gray-900">Direct Contact</p>
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
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
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
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-xl sm:text-2xl">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
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
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
                  <a
                    href="https://wa.me/919412219289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow text-sm sm:text-base"
                  >
                    <span>💬</span>
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href="tel:+919412219289"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold hover:border-gray-400 transition"
                  >
                    <span>📞</span>
                    <span>Call Sales</span>
                  </a>
                </div>
              </Reveal>

            </div>

            {/* Square Map */}
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=the%20sun%20marketing%20alliance%20hapur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Reveal>
            <form
ref={formRef}
onSubmit={handleSubmit}
className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
  name="name"
  type="text"
  placeholder="Enter your full name"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-orange-500"
  required
/>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
  name="email"
  type="email"
  placeholder="you@example.com"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-orange-500"
  required
/>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
  name="phone"
  type="tel"
  placeholder="+91 ..."
  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-orange-500"
/>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    I am a*
                  </label>
                  <select
  name="type"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base bg-white focus:outline-none focus:border-orange-500"
  defaultValue="brand"
>
                    <option value="brand">Brand / Manufacturer</option>
                    <option value="wholesaler">Wholesaler / Distributor</option>
                    <option value="retailer">Retailer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-full flex flex-col">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Requirements / Message*
                  </label>
                  <textarea
  name="message"
  placeholder="Tell us briefly about your distribution or partnership requirements..."
  rows={6}
  className="w-full flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:border-orange-500"
  required
/>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500">
By submitting this form you agree to be contacted by our team over
phone or email regarding your enquiry.
</p>

<button
type="submit"
disabled={loading}
className={`mt-1 inline-flex items-center justify-center text-white font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition
${loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}
`}
>
{loading ? "Sending..." : "Submit Inquiry"}
</button>

{success && (
<p className="text-green-600 text-sm font-medium mt-2">
Inquiry sent successfully! We will contact you soon.
</p>
)}
              </div>
            </form>
          </Reveal>
        </section>
        <Footer />
      </main>
      
    </>
  );
}