import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <footer className="bg-[#000957] py-8 text-white px-4">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to grow your business?
            <br />
            Join our platform today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button size="lg" variant="outline" className="bg-white text-black hover:bg-[#000957] hover:text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-[#000957] hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Locallie</h3>
              <p className="text-sm text-gray-300">Empowering local kirana stores through technology and community.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">info@locallie.com</li>
                <li className="text-gray-300">+91 9289704566</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 flex-1"
                />
                <Button variant="outline" className="text-black border-white hover:bg-[#000957] hover:text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-[200px] atma-bold tracking-wider">
            Locallie
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            © 2024 Locallie. All rights reserved.
          </div>
        </div>
    </footer>
  );
};