'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          subject: formData.subject || 'General Inquiry',
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      toast.success('Message sent! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = `
    w-full bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20
    text-[13px] px-4 py-3 outline-none
    focus:border-[#C4A378]/60 focus:bg-white/[0.06]
    transition-colors duration-200
  `;

  const labelClass = `
    block text-[10px] text-white/30 tracking-[0.2em] uppercase mb-2
  `;

  return (
    <div className="min-h-screen bg-[#0E0C0A] mt-30">

      {/* Page Header */}
      <div className="relative bg-[#0A0806] border-b border-white/[0.06] py-14 md:py-20 overflow-hidden">
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] leading-none"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "18vw", fontWeight: 900, color: "#fff" }}
        >
          CONTACT
        </div>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-[#C4A378]" />
            <span className="text-[10px] text-[#C4A378] tracking-[0.28em] uppercase" style={{ fontFamily: "monospace" }}>
              Reach Out
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[60px] font-black leading-none tracking-[-0.025em] text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get in{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #C4A378" }}>
              Touch
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 w-full py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* LEFT: Form */}
          <div>
            <div className="flex flex-col gap-2 mb-10">
              <h2
                className="text-[24px] md:text-[30px] font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Send us a Message
              </h2>
              <p className="text-[13px] text-white/30 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Fill in the form and we will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={{ fontFamily: "monospace" }}>
                    Full Name <span className="text-[#C4A378]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "monospace" }}>
                    Email Address <span className="text-[#C4A378]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    required
                  />
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={{ fontFamily: "monospace" }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className={inputClass}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontFamily: "monospace" }}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="" className="bg-[#0E0C0A]">Select a topic</option>
                    <option value="General Inquiry" className="bg-[#0E0C0A]">General Inquiry</option>
                    <option value="Product Question" className="bg-[#0E0C0A]">Product Question</option>
                    <option value="Order Support" className="bg-[#0E0C0A]">Order Support</option>
                    <option value="Bulk Order" className="bg-[#0E0C0A]">Bulk Order</option>
                    <option value="Partnership" className="bg-[#0E0C0A]">Partnership</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass} style={{ fontFamily: "monospace" }}>
                  Message <span className="text-[#C4A378]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className={inputClass + " resize-none"}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-3 bg-[#C4A378] hover:bg-white text-[#0E0C0A] text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-4 transition-all duration-300 disabled:opacity-40 disabled:cursor-wait w-fit"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* RIGHT: Info */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">

            {/* Contact details */}
            <div className="border border-white/[0.06] p-6 flex flex-col gap-6">
              <p
                className="text-[10px] text-[#C4A378]/50 tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace" }}
              >
                Contact Info
              </p>

              {[
                {
                  label: "Phone",
                  value: "(888) 680-1834",
                  href: "tel:+18886801834",
                },
                {
                  label: "Email",
                  value: "sales@avelonmfg.com",
                  href: "mailto:sales@avelonmfg.com",
                },
                {
                  label: "Address",
                  value: "429 Fourth Avenue Ste 300\nPittsburgh, PA 15219",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span
                    className="text-[10px] text-white/20 tracking-[0.2em] uppercase"
                    style={{ fontFamily: "monospace" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] font-bold text-white hover:text-[#C4A378] transition-colors duration-200"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-[13px] text-white/50 leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}

              {/* Call CTA */}
              <a
                href="tel:+18886801834"
                className="mt-2 inline-flex items-center justify-center gap-2 border border-[#C4A378]/30 hover:border-[#C4A378] hover:bg-[#C4A378]/10 text-[#C4A378] text-[11px] tracking-[0.15em] uppercase px-5 py-3 transition-all duration-200 w-full"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Call Us Now
              </a>
            </div>

        

            {/* Quick help CTA */}
            <div className="border border-[#C4A378]/20 bg-[#C4A378]/[0.04] p-6 flex flex-col gap-3">
              <p
                className="text-[10px] text-[#C4A378]/50 tracking-[0.28em] uppercase"
                style={{ fontFamily: "monospace" }}
              >
                Quick Help
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Need a quote fast? Submit a product request and we will respond with pricing.
              </p>
              <Link
                href="/trade-form"
                className="group inline-flex items-center gap-2 text-[#C4A378] text-[11px] tracking-[0.15em] uppercase border-b border-[#C4A378]/30 hover:border-[#C4A378] pb-0.5 transition-colors duration-200 w-fit"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Apply for Trade Account
                <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 border border-white/[0.06] overflow-hidden h-72 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4894853209097!2d-79.99657252358496!3d40.43911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f1568e5c4f35%3A0x1a8c6c2c1a1a1a1a!2s429%20Fourth%20Ave%2C%20Pittsburgh%2C%20PA%2015219!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom links */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-white/[0.06] pt-8">
          <p
            className="text-[10px] text-white/15 tracking-[0.2em] uppercase"
            style={{ fontFamily: "monospace" }}
          >
            Need more info?
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/faq"
              className="text-[11px] text-white/30 hover:text-[#C4A378] tracking-[0.15em] uppercase transition-colors duration-200 group inline-flex items-center gap-1.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View FAQs <ArrowUpRight className="size-3" />
            </Link>
            <Link
              href="/product"
              className="text-[11px] text-white/30 hover:text-[#C4A378] tracking-[0.15em] uppercase transition-colors duration-200 group inline-flex items-center gap-1.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Browse Products <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}