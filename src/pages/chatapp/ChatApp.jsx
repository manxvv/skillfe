import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://10.5.50.122:8093'; // Your Flask server endpoint

const socket = io(ENDPOINT);

const App = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const room = 'room_name'; 

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
            socket.emit('join', { room });
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('receive_message', (message) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        return () => {
            socket.emit('leave', { room });
            socket.disconnect();
        };
    }, []);

    const handleMessageSend = () => {
        if (input.trim() !== '') {
            socket.emit('send_message', { room, message: input });
            setInput('');
        }
    };

    return (
        <div>
            <h1>Chat App</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter message..."
            />
            <button onClick={handleMessageSend}>Send</button>
        </div>
    );
};

export default App;
