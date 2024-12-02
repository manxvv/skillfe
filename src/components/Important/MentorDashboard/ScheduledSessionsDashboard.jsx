import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Mentot from './Mentot';

const initialSessions = [
  { mentee: 'Mentee One', course: 'Coding & Algorithms', date: '2024-11-15', time: '10:00 AM', status: 'Scheduled', activeStudents: 8, totalStudents: 15, joinedStudents: 5 },
  { mentee: 'Mentee Two', course: 'Data Structures', date: '2024-11-16', time: '2:00 PM', status: 'Scheduled', activeStudents: 10, totalStudents: 20, joinedStudents: 12 },
  { mentee: 'Mentee Three', course: 'Web Development', date: '2024-11-17', time: '1:00 PM', status: 'Completed', activeStudents: 12, totalStudents: 18, joinedStudents: 10 },
];

const ScheduledSessionsDashboard = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [sessions, setSessions] = useState(initialSessions);
  const [selectedSession, setSelectedSession] = useState(null);
  const navigate = useNavigate();

  const handleCreateMeeting = () => {
    navigate('/create-meeting'); // Navigate to /test route directly
  };

  const handleViewDetails = (session) => {
    setSelectedSession(session);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedSession(null);
  };

  return (
    <>
      {/* <Mentot /> */}
      <div className="p-8 bg-gray-50 min-h-screen">
        <motion.h1
          className="text-4xl font-bold mb-10 text-center text-indigo-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Scheduled Sessions
        </motion.h1>

        <motion.button
          className="bg-green-500 text-white py-2 px-4 rounded-md mb-6 hover:bg-green-600"
          whileHover={{ scale: 1.05 }}
          onClick={handleCreateMeeting} // Trigger navigation on button click
        >
          Create Module
        </motion.button>

        <div className="overflow-x-auto">
          <motion.table
            className="min-w-full table-auto bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Mentee</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Course</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="border-b hover:bg-indigo-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{session.mentee}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{session.course}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{session.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{session.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        session.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <motion.button
                      className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleViewDetails(session)}
                    >
                      View Details
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>

      {/* Modal for View Details */}
      {isDetailsModalOpen && selectedSession && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Session Details</h2>
            <p className="text-sm mb-2">Mentee: {selectedSession.mentee}</p>
            <p className="text-sm mb-2">Course: {selectedSession.course}</p>
            <p className="text-sm mb-2">Date: {selectedSession.date}</p>
            <p className="text-sm mb-2">Time: {selectedSession.time}</p>
            <p className="text-sm mb-2">Status: {selectedSession.status}</p>
            <button
              onClick={handleCloseDetailsModal}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-4"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ScheduledSessionsDashboard;
