import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  return (
    <div className="bg-[#000957] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8">
            Simple steps to start selling or shopping on our platform
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold text-secondary">For Stores</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">1</span>
                <p className="text-gray-600">Register your store and complete verification</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">2</span>
                <p className="text-gray-600">List your products and set up your digital storefront</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">3</span>
                <p className="text-gray-600">Start receiving orders and grow your business</p>
              </li>
            </ol>
            <Button className="mt-4 border-2 text-center bg-[#000957] hover:bg-[#e6ecf0] hover:text-black hover:border-[#000957] hover:border-2">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold text-secondary">For Customers</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">1</span>
                <p className="text-gray-600">Download the app and create an account</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">2</span>
                <p className="text-gray-600">Browse products from nearby stores</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000957] text-white font-semibold">3</span>
                <p className="text-gray-600">Place orders and enjoy quick delivery</p>
              </li>
            </ol>
            <Button className="mt-4 border-2 text-center bg-[#000957] hover:bg-[#e6ecf0] hover:text-black hover:border-[#000957] hover:border-2">
              Start Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};