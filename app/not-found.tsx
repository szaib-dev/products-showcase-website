'use client'

import Link from "next/link";
import { FiHome, FiArrowLeft, FiAlertTriangle, FiMail } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-[1200px] w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- Left Side: Brutalist 404 --- */}
          <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
            
            {/* System Status */}
            <div className="flex items-center gap-2.5 px-4 py-1.5 bg-black text-white">
              <div className="size-2 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                AVELON / PATH NOT FOUND
              </span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-black tracking-[-0.06em] leading-[0.8] uppercase">
              LOST <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>SUPPLY</span>
            </h1>
            
            <p className="text-gray-500 text-lg md:text-xl max-w-md font-bold leading-tight">
              The requested resource has been moved or purged from the Avelon distribution hub.
            </p>

            {/* Buttons: Industrial Style */}
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 pt-4">
              <Link
                href="/"
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-widest transition-all hover:bg-[#22c55e] hover:text-black active:scale-95 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]"
              >
                <FiHome className="text-lg" />
                Home Hub
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white border-4 border-black text-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
              >
                <FiArrowLeft className="text-lg" />
                Reverse Path
              </button>
            </div>
          </div>

          {/* --- Right Side: Visual Warning --- */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[#22c55e]/10 blur-[100px] rounded-full -z-10" />
              
              {/* Icon Container */}
              <div className="border-[12px] border-black p-12 md:p-20 shadow-[20px_20px_0px_0px_rgba(34,197,94,0.3)]">
                <FiAlertTriangle className="size-24 md:size-40 text-black stroke-[3]" />
              </div>

              {/* Verified Tag Overlay */}
              <div className="absolute -top-4 -right-4 bg-[#22c55e] px-4 py-1 text-black font-black text-[10px] uppercase tracking-widest border-2 border-black -rotate-3">
                CODE: 404_ERR
              </div>
            </div>
          </div>
          
        </div>

        {/* Support Link */}
        <div className="mt-20 pt-10 border-t-4 border-black flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            Stuck in the system? Contact our logistics support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-black hover:text-[#22c55e] font-black text-xs uppercase tracking-widest transition-colors"
          >
            <FiMail className="text-lg" />
            Support Desk
          </Link>
        </div>
      </div>
    </div>
  );
}