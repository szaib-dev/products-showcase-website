import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-10">

      {/* Hero */}
      <div className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-24 overflow-hidden">
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "18vw", fontWeight: 900, color: "#fff" }}
        >
          AVELON
        </div>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              Our Story
            </span>
          </div>
          <h1
            className="text-[42px] md:text-[64px] lg:text-[76px] font-black leading-none tracking-[-0.025em] text-white max-w-3xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We Are Avelon MFG
          </h1>
          <p
            className="mt-6 text-[15px] text-white/35 max-w-[520px] leading-[1.8]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Bridging the gap between premium quality and wholesale accessibility.
            Built for businesses that demand reliability at scale.
          </p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full py-16 md:py-24 flex flex-col gap-20">

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-px bg-[#C4A378]" />
              <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
                Who We Are
              </span>
            </div>
            <h2
              className="text-[30px] md:text-[40px] font-black leading-tight tracking-[-0.02em] text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              A Global Wholesale Partner
            </h2>
            <p
              className="text-[14px] text-white/40 leading-[1.85]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Avelon MFG was built on a simple mission — make high-quality products
              accessible to businesses worldwide. We believed that premium
              should not mean exclusive.
            </p>
            <p
              className="text-[14px] text-white/40 leading-[1.85]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              We work with ethical manufacturers across multiple continents to deliver
              everything from industrial supplies to personal care — at wholesale
              prices, without compromise on quality.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[360px] md:h-[440px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Avelon MFG team"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/60 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4A378]" />
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              What We Stand For
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
            {[
              {
                index: "01",
                title: "Global Sourcing",
                desc: "We partner with manufacturers worldwide to ensure every product meets strict quality benchmarks before reaching your business.",
              },
              {
                index: "02",
                title: "Customer First",
                desc: "Every decision we make starts with the question: does this make life easier for our partners? Real people, real support.",
              },
              {
                index: "03",
                title: "Quality Guarantee",
                desc: "Every product goes through a multi-step quality check. If it does not meet our standards, it does not ship.",
              },
            ].map((item) => (
              <div key={item.index} className="bg-[#0E0C0A] p-8 md:p-10 flex flex-col gap-5 group hover:bg-white/[0.02] transition-colors duration-300">
                <span className="text-[11px] text-[#C4A378]/40 tracking-[0.2em]" style={{ fontFamily: "monospace" }}>
                  {item.index}
                </span>
                <h3
                  className="text-[20px] font-black text-white leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] text-white/35 leading-[1.75]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.desc}
                </p>
                <div className="w-0 h-[1px] bg-[#C4A378] group-hover:w-full transition-all duration-500 mt-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Image strip */}
        <div className="grid grid-cols-3 gap-px bg-white/[0.04] h-[200px] md:h-[260px] overflow-hidden">
          {[
            "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt={`Avelon operations ${i + 1}`}
                fill
                className="object-cover opacity-50 hover:opacity-70 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative border border-white/[0.06] p-10 md:p-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#C4A378 1px, transparent 1px), linear-gradient(90deg, #C4A378 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] leading-none"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "20vw", fontWeight: 900, color: "#C4A378" }}
          >
            MFG
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-lg">
              <h2
                className="text-[28px] md:text-[38px] font-black leading-tight tracking-[-0.02em] text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Ready to source at scale?
              </h2>
              <p
                className="text-[13px] text-white/35 leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Browse our full catalog or apply for a trade account to unlock wholesale pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <Link
                href="/product"
                className="group inline-flex items-center gap-2.5 bg-[#C4A378] hover:bg-white text-[#0E0C0A] text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-4 transition-all duration-300"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Explore Products
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/trade-form"
                className="inline-flex items-center gap-2 text-white/35 hover:text-[#C4A378] text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 border-b border-white/10 hover:border-[#C4A378] pb-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Apply for Trade Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}