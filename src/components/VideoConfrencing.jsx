import React, { useRef, useEffect } from 'react';

const VideoConfrencing = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    useEffect(() => {
        const startVideoChat = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = stream;

            // Your code for signaling and establishing connection with peers
        };

        startVideoChat();

        return () => {
            // Cleanup code
        };
    }, []);



    {/* <div>
      <video ref={localVideoRef} autoPlay muted></video>
      <video ref={remoteVideoRef} autoPlay></video>
    </div> */}

    return (


        <div className='flex '>

            <video ref={localVideoRef} autoPlay muted></video>
            <video ref={localVideoRef} autoPlay muted></video>
            <video ref={localVideoRef} autoPlay muted></video>
        </div>
    );
};

export default VideoConfrencing;
