'use client'
import Link from "next/link";
import { FiHome, FiArrowLeft, FiTool, FiMail } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <FiTool className="w-12 h-12 text-sky-500" />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl font-bold text-sky-500 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Page Under Maintenance
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          We&apos;re currently working on this page to bring you something amazing.
          Please check back soon!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
          >
            <FiHome className="w-4 h-4" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center cursor-pointer justify-center gap-2 px-6 py-3.5 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <FiArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-3">Need help right away?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium text-sm"
          >
            <FiMail className="w-4 h-4" />
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}