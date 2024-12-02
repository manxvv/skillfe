import React from 'react';
import { motion } from 'framer-motion';
import Mentot from './Mentot';

const MentorProfile = () => {
  // Mentor data (you can replace it with dynamic data)
  const mentor = {
    name: 'Ayush',
    bio: 'A passionate mentor with expertise in web development, data science, and AI. Helping students grow in their careers.',
    src: 'admin.jpg', // Profile image
    courses: ['Web Development', 'Data Science', 'Artificial Intelligence'],
    mentees: [
      { name: 'Mentee One', email: 'mentee1@gmail.com' },
      { name: 'Mentee Two', email: 'mentee2@gmail.com' },
      { name: 'Mentee Three', email: 'mentee3@gmail.com' },
    ]
  };

  return (
    <>
    {/* <Mentot /> */}
    <div className="p-8">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mentor Profile
      </motion.h1>

      {/* Mentor Profile Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 mb-10">
        <motion.img
          src={mentor.src}
          alt="Mentor"
          className="h-32 w-32 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h2 className="text-2xl font-semibold">{mentor.name}</h2>
          <p className="text-gray-600 mt-2">{mentor.bio}</p>
        </div>
      </div>

      {/* Mentor Courses */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4">Courses Taught</h3>
        <ul className="list-disc pl-5">
          {mentor.courses.map((course, idx) => (
            <li key={idx} className="text-gray-700">{course}</li>
          ))}
        </ul>
      </motion.div>

      {/* Mentees List */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4">Mentees</h3>
        <div className="space-y-4">
          {mentor.mentees.map((mentee, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold">{mentee.name}</h4>
              <p className="text-gray-600">{mentee.email}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default MentorProfile;
