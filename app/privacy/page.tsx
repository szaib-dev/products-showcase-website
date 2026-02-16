import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  CreditCard, 
  Globe, 
  Cookie, 
  Mail, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 scroll-smooth">
      
      {/* --- HERO HEADER --- */}
      <section className="bg-[#0c4a6e] text-white pt-24 pb-32 relative overflow-hidden">
        {/* Modern Abstract Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0EA5E9_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
              <ShieldCheck className="size-3.5" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Privacy <span className="text-[#0EA5E9]">Policy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Transparency is at the core of Avelon MFG. We believe you have a right to know exactly how your data is handled, secured, and used.
            </p>
          </div>
        </div>
      </section>

      {/* --- MAIN LAYOUT --- */}
      <main className="container mx-auto px-6 -mt-20 pb-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Sticky Navigation (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h5 className="font-bold text-[#0c4a6e] mb-4 text-sm uppercase tracking-wider">Contents</h5>
                <nav className="space-y-1">
                  {[
                    { id: "#collection", label: "1. Data Collection" },
                    { id: "#usage", label: "2. How We Use Data" },
                    { id: "#sharing", label: "3. Third-Party Sharing" },
                    { id: "#security", label: "4. Security Measures" },
                    { id: "#cookies", label: "5. Cookies & Tracking" },
                    { id: "#contact", label: "6. Contact DPO" },
                  ].map((link) => (
                    <a 
                      key={link.id} 
                      href={link.id} 
                      className="block px-3 py-2 text-sm text-gray-500 hover:text-[#0EA5E9] hover:bg-sky-50 rounded-lg transition-all border-l-2 border-transparent hover:border-[#0EA5E9]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="bg-[#0c4a6e] rounded-xl p-6 text-white text-center">
                <p className="text-sm text-sky-200 mb-3">Last Updated</p>
                <p className="font-bold text-lg">{lastUpdated}</p>
              </div>
            </div>
          </aside>

          {/* RIGHT: Content Area */}
          <div className="flex-1 space-y-16">
            
            {/* 1. DATA COLLECTION (Grid Layout) */}
            <section id="collection" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#0c4a6e] mb-4">1. Information We Collect</h2>
                <p className="text-gray-600">We collect information in three main categories to provide you with a seamless shopping experience.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-sky-200 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="size-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Identity Data</h3>
                  <p className="text-sm text-gray-600">First name, last name, username, and password. For Trade accounts, this includes business registration details.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-sky-200 transition-colors">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="size-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Financial Data</h3>
                  <p className="text-sm text-gray-600">Payment card details (encrypted via Stripe), billing address, and transaction history.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-sky-200 transition-colors">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="size-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Technical Data</h3>
                  <p className="text-sm text-gray-600">IP address, browser type, time zone, and operating system used to access our store.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-sky-200 transition-colors">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Cookie className="size-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Usage Data</h3>
                  <p className="text-sm text-gray-600">Information about how you use our website, products, and services.</p>
                </div>
              </div>
            </section>

            {/* 2. USAGE (List Layout) */}
            <section id="usage" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6">2. How We Use Your Data</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <ul className="space-y-4">
                  {[
                    "To register you as a new customer or trade partner.",
                    "To process and deliver your order including managing payments and fees.",
                    "To manage our relationship with you (notifying regarding changes to terms).",
                    "To enable you to partake in a prize draw, competition or complete a survey.",
                    "To administer and protect our business and this website.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <CheckCircle2 className="size-6 text-[#0EA5E9] shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3. SHARING (Alert Layout) */}
            <section id="sharing" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6">3. Information Sharing</h2>
              <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 md:p-10">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white rounded-full text-[#0EA5E9] shadow-sm">
                    <Eye className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0c4a6e] mb-2">We do NOT sell your data.</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We strictly limit data sharing to trusted third parties required for operation:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
                        <span className="font-bold text-gray-900 block">Logistics</span>
                        <span className="text-sm text-gray-500">FedEx, DHL, UPS</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
                        <span className="font-bold text-gray-900 block">Payments</span>
                        <span className="text-sm text-gray-500">Stripe, PayPal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. SECURITY */}
            <section id="security" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6">4. Security Measures</h2>
               <div className="bg-[#0c4a6e] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                 <Lock className="absolute -right-6 -bottom-6 size-48 text-white/5 rotate-12" />
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-8">
                   <div>
                     <h3 className="text-xl font-bold mb-3">Encryption Standards</h3>
                     <p className="text-sky-100 text-sm leading-relaxed">
                       We use industry-standard 256-bit SSL encryption for all data transmission. Our databases are encrypted at rest.
                     </p>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold mb-3">Access Control</h3>
                     <p className="text-sky-100 text-sm leading-relaxed">
                       Access to personal data is strictly limited to employees, agents, and contractors who have a business need to know.
                     </p>
                   </div>
                 </div>
               </div>
            </section>

            {/* 5. CONTACT CTA */}
            <section id="contact" className="scroll-mt-24 border-t border-gray-200 pt-16">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0c4a6e] mb-2">Questions about privacy?</h2>
                  <p className="text-gray-500">Our Data Protection Officer is here to help.</p>
                </div>
                <Link 
                  href="mailto:sales@avelonmfg.com"
                  className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-[#0EA5E9] hover:text-[#0EA5E9] text-gray-700 px-6 py-4 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md"
                >
                  <Mail className="size-5" />
                  <span>Contact DPO Team</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}