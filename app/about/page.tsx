import Image from 'next/image';
import { Users, Globe, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans">
      
      {/* --- HERO SECTION (Dark Navy) --- */}
      <section className="relative bg-[#0c4a6e] text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0EA5E9] rounded-full blur-3xl opacity-10 -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            We Are <span className="text-[#0EA5E9]">Avelon MFG LLC.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between premium quality and everyday accessibility. 
            We are redefining the modern shopping experience.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT (Overlap Layout) --- */}
      <main className="container mx-auto px-4 pb-20 -mt-20 relative z-20">
        
        {/* 1. OUR STORY CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-sky-50 text-[#0EA5E9] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0c4a6e]">
                From a Garage to Global
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2024, Avelon MFG LLC started with a simple mission: to make high-quality essentials accessible to everyone. We believed that &quot;premium&quot; shouldn&apos;t mean &quot;exclusive.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we serve customers in over 30 countries, partnering with ethical manufacturers to bring you everything from automotive essentials to personal care—without the markup.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-[#0c4a6e]">50k+</h4>
                  <p className="text-sm text-gray-500 mt-1">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-[#0c4a6e]">100%</h4>
                  <p className="text-sm text-gray-500 mt-1">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg group">
               <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Office Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* 2. VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { 
              icon: Globe, 
              title: "Global Sourcing", 
              desc: "We scour the globe to find materials that meet our strict ISO standards." 
            },
            { 
              icon: Users, 
              title: "Customer First", 
              desc: "Our support team is available 24/7. We don't use bots; we use experts." 
            },
            { 
              icon: Award, 
              title: "Quality Guarantee", 
              desc: "Every product undergoes a 3-step quality check before it reaches your door." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center text-[#0EA5E9] mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. CTA SECTION */}
        <div className="bg-[#0c4a6e] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to experience quality?</h2>
            <p className="text-sky-100 mb-8 max-w-lg mx-auto">
              Join thousands of satisfied customers who have upgraded their lifestyle with Avelon MFG LLC.
            </p>
            <Link href={"/product"} className="bg-[#0EA5E9] hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2 mx-auto">
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
          </div>
        </div>

      </main>

      {/* SIMPLE FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Avelon MFG LLC. Built for performance.
        </p>
      </footer>

    </div>
  );
}