import io from 'socket.io-client';
import { baseUrl } from './url';
import { useState , useEffect } from 'react';
// const socket = io(baseUrl);

const socket = () => {
    io.connect(baseUrl, {
        transports: ['websocket', 'polling'],
    })
}
export default socket;