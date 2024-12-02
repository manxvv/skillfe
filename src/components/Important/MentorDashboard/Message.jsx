import React from 'react';
import { motion } from 'framer-motion';
import Mentot from './Mentot';

const Message = () => {
  const mockMessages = [
    { id: 1, sender: 'Alice', message: 'Hey, how are you?', timestamp: '2024-11-10 10:00 AM' },
    { id: 2, sender: 'Bob', message: 'Meeting rescheduled for 3 PM.', timestamp: '2024-11-10 11:00 AM' },
    { id: 3, sender: 'Charlie', message: 'Can you send me the report?', timestamp: '2024-11-10 12:00 PM' },
    { id: 4, sender: 'David', message: 'Let’s catch up tomorrow!', timestamp: '2024-11-10 01:00 PM' },
    { id: 5, sender: 'Eve', message: 'Happy birthday!', timestamp: '2024-11-10 02:00 PM' },
  ];

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
        Messages
      </motion.h1>

      {/* Messages List */}
      <div className="space-y-4">
        {mockMessages.map((message, index) => (
          <motion.div
            key={message.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Message Content */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">{message.sender}</h3>
              <p className="text-gray-600">{message.message}</p>
              <p className="text-sm text-gray-400">{message.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Message;
