import Image from 'next/image';
import { Users, Globe, Award, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION (Minimal & Clean) --- */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
              <div className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Established 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Distribution <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>Redefined.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
              Avelon MFG is the premier gateway for verified wholesale inventory. 
              We bridge the gap between global manufacturers and trade partners.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="border-y border-gray-100 py-12 bg-gray-50/30">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Global Partners", val: "30+" },
            { label: "Inventory Lines", val: "500+" },
            { label: "Hub Satisfaction", val: "100%" },
            { label: "Years Active", val: "02" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <h4 className="text-3xl font-black text-black tracking-tighter">{stat.val}</h4>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-[1200px] mx-auto px-6 py-24">
        
        {/* OUR STORY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Office Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-black tracking-tighter uppercase">
                The Avelon <br /> Advantage
              </h2>
              <div className="h-1 w-12 bg-primary" />
            </div>
            
            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                Founded on the principles of efficiency and transparency, Avelon MFG operates as a primary 
                link in the global supply chain. We eliminate the friction of traditional distribution.
              </p>
              <p>
                By partnering with ethical manufacturers and utilizing high-speed logistics hubs, we ensure 
                that premium trade goods are accessible without the standard industry markups.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-xs font-black text-black uppercase tracking-widest">ISO Certified</span>
                <span className="text-[10px] text-gray-400">Quality Management</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-100" />
              <div className="flex flex-col">
                <span className="text-xs font-black text-black uppercase tracking-widest">Trade Only</span>
                <span className="text-[10px] text-gray-400">Wholesale Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: Globe, 
              title: "Supply Logistics", 
              desc: "Strategically located hubs ensuring 48-hour dispatch for primary inventory lines." 
            },
            { 
              icon: ShieldCheck, 
              title: "Verified Sourcing", 
              desc: "Every manufacturer undergoes a rigorous 12-point audit before joining the Avelon network." 
            },
            { 
              icon: TrendingUp, 
              title: "Scalable Trade", 
              desc: "Flexible wholesale accounts designed to grow with your business requirements." 
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-white border border-gray-50 hover:border-gray-200 transition-all hover:shadow-xl hover:shadow-gray-100">
              <div className="size-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* --- CTA SECTION --- */}
      <section className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 size-96 bg-primary/10 blur-[100px] -z-10 transition-transform duration-1000 group-hover:scale-125" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Ready to <br /> partner with us?
            </h2>
            <p className="text-gray-400 max-w-sm mx-auto font-medium">
              Join the Avelon network and access verified global inventory today.
            </p>
            <Link href="/trade-form" className="inline-flex items-center gap-3 bg-primary hover:bg-white text-black font-black py-5 px-10 rounded-2xl transition-all uppercase tracking-widest text-xs mx-auto active:scale-95 shadow-2xl shadow-primary/20">
              Start Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-gray-100">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} AVELON MFG / ALL RIGHTS RESERVED
        </p>
      </footer>

    </div>
  );
}