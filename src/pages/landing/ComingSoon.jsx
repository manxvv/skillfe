import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br w-full from-blue-600 to-purple-600 flex items-center justify-center text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-4">
          We're working on something amazing. Stay tuned!
        </p>

        {/* Email Subscription */}
        <div className="max-w-md mx-auto">
          {/* <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md"
            >
              Notify Me
            </button>
          </form> */}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-300">
          © {new Date().getFullYear()} Skillkronos. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
