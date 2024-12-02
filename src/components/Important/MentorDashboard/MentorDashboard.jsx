import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Mentot from './Mentot';
// import MentorCoursel from './Cousels/MentorCorsel';


const MentorDashboard = () => {
  const courses = [
    { title: 'Introduction to Mentoring', videoUrl: 'https://www.example.com/mentor-video1', description: 'Learn how to guide and mentor students effectively.' },
    { title: 'Effective Communication Skills', videoUrl: 'https://www.example.com/mentor-video2', description: 'Master the art of clear and impactful communication.' },
    { title: 'Building a Learning Community', videoUrl: 'https://www.example.com/mentor-video3', description: 'Create an inclusive and supportive learning environment.' },
    { title: 'Providing Feedback', videoUrl: 'https://www.example.com/mentor-video4', description: 'Learn how to provide constructive and helpful feedback.' },
    { title: 'Advanced Mentoring Techniques', videoUrl: 'https://www.example.com/mentor-video5', description: 'Explore advanced strategies for effective mentoring.' },
    { title: 'Career Development for Mentees', videoUrl: 'https://www.example.com/mentor-video6', description: 'Guide your mentees through career development processes.' },
  ];

  return (
    <>
      {/* <Mentot /> */}
      {/* <MentorCoursel /> */}
      <div className="p-8">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mentor Dashboard
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h2
                className="text-xl font-semibold mb-4"
                whileHover={{ color: '#1D4ED8' }}
              >
                {course.title}
              </motion.h2>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <motion.video
                src={course.videoUrl}
                controls
                className="w-full rounded-lg mb-4"
                whileHover={{ scale: 1.02 }}
              />
              <motion.button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                whileHover={{ scale: 1.1 }}
                // onClick={() => alert(`Course: ${course.title}`)}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
