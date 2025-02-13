import { useState, useEffect } from "react";
import { ArrowRight, Store, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {

  return (
    <div className="relative overflow-hidden bg-white h-screen">
      
      <div className="absolute inset-0 bg-[#000957]"></div>
      <div className="relative z-10 min-h-screen container mx-auto px-4 pt-32 pb-16 sm:px-6 sm:pt-52 sm:pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center animate-fade-up text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to Locallie,<br />
              <span className="text-primary text-5xl">Your Neighborhood Online</span>
            </h1>
            <p className="mt-6 text-lg">
              Connect local grocery stores with digital customers. Part of the
              ONDC initiative, bringing the convenience of online shopping to
              your neighborhood stores.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" variant="outline" className="group bg-[#e6ecf0] text-black hover:bg-[#000957] hover:text-white">
                List Your Store
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-[#e6ecf0] text-black hover:bg-[#000957] hover:text-white">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="animate-fade-down">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-primary">
                  <Store className="h-5 w-5" />
                  <span className="font-semibold">500+ Stores</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Local First</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
