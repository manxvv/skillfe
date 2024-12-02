import React, { useState } from 'react';
import { motion } from 'framer-motion';
import User from './User';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Track loading state
  const [message, setMessage] = useState(''); // Track success/error messages

  const courses = [
    { id: 1, title: 'Coding & Algorithms', price: '$49', description: 'Improve your coding skills and problem-solving ability.' },
    { id: 2, title: 'Data Structures', price: '$59', description: 'Learn fundamental data structures and their applications.' },
    // Add more courses here...
  ];

  const buySubscription = async (courseId) => {
    setLoading(true);
    try {
      const response = await axios.post('http://192.168.29.50:8081/buy_course', {
        courseId,
        userId: 1, // Replace with actual user ID from your application
      });
      setMessage(`Successfully purchased ${response.data.courseTitle}!`);
      navigate('/zoom');
    } catch (error) {
      setMessage('Failed to complete purchase. Please try again.');
      console.error('Purchase error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = (courseId) => {
    buySubscription(courseId);
  };

  return (
    <>
      <div className="min-h-screen bg-white shadow p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Explore Our Courses</h1>
        {message && (
          <div className={`text-center mb-4 ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: course.id * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-lg font-bold text-indigo-600 mb-4">{course.price}</p>
              <motion.button
                onClick={() => handlePurchase(course.id)}
                className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Buy Now'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
