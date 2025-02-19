import { motion } from "framer-motion";

export const Problem = () => {
  return (
    <div className="flex flex-col">
      <div className="container py-20 flex lg:flex-row gap-12 bg-white">
        {/* Left Section (Title & Description) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/3 flex flex-col"
        >
          <h2 className="text-6xl font-bold mb-4 text-gray-800 cinzel-decorative-regular leading-relaxed">The Problem We Solve</h2>
          <p className="text-lg text-gray-600 my-4">
            Local businesses struggle to go digital, missing opportunities.  
            We bridge the gap, enabling smooth online experiences.
          </p>
          <button className="mt-12 learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </motion.div>

        <div className="lg:w-2/3 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <img src="/images/problem-1.jpg" alt="Problem" className="w-full lg:w-1/2 rounded-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">High Operational Costs</h3>
              <div className="w-32 h-[1px] bg-[#000957] my-2"></div> {/* Decorative Line */}
              <p className="mt-2 text-gray-600">
              Maintaining dark stores in prime urban locations incurs significant rent and operational expenses.
              Fleet management and compensating gig workers add to recurring costs.
              </p>
            </div>
          </motion.div>

          {/* Text-Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Unsustainable Margins</h3>
              <div className="w-32 h-[1px] bg-black my-2"></div> {/* Decorative Line */}
              <p className="mt-2 text-gray-600">
              Heavy discounts and promotions to attract customers lead to razor-thin or negative profit margins.
              Dependency on external funding for scalability raises questions about long-term sustainability.
              </p>
            </div>
            <img src="/images/problem-2.jpg" alt="Problem" className="w-full lg:w-1/2 rounded-lg" />
          </motion.div>

          {/* Image-Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <img src="/images/problem-3.jpg" alt="Problem" className="w-full lg:w-1/2 rounded-lg" />
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Workforce Exploitation</h3>
              <div className="w-32 h-[1px] bg-[#000957] my-2"></div> {/* Decorative Line */}
              <p className="mt-2 text-gray-600">
              Gig workers face intense pressure to meet delivery timelines, leading to unsafe working conditions.
              Inconsistent pay and lack of benefits lead to high attrition rates among delivery personnel.
              </p>
            </div>
          </motion.div>

          {/* Text-Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Scalability</h3>
              <div className="w-32 h-[1px] bg-[#000957] my-2"></div> {/* Decorative Line */}
              <p className="mt-2 text-gray-600">
              Quick commerce models struggle to scale effectively in Tier-3 cities and rural areas due to low demand density and logistical constraints.
              </p>
            </div>
            <img src="/images/problem-4.jpg" alt="Problem" className="w-full lg:w-1/2 rounded-lg" />
          </motion.div>
        </div>
      </div>

      {/* <div className="mx-auto w-[70%]">
        <h1 className="text-center text-4xl">
          The Biggest Problem of all
        </h1>
        <div className="flex">
          <img src="/images/problem-1.jpg" alt="Problem" className="w-full lg:w-1/2 rounded-lg" />
          <div className="flex flex-col lg:w-1/2 m-4">
            <h2>Decline of Kirana Stores</h2>
            <div className="w-32 h-[1px] bg-black my-2"></div>
            <p>
            Kirana stores have long been the backbone of India’s retail ecosystem, serving millions with essential goods and fostering a sense of community.
            However, the rise of quick commerce platforms like Zepto, Blinkit, and Swiggy Instamart is causing a rapid decline in foot traffic and revenue for these traditional stores.
            </p>
          </div>
        </div>
      </div>  */}
    </div>
  );
};
