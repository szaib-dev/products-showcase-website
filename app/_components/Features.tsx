"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Features() {
  const leftRef = useScrollReveal<HTMLDivElement>({ x: -60, duration: 0.9 });
  const rightRef = useScrollReveal<HTMLDivElement>({ x: 60, duration: 0.9, delay: 0.2 });

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col bg-[#1C1917] px-3 w-full py-20 md:py-28">
        {/* Subtle diagonal accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C4A378]/5 to-transparent pointer-events-none" />

        <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-15 relative">
          {/* --- Left Side: Wholesale Process --- */}
          <div ref={leftRef} className="flex flex-col items-start gap-6">
            <span className="text-[#C4A378] text-xs font-bold tracking-[0.2em] uppercase font-body">
              How It Works
            </span>
            <h2 className="max-w-[420px] w-full text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold leading-tight">
              How does the wholesale inquiry work?
            </h2>
            <p className="text-white/60 font-body text-base max-w-[400px]">
              You&apos;re just a few steps away from partnering with us.
            </p>

            <section className="mt-4">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 bg-[#C4A378] rounded-full flex items-center justify-center text-white font-bold text-sm font-body shadow-lg shadow-[#C4A378]/20">
                    01
                  </div>
                  <div className="h-16 w-[2px] bg-gradient-to-b from-[#C4A378]/50 to-transparent"></div>
                </div>
                <div className="flex flex-col items-start gap-1.5 pb-4">
                  <p className="text-white font-semibold font-body text-base">
                    Submit your inquiry
                  </p>
                  <p className="text-sm font-body text-white/50 max-w-[300px]">
                    Send us a message with your business details and product requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 bg-[#C4A378] rounded-full flex items-center justify-center text-white font-bold text-sm font-body shadow-lg shadow-[#C4A378]/20">
                    02
                  </div>
                  <div className="h-16 w-[2px] bg-gradient-to-b from-[#C4A378]/50 to-transparent"></div>
                </div>
                <div className="flex flex-col items-start gap-1.5 pb-4">
                  <p className="text-white font-semibold font-body text-base">
                    We review and connect
                  </p>
                  <p className="text-sm font-body text-white/50 max-w-[300px]">
                    Our team checks availability and pricing, then reaches out to discuss terms.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-10 bg-[#C4A378] rounded-full flex items-center justify-center text-white font-bold text-sm font-body shadow-lg shadow-[#C4A378]/20">
                    03
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <p className="text-white font-semibold font-body text-base">
                    Partnership begins
                  </p>
                  <p className="text-sm font-body text-white/50 max-w-[300px]">
                    Once confirmed, we process your wholesale order and arrange dispatch.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* --- Right Side: Message Form --- */}
          <div
            ref={rightRef}
            className="h-auto w-full md:w-[500px] md:p-6 rounded-3xl bg-white border border-[#E7DFD5] shadow-2xl shadow-black/10 md:ml-auto"
          >
            <form>
              <Card className="bg-transparent shadow-none border-none">
                <CardHeader>
                  <span className="text-[#C4A378] text-xs font-bold tracking-[0.2em] uppercase font-body">
                    Get in Touch
                  </span>
                  <CardTitle className="text-[#1C1917] font-display text-2xl md:text-3xl font-bold mt-1">
                    Quick Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3.5">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                    <div>
                      <Label className="text-[#78716C] font-body text-xs font-medium">Full Name</Label>
                      <Input
                        name="name"
                        type="text"
                        className="w-full border border-[#E7DFD5] rounded-xl focus-visible:ring-2 focus-visible:ring-[#C4A378]/30 focus-visible:border-[#C4A378] bg-[#FDF9F4] font-body text-sm mt-1.5"
                      />
                    </div>
                    <div>
                      <Label className="text-[#78716C] font-body text-xs font-medium">Email</Label>
                      <Input
                        name="email"
                        type="email"
                        className="w-full border border-[#E7DFD5] rounded-xl focus-visible:ring-2 focus-visible:ring-[#C4A378]/30 focus-visible:border-[#C4A378] bg-[#FDF9F4] font-body text-sm mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#78716C] font-body text-xs font-medium">Phone</Label>
                    <Input
                      name="phone"
                      type="text"
                      placeholder="With Country Code"
                      className="w-full border border-[#E7DFD5] rounded-xl focus-visible:ring-2 focus-visible:ring-[#C4A378]/30 focus-visible:border-[#C4A378] bg-[#FDF9F4] font-body text-sm mt-1.5"
                    />
                  </div>

                  <div>
                    <Label className="text-[#78716C] font-body text-xs font-medium">Subject</Label>
                    <Input
                      name="subject"
                      type="text"
                      className="w-full border border-[#E7DFD5] rounded-xl focus-visible:ring-2 focus-visible:ring-[#C4A378]/30 focus-visible:border-[#C4A378] bg-[#FDF9F4] font-body text-sm mt-1.5"
                    />
                  </div>

                  <div>
                    <Label className="text-[#78716C] font-body text-xs font-medium">Message</Label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      className="w-full min-h-[150px] border border-[#E7DFD5] rounded-xl focus-visible:ring-2 focus-visible:ring-[#C4A378]/30 focus-visible:border-[#C4A378] bg-[#FDF9F4] font-body text-sm mt-1.5"
                    />
                  </div>

                  <Button className="bg-[#1C1917] text-white cursor-pointer mt-2 hover:bg-[#44372A] rounded-full py-6 font-body font-semibold tracking-wide transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;