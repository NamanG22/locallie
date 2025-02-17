const ReviewsFAQs = () => {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Reviews & FAQs</h2>
        <div className="max-w-3xl mx-auto mt-6 space-y-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="text-gray-700">
              <strong>Q:</strong> How does Locallie help local stores? <br />
              <strong>A:</strong> We provide an easy-to-use digital platform to list products, 
              accept payments, and manage deliveries.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="text-gray-700">
              <strong>Q:</strong> Is Locallie free to use? <br />
              <strong>A:</strong> We offer free sign-up with affordable transaction fees.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ReviewsFAQs;
  