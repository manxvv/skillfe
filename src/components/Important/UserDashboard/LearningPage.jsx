import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import User from './User';

function LearningPage() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          You don't have any purchased plan
        </h2>
        <p className="text-gray-600 mb-8">
          To access the learning materials, please subscribe to one of our plans.
        </p>
        <Link to="/subscription">
          <motion.button
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
    </>
  );
}

export default LearningPage;
