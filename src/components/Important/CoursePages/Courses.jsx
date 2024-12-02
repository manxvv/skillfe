import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import User from '../UserDashboard/User';

const Courses = () => {
  const navigate = useNavigate(); 

  const categories = [
    {
      id: 1,
      title: 'Technical Skills',
      items: [
        'Coding & Algorithms',
        'Data Structures',
        'Database Management',
        'System Design',
        'Web Development',
        'Cloud Computing & DevOps',
        'Machine Learning & AI',
      ],
    },
    {
      id: 2,
      title: 'Behavioral Skills',
      items: [
        'Common HR Questions',
        'STAR Method (Situation, Task, Action, Result)',
        'Communication Skills',
        'Teamwork and Collaboration',
        'Leadership Skills',
        'Problem-solving and Critical Thinking',
      ],
    },
    {
      id: 3,
      title: 'Industry-Specific Preparation',
      items: [
        'IT & Software',
        'Finance & Accounting',
        'Marketing & Sales',
        'Healthcare',
        'Engineering',
      ],
    },
    {
      id: 4,
      title: 'Role-Specific Preparation',
      items: [
        'Software Engineer/Developer',
        'Data Scientist',
        'Project Manager',
        'Business Analyst',
        'Designer (UX/UI, Graphic Design)',
      ],
    },
    {
      id: 5,
      title: 'Aptitude and Logical Reasoning',
      items: [
        'Numerical Aptitude',
        'Logical Reasoning',
        'Verbal Ability',
      ],
    },
    {
      id: 6,
      title: 'Mock Interviews and Practice',
      items: [
        'Mock Interview Simulations',
        'Coding Challenges and Practice Tests',
        'Behavioral Interview Practice Questions',
        'Role-Playing Scenarios for Real-World Situations',
      ],
    },
  ];

  const handleRedirect = (category) => {
    navigate("/subscription");
  };

  return (
    <>
      {/* <User /> */}
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Interview Preparation Categories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: category.id * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-4">{category.title}</h2>
              <ul className="pl-5 space-y-2 list-none">
                {category.items.map((item, index) => (
                  <motion.li
                    key={index}
                    onClick={() => handleRedirect(item)} 
                    className="cursor-pointer hover:text-indigo-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
