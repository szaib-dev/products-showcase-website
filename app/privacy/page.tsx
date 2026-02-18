import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-30">

      {/* Header */}
      <div className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-20 overflow-hidden">
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "16vw", fontWeight: 900, color: "#fff" }}
        >
          PRIVACY
        </div>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              Legal
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[60px] font-black leading-none tracking-[-0.025em] text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-4 text-[13px] text-white/30 max-w-[460px] leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We are committed to handling your personal data with transparency and care.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sticky sidebar nav */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-24 flex flex-col gap-1">
              <p
                className="text-[10px] text-[#C4A378]/40 tracking-[0.25em] uppercase mb-4"
                style={{ fontFamily: "monospace" }}
              >
                Contents
              </p>
              {[
                { id: "#collection", label: "1. Data Collection" },
                { id: "#usage", label: "2. How We Use It" },
                { id: "#sharing", label: "3. Sharing" },
                { id: "#security", label: "4. Security" },
                { id: "#cookies", label: "5. Cookies" },
                { id: "#contact", label: "6. Contact" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.id}
                  className="text-[12px] text-white/25 hover:text-[#C4A378] py-2 border-l border-white/[0.06] hover:border-[#C4A378]/50 pl-4 transition-all duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 flex flex-col gap-14">

            {/* 1. Collection */}
            <section id="collection" className="scroll-mt-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>01</span>
                <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Information We Collect
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05]">
                {[
                  { label: "Identity Data", desc: "Name, username, and password. For trade accounts, this includes business registration details." },
                  { label: "Financial Data", desc: "Payment details processed securely via Stripe, billing address, and transaction history." },
                  { label: "Technical Data", desc: "IP address, browser type, time zone, and operating system used to access our site." },
                  { label: "Usage Data", desc: "Information about how you use our website, products, and services." },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0E0C0A] p-6 flex flex-col gap-3 hover:bg-white/[0.02] transition-colors duration-300 group">
                    <h3 className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {item.label}
                    </h3>
                    <p className="text-[12px] text-white/30 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-white/[0.05]" />

            {/* 2. Usage */}
            <section id="usage" className="scroll-mt-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>02</span>
                <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  How We Use Your Data
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-white/[0.05]">
                {[
                  "To register you as a new customer or trade partner.",
                  "To process and deliver your order, including managing payments.",
                  "To manage our relationship with you and notify you of any changes.",
                  "To administer and protect our business and website.",
                  "To improve our website, products, and services over time.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 py-4">
                    <span className="text-[10px] text-white/15 tabular-nums mt-0.5" style={{ fontFamily: "monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="h-px bg-white/[0.05]" />

            {/* 3. Sharing */}
            <section id="sharing" className="scroll-mt-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>03</span>
                <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Information Sharing
                </h2>
              </div>
              <div className="border border-white/[0.06] p-6 md:p-8 flex flex-col gap-5">
                <p className="text-[13px] font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  We do not sell your data.
                </p>
                <p className="text-[13px] text-white/35 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We only share data with trusted third parties required to operate our services:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Logistics", value: "FedEx, DHL, UPS" },
                    { label: "Payments", value: "Stripe, PayPal" },
                  ].map((item) => (
                    <div key={item.label} className="border border-white/[0.06] p-4 flex flex-col gap-1">
                      <span className="text-[10px] text-white/20 tracking-[0.18em] uppercase" style={{ fontFamily: "monospace" }}>{item.label}</span>
                      <span className="text-[13px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="h-px bg-white/[0.05]" />

            {/* 4. Security */}
            <section id="security" className="scroll-mt-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>04</span>
                <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Security Measures
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-px bg-white/[0.05]">
                {[
                  { label: "Encryption", desc: "All data transmission is protected with industry-standard SSL encryption. Databases are encrypted at rest." },
                  { label: "Access Control", desc: "Access to personal data is strictly limited to personnel with a legitimate business need." },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0E0C0A] p-6 flex flex-col gap-3">
                    <h3 className="text-[13px] font-bold text-white/70" style={{ fontFamily: "'Syne', sans-serif" }}>{item.label}</h3>
                    <p className="text-[12px] text-white/30 leading-[1.75]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="h-px bg-white/[0.05]" />

            {/* 5. Cookies */}
            <section id="cookies" className="scroll-mt-24 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>05</span>
                <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Cookies & Tracking
                </h2>
              </div>
              <p className="text-[13px] text-white/35 leading-[1.85] max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We use cookies to improve your browsing experience, analyze site traffic, and personalize content.
                You can control cookie settings through your browser at any time. Disabling cookies may affect
                some functionality of our website.
              </p>
            </section>

            <div className="h-px bg-white/[0.05]" />

            {/* 6. Contact */}
            <section id="contact" className="scroll-mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>06</span>
                  <h2 className="text-[22px] md:text-[26px] font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Questions?
                  </h2>
                </div>
                <p className="text-[13px] text-white/30 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  For any privacy-related questions, reach out to our team directly.
                </p>
              </div>
              <Link
                href="mailto:sales@avelonmfg.com"
                className="group inline-flex items-center gap-2.5 border border-white/[0.08] hover:border-[#C4A378]/50 text-white/40 hover:text-[#C4A378] px-6 py-3.5 text-[11px] tracking-[0.15em] uppercase transition-all duration-200 shrink-0"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}