import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0A0806] pt-16 pb-8 border-t border-white/[0.06] relative overflow-hidden">

      {/* Watermark */}
      <div
        className="absolute right-[-3%] bottom-0 pointer-events-none select-none opacity-[0.02] leading-none"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "22vw", fontWeight: 900, color: "#fff" }}
      >
        MFG
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          {/* 1. Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div className="w-60 h-50">
              <Logo />
            </div>
            <p
              className="text-[13px] text-white/35 leading-[1.75] max-w-[260px]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Your trusted partner for premium wholesale products. Quality, reliability, and scale — built for modern businesses.
            </p>
          </div>

          {/* 2. Company */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[10px] text-[#C4A378]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/product", label: "Products" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/40 hover:text-white hover:translate-x-1.5 transition-all duration-200 w-fit"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Support */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[10px] text-[#C4A378]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              Support
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/trade-form"
                className="text-[13px] text-[#C4A378] hover:text-[#C4A378]/70 hover:translate-x-1.5 transition-all duration-200 w-fit"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Trade Account Application
              </Link>
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Support" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/40 hover:text-white hover:translate-x-1.5 transition-all duration-200 w-fit"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Contact */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[10px] text-[#C4A378]/60 tracking-[0.28em] uppercase"
              style={{ fontFamily: "monospace" }}
            >
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">

              {/* Phone */}
              <a
                href="tel:+18886801834"
                className="group flex flex-col gap-0.5"
              >
                <span
                  className="text-[10px] text-white/20 tracking-[0.18em] uppercase"
                  style={{ fontFamily: "monospace" }}
                >
                  Phone
                </span>
                <span
                  className="text-[14px] font-bold text-white group-hover:text-[#C4A378] transition-colors duration-200"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  (888) 680-1834
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@avelonmfg.com"
                className="group flex flex-col gap-0.5"
              >
                <span
                  className="text-[10px] text-white/20 tracking-[0.18em] uppercase"
                  style={{ fontFamily: "monospace" }}
                >
                  Email
                </span>
                <span
                  className="text-[13px] text-white/60 group-hover:text-[#C4A378] transition-colors duration-200 break-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  sales@avelonmfg.com
                </span>
              </a>

              {/* Address */}
              <div className="flex flex-col gap-0.5">
                <span
                  className="text-[10px] text-white/20 tracking-[0.18em] uppercase"
                  style={{ fontFamily: "monospace" }}
                >
                  Address
                </span>
                <span
                  className="text-[13px] text-white/40 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  429 Fourth Avenue Ste 300<br />
                  Pittsburgh, PA 15219
                </span>
              </div>
            </div>

            {/* CTA call button */}
            <a
              href="tel:+18886801834"
              className="mt-2 inline-flex items-center justify-center gap-2 border border-[#C4A378]/30 hover:border-[#C4A378] hover:bg-[#C4A378]/10 text-[#C4A378] text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-200 w-fit"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-6 h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p
            className="text-[11px] text-white/20 tracking-[0.1em]"
            style={{ fontFamily: "monospace" }}
          >
            © {new Date().getFullYear()} Avelon MFG. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/privacy", label: "Privacy" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] text-white/20 hover:text-[#C4A378] tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ fontFamily: "monospace" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;