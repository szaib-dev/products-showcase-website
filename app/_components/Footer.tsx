import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 px-4 mt-8 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        
        {/* 1. Brand Section */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-white text-3xl md:text-4xl font-montserrat font-bold tracking-tight"
          >
            MegaMart.
          </Link>
          <p className="text-sm font-inter text-gray-300 leading-relaxed max-w-[280px]">
            Your one-stop destination for premium products. Quality, speed, and reliability tailored for modern shopping.
          </p>
        </div>

        {/* 2. Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-white font-inter font-semibold tracking-wide">
            Company
          </h3>
          <div className="flex flex-col gap-2.5 text-sm md:text-base">
            <Link href="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">
              About Us
            </Link>
           
            <Link href="/privacy" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* 3. Support Links (Trade Form & FAQ Added) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-white font-inter font-semibold tracking-wide">
            Support
          </h3>
          <div className="flex flex-col gap-2.5 text-sm md:text-base">
            <Link href="/trade-form" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit font-medium text-sky-200">
              Trade Account Application
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">
              Frequently Asked Questions
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit">
              Contact Support
            </Link>
            
          </div>
        </div>

        {/* 4. Social & Connect */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-white font-inter font-semibold tracking-wide">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            Stay updated with our latest offers and news.
          </p>
          <div className="flex gap-4 items-center">
            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white hover:text-primary text-white transition-all duration-300">
                <FaFacebook className="size-5" />
            </a>
            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white hover:text-primary text-white transition-all duration-300">
                <FaTwitter className="size-5" />
            </a>
            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white hover:text-primary text-white transition-all duration-300">
                <FaInstagram className="size-5" />
            </a>
            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white hover:text-primary text-white transition-all duration-300">
                <FaLinkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1200px] mx-auto w-full mt-12 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} MegaMart. All rights reserved.</p>
        <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;