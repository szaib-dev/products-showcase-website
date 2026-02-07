import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Features() {
  return (
    <div className="md:h-screen md:py-30 md:pt-45 relative">
      <div className="flex flex-col bg-primary px-3 w-full py-20">
        <div>
          <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-15">
            {/* --- Left Side: Wholesale Process --- */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="max-w-[360px] w-full text-2xl md:text-3xl lg:text-4xl text-white font-montserrat font-bold">
                How does the wholesale inquiry work?
              </h1>
              <p className="text-white font-inter md:text-base opacity-80">
                You’re just a few steps away from partnering with us.
              </p>

              <section>
                {/* Step 1 */}
                <div className="flex items-start gap-2">
                  <div className="flex flex-col items-center">
                    <div className="size-8 bg-white rounded-full p-0.5">
                      <div className="size-full flex justify-center items-center bg-pink-500 rounded-full p-1">
                        <div className="size-3 flex justify-center items-center bg-white rounded-full p-0.5">
                          <div className="size-0.5 bg-black/30 rounded-full p-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20 w-[3px] bg-gray-500"></div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-1 text-white font-inter mt-1">
                      <b className="font-bold font-montserrat">1.</b>{" "}
                      <p className="font-semibold">Submit your inquiry</p>
                    </div>
                    <p className="text-xs font-inter text-white/70">
                      Send us a message with your business details and product requirements.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-2">
                  <div className="flex flex-col items-center">
                    <div className="size-8 bg-white rounded-full p-0.5">
                      <div className="size-full flex justify-center items-center bg-pink-500 rounded-full p-1">
                        <div className="size-3 flex justify-center items-center bg-white rounded-full p-0.5">
                          <div className="size-0.5 bg-black/30 rounded-full p-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-20 w-[3px] bg-gray-500"></div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-1 text-white font-inter mt-1">
                      <b className="font-bold font-montserrat">2.</b>{" "}
                      <p className="font-semibold">We review and connect</p>
                    </div>
                    <p className="text-xs font-inter text-white/70">
                      Our team checks availability and pricing, then reaches out to discuss terms.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-2">
                  <div className="flex flex-col items-center">
                    <div className="size-8 bg-white rounded-full p-0.5">
                      <div className="size-full flex justify-center items-center bg-pink-500 rounded-full p-1">
                        <div className="size-3 flex justify-center items-center bg-white rounded-full p-0.5">
                          <div className="size-0.5 bg-black/30 rounded-full p-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-1 text-white font-inter mt-1">
                      <b className="font-bold font-montserrat">3.</b>{" "}
                      <p className="font-semibold">Partnership begins</p>
                    </div>
                    <p className="text-xs font-inter text-white/70">
                      Once confirmed, we process your wholesale order and arrange dispatch.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* --- Right Side: Message Form --- */}
            <div className="h-auto w-full md:w-[500px] md:p-5 md:absolute top-0 rounded-xl bg-secondary border-2 border-gray-400 right-0 lg:right-30 shadow-lg shadow-black/50">
              <form>
                <Card className="bg-transparent shadow-none border-none">
                  <CardHeader>
                    <CardTitle className="text-primary font-montserrat md:text-3xl font-bold">
                      Quick Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                      <div>
                        <Label>Full Name</Label>
                        <Input
                          name="name"
                          type="text"
                          className="w-full border-0 focus-visible:ring-2 focus-visible:ring-primary bg-primary/10"
                        />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input
                          name="email"
                          type="email"
                          className="w-full border-0 focus-visible:ring-2 focus-visible:ring-primary bg-primary/10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <Input
                        name="phone"
                        type="text"
                        placeholder="With Country Code"
                        className="w-full border-0 focus-visible:ring-2 focus-visible:ring-primary bg-primary/10"
                      />
                    </div>

                    <div>
                      <Label>Subject</Label>
                      <Input
                        name="subject"
                        type="text"
                        className="w-full border-0 focus-visible:ring-2 focus-visible:ring-primary bg-primary/10"
                      />
                    </div>

                    <div>
                      <Label>Message</Label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your requirements..."
                        className="w-full min-h-[180px] border-0 focus-visible:ring-2 focus-visible:ring-primary bg-primary/10"
                      />
                    </div>

                    <Button className="bg-primary text-white cursor-pointer mt-2 hover:bg-primary/90">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;