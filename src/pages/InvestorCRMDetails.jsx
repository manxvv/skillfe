import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { baseUrl } from "../utils/url";

const InvestorCRMDetails = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentee, setSelectedMentee] = useState(null);

  const mentees = [
    {
      name: "Mentee One",
      email: "mentee1@gmail.com",
      src: "mentee1.jpg",
      courses: ["Coding & Algorithms", "Web Development"],
    },
    {
      name: "Mentee Two",
      email: "mentee2@gmail.com",
      src: "mentee2.jpg",
      courses: ["Data Structures", "Machine Learning"],
    },
    {
      name: "Mentee Three",
      email: "mentee3@gmail.com",
      src: "mentee3.jpg",
      courses: ["Cloud Computing", "Cybersecurity Basics"],
    },
    // Add more mentees as needed
  ];

  // Function to handle "Buy Now" button click
  const handleViewDetails = (mentee) => {
    setSelectedMentee(mentee);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMentee(null);
  };

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const endpoint = `${baseUrl}/get_courses`;
    fetchData(endpoint).then((result) => {
      setCourses(result?.courses || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-gray-600 animate-pulse">
          Loading courses...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-600">
        Available Courses
      </h1>
      <div  className="grid gap-8  md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <motion.div
            key={course.course_id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {course.course_name}
              </h2>
              <p className="text-gray-600 mb-3">
                <strong>Description:</strong> {course.course_description}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Price:</strong> ${course.course_price}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Start Date:</strong> {course.course_start_date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Timing:</strong> {course.course_timing}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Days:</strong> {course.course_days_of_week.join(", ")}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Mentor Email:</strong>{" "}
                {course.mentor_email ? course.mentor_email : "Not available"}
              </p>
            </div>
            <div className="bg-blue-50 p-4 text-center">
              <button
                onClick={() => handleViewDetails(mentees[0])} // Pass mentee data
                className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition-colors"
              >
View Details              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMentee && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleCloseModal} 
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-2xl font-semibold mb-4">Mentee Details</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Courses</h3>
              <ul className="list-disc pl-5 mb-4">
                {selectedMentee.courses.map((course, idx) => (
                  <li key={idx} className="text-gray-700">
                    {course}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-2">Mentee Information</h3>
              <p className="text-gray-700">Name: {selectedMentee.name}</p>
              <p className="text-gray-700">Email: {selectedMentee.email}</p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default InvestorCRMDetails;
