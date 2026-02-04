import Link from "next/link";
import { FiChevronRight, FiShield, FiMail } from "react-icons/fi";

export default function PrivacyPolicyPage() {
  const lastUpdated = "February 4, 2026";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, place an order, or contact us, we may collect your name, email address, phone number, shipping address, and billing information.",
        },
        {
          subtitle: "Automatic Information",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages viewed, and the date and time of your visit.",
        },
        {
          subtitle: "Cookies",
          text: "We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences through your browser settings.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          text: "We use the information we collect to process and fulfill your orders, communicate with you about your orders and inquiries, improve our website and services, send promotional emails (with your consent), prevent fraud and enhance security, and comply with legal obligations.",
        },
      ],
    },
    {
      title: "Information Sharing",
      content: [
        {
          text: "We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our website and fulfilling orders (such as payment processors and shipping carriers), law enforcement or government agencies when required by law, and business partners with your explicit consent.",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          text: "We implement industry-standard security measures to protect your personal information, including SSL encryption for data transmission, secure servers and firewalls, regular security assessments, and limited access to personal data by authorized personnel only.",
        },
      ],
    },
    {
      title: "Your Rights",
      content: [
        {
          text: "Depending on your location, you may have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your personal information, opt-out of marketing communications, and withdraw consent where processing is based on consent.",
        },
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        {
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
        },
      ],
    },
    {
      title: "Children's Privacy",
      content: [
        {
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.",
        },
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the 'Last Updated' date. We encourage you to review this policy periodically.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-500 hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <FiChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-sky-600 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <FiShield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sky-100">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Intro */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <p className="text-gray-600 leading-relaxed">
            At MegaMart, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website or make a purchase.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center text-sky-500 text-sm font-bold">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    {item.subtitle && (
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-sky-50 rounded-xl p-6 sm:p-8 mt-8 border border-sky-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              Contact Support
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <FiMail className="w-4 h-4 text-sky-500" />
              <span>privacy@megamart.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}