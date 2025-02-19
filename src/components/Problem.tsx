const Problem = () => {
    return (
      <section 
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/problem-bg.jpg')" }} // Add a relevant image in your public folder
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
            The Problem
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mt-6 leading-relaxed">
            Small Kirana stores struggle with online visibility and competition from big brands.
            <br /> <span className="text-yellow-300 font-semibold">Locallie empowers them </span> 
             with the tools to succeed in the digital age.
          </p>
        </div>
      </section>
    );
  };
  
  export default Problem;
  