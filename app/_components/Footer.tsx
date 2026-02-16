import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 mt-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-6">
          <div className="w-24">
            <Logo />
          </div>
          <p className="text-sm font-inter text-gray-500 leading-relaxed max-w-[280px]">
            Your one stop destination for premium products. Quality, speed, and reliability.
          </p>
          
        </div>

        {/* 2. Company Links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Company
          </h3>
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <Link href="/" className="text-gray-600 hover:text-primary transition-all duration-300 w-fit">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-all duration-300 w-fit">
              About Us
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-all duration-300 w-fit">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* 3. Support Links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Support
          </h3>
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <Link href="/trade-form" className="text-blue-600 font-semibold hover:underline transition-all duration-300 w-fit">
              Trade Account Application
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-primary transition-all duration-300 w-fit">
              Frequently Asked Questions
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-all duration-300 w-fit">
              Contact Support
            </Link>
          </div>
        </div>

        {/* 4. Social & Connect */}
        <div className="flex flex-col gap-5">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-500">
            Questions? Speak with our team directly.
          </p>
          <a 
            href="tel:8886801834" 
            className="flex items-center justify-center gap-3 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-all shadow-sm active:scale-95"
          >
            <FaPhone className="text-sm" />
            <span className="font-semibold">(888) 680-1834</span>
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1200px] mx-auto w-full mt-16 pt-8 border-t border-gray-100 flex flex-col md:group md:flex-row justify-between items-center gap-6 text-xs font-medium text-gray-400">
        <p>&copy; {new Date().getFullYear()} Avelon MFG LLC. All rights reserved.</p>
        <div className="flex gap-8">
       
          <Link href="/privacy" className="hover:text-gray-900 transition-colors uppercase tracking-tight">Privacy</Link>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;