import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function Features() {
  return (
    <div className="md:h-screen md:py-30 md:pt-45 relative">
      <div className="flex flex-col  bg-primary px-3 w-full w-full] py-20">
        <div >
          <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-15" >

          {/* Grid One  */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="max-w-[360px] w-full text-2xl md:text-3xl lg:text-4xl text-white font-montserrat font-bold">
              How does the quick order work?
            </h1>
            <p className="text-white font-inter md:text-base opacity-80">
              You’re just a few steps away from placing your order.
            </p>

            <section>
              {/* // Box One  */}
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
                  <div className="flex gap-1 text-black/80 font-inter mt-1">
                    <b className="font-bold font-montserrat">1.</b>{" "}
                    <p> Fill out the quick order form</p>
                  </div>
                  <p className="text-xs font-inter text-gray-600">
                    Select products, quantities, and basic delivery details. No
                    long forms, just the essentials.
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-start gap-2  ">
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
                  <div className="flex gap-1 text-black/80 font-inter mt-1">
                    <b className="font-bold font-montserrat">2.</b>{" "}
                    <p> We review and confirm</p>
                  </div>
                  <p className="text-xs font-inter text-gray-600">
                    We double check availability, pricing, and timelines. If
                    anything needs clarification, we reach out fast.
                  </p>
                </div>
              </div>
              {/* Box 3  */}
              <div className="flex items-start gap-2  ">
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
                  <div className="flex gap-1 text-black/80 font-inter mt-1">
                    <b className="font-bold font-montserrat">3.</b>{" "}
                    <p> Order processing begins</p>
                  </div>
                  <p className="text-xs font-inter text-gray-600">
                    Once confirmed, we move straight into processing and
                    dispatch according to the agreed schedule..
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Grid Two  */}
          <div className="h-auto w-full md:w-[500px]  md:p-5 md:absolute top-0 rounded-xl bg-secondary border-2 border-gray-400 right-0  lg:right-30 shadow-lg shadow-black/50">
            <form>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary font-montserrat md:text-3xl font-bold">
                    Quick Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                    <div>
                      <Label>FullName</Label>
                      <Input
                        name="name"
                        type="text"
                        className="w-full   border-0
                        focus-visible:ring-2  focus-visible:ring-primary bg-primary/10"
                      />
                    </div>
                     <div>
                      <Label>Email</Label>
                      <Input
                        name="email"
                        type="text"
                        className="w-full  border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>
                  </div>
                   
                    <div className="flex gap-3">
                        <div>
                      <Label>Sku</Label>
                      <Input
                        name="sku"
                        type="text"
                        className=" w-[100px]  border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>
                       <div>
                      <Label>Qty</Label>
                      <Input
                        name="name"
                        type="qty"
                        className=" w-[100px]  border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <Input
                        name="email"
                        type="text"
                        placeholder="With Country Code"
                        className="w-full  border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>

                    <div>
                      <Label>Subject</Label>
                      <Input
                        name="email"
                        type="text"
                        className="w-full  border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>

                    <div>
                      <Label>Description</Label>
                      <Textarea
                        name="description"
                        className="w-full min-h-[180px] border-0
                        focus-visible:ring-2  focus-visible:ring-primary  bg-primary/10"
                      />
                    </div>

                    <Button className="bg-primary text-white cursor-pointer mt-2">Submit</Button>

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
