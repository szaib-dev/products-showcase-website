'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
];

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
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        subject: formData.subject || 'General Inquiry',
        message: formData.message
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID as string,
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast.success('Message sent successfully! We will get back to you soon.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email send failed:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-[#0c4a6e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28">
          <p className="text-sky-300 font-medium mb-4 tracking-wide uppercase text-sm">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            Get in Touch
            <br />
            With Our Team
          </h1>
          <p className="text-xl text-sky-100/80 max-w-2xl leading-relaxed">
            Have questions about our products or services? We are here to help and respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-28 relative z-10">
            {[
              {
                icon: FiPhone,
                title: "Call Us",
                info: "+1 234 567 890",
                sub: "Mon-Fri 9am-6pm",
              },
              {
                icon: FiMail,
                title: "Email Us",
                info: "support@avelon_mfg_llc",
                sub: "We reply within 24hrs",
              },
              {
                icon: FiMapPin,
                title: "Visit Us",
                info: "123 Business Ave",
                sub: "New York, NY 10001",
              },
              {
                icon: FaWhatsapp,
                title: "WhatsApp",
                info: "+1 234 567 890",
                sub: "Quick responses",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
                <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-900 font-medium">{item.info}</p>
                <p className="text-gray-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <FiMessageCircle className="w-5 h-5 text-sky-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-500 text-sm">Fill the form below and we will get back to you</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Question">Product Question</option>
                        <option value="Order Support">Order Support</option>
                        <option value="Bulk Order">Bulk Order</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-lg transition-colors ${isSubmitting ? 'bg-gray-400 cursor-wait text-white' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
                  >
                    <FiSend className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-sky-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="text-gray-900 font-medium text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        className="w-11 h-11 bg-gray-50 hover:bg-sky-50 rounded-lg flex items-center justify-center text-gray-600 hover:text-sky-500 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-500 to-sky-600 p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-2">Need Quick Help?</h3>
                <p className="text-sky-100 text-sm mb-4">
                  Submit a product request and our team will get back to you with a quote.
                </p>
                <Link
                  href="/request"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors text-sm"
                >
                  Submit Request
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-80 lg:h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Have More Questions?</h2>
          <p className="text-gray-600 mb-6">
            Check out our frequently asked questions or browse our product catalog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View FAQs
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              Browse Products
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>)}
