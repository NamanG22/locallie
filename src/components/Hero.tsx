import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#000957] to-[#074799]"></div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-bold leading-tight"
        >
          Welcome to Locallie,
          <br />
          <span className="text-primary text-5xl sm:text-7xl">Your Neighborhood Online</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto opacity-80"
        >
          Empowering local grocery stores to thrive in the digital world.  
          <br /> Part of the ONDC initiative, bringing convenience to your doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="group bg-[#e6ecf0] text-black hover:bg-white hover:text-[#000957] transition-all"
          >
            Join Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="bg-[#e6ecf0] text-black hover:bg-white hover:text-[#000957] transition-all"
          >
            Know More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
