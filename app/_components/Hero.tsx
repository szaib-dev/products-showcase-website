import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Check } from "lucide-react";

function Features() {
  return (
    <div className="relative min-h-screen bg-white py-20 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-sky-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Side: Wholesale Process --- */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-xs">
                Partner with us
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-[1.1]">
                How does the wholesale <br /> inquiry work?
              </h1>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                Experience a seamless partnership. We’ve streamlined our process to get you started in days, not weeks.
              </p>
            </div>

            <div className="space-y-10 mt-4">
              {/* Step 1 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm group-hover:bg-sky-500 transition-colors duration-300">
                    01
                  </div>
                  <div className="w-[2px] flex-1 bg-gray-100 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Submit your inquiry</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Send us a message with your business details and specific product requirements through our secure form.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm group-hover:bg-sky-500 transition-colors duration-300">
                    02
                  </div>
                  <div className="w-[2px] flex-1 bg-gray-100 mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Review & Connection</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our dedicated account managers review your application and reach out within 24 hours to discuss terms.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm group-hover:bg-sky-500 transition-colors duration-300">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Begins</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Once verified, access your exclusive trade dashboard and arrange your first bulk dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Message Form --- */}
          <div className="relative">
            {/* Soft Shadow Glow behind card */}
            <div className="absolute inset-0 bg-sky-500/5 blur-[100px] -z-10 rounded-full" />
            
            <Card className="border-0 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-xl border-t border-white/20">
              <CardHeader className="pt-10 px-8">
                <CardTitle className="text-3xl font-black text-gray-900 tracking-tight">
                  Quick Message
                </CardTitle>
                <p className="text-gray-400 text-sm">We'll get back to you shortly.</p>
              </CardHeader>
              
              <CardContent className="p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</Label>
                    <Input className="bg-gray-50/50 border-gray-100 rounded-xl h-12 focus-visible:ring-sky-500/20 focus-visible:border-sky-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email</Label>
                    <Input type="email" className="bg-gray-50/50 border-gray-100 rounded-xl h-12 focus-visible:ring-sky-500/20 focus-visible:border-sky-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Phone Number</Label>
                  <Input placeholder="+1 (555) 000-0000" className="bg-gray-50/50 border-gray-100 rounded-xl h-12 focus-visible:ring-sky-500/20 focus-visible:border-sky-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message</Label>
                  <Textarea placeholder="Tell us about your business requirements..." className="bg-gray-50/50 border-gray-100 rounded-[1.5rem] min-h-[150px] focus-visible:ring-sky-500/20 focus-visible:border-sky-500 transition-all resize-none" />
                </div>

                <Button className="w-full h-14 bg-gray-900 hover:bg-sky-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-gray-200 active:scale-[0.98]">
                  Send Message
                </Button>
                
                <p className="text-center text-[10px] text-gray-400">
                  By submitting, you agree to our Terms of Service.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;