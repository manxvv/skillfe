import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Mentot from './Mentot';

const Setting = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
    notifications: true,
    privacy: 'public'
  });

  const [showModal, setShowModal] = useState(false);  // Modal visibility state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the modal with the success message
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);  // Close modal
  };

  return (
    <>
    <Mentot />
    <div className="p-8">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Settings
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
                placeholder="••••••••"
              />
            </div>
          </div>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="privacy" className="block text-sm font-medium text-gray-700">
                Profile Visibility
              </label>
              <select
                id="privacy"
                name="privacy"
                value={user.privacy}
                onChange={handleChange}
                className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={user.notifications}
                onChange={handleChange}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="notifications" className="text-sm font-medium text-gray-700">
                Enable Email Notifications
              </label>
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Save Changes
        </motion.button>
      </form>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-center text-green-500">Settings Saved!</h2>
            <p className="mt-4 text-center text-gray-600">Your changes have been successfully saved.</p>
            <div className="mt-6 text-center">
              <motion.button
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
                onClick={closeModal}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
    </>
  );
};

export default Setting;
