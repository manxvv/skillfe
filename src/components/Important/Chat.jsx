import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Chat component
const Chat = () => {
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // Assuming you store JWT in localStorage
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://192.168.29.50:8081/chat/userlist', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserList(response.data.users);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };
    fetchUsers();
  }, [token]);


  const fetchMessages = async (senderId, receiverId) => {
    try {
      const response = await axios.get(
        `http://192.168.29.50:8081/chat/getMessage/${senderId}/${receiverId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (newMessage && selectedUser) {
      try {
        const response = await axios.post(
          'http://192.168.29.50:8081/chat/message',
          {
            receiver: selectedUser,
            content: newMessage,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessages([...messages, response.data.data]);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center p-8"
      >
        <h2 className="text-3xl text-white mb-4">Chat Application</h2>
        
        {/* User List */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-1/3 p-4 mb-6">
          <h3 className="text-xl font-semibold mb-4">Users</h3>
          <ul className="space-y-3">
            {userList.map((user) => (
              <li
                key={user.userId}
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                onClick={() => {
                  setSelectedUser(user.userId);
                  fetchMessages('currentUserId', user.userId);
                }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg shadow-lg w-full md:w-2/3 p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Chat with {selectedUser}</h3>
            <div className="h-64 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg">
              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`my-2 p-2 rounded-lg ${
                    message.sender === 'currentUserId' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                  }`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full p-2 border rounded-lg mr-2"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Chat;
