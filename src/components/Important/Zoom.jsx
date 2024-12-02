// // ZoomMeeting.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Zoom = () => {
//   const [meetingData, setMeetingData] = useState({
//     topic: '',
//     start_time: '',
//     duration: 30,
//     password: '',
//   });
//   const [meetingUrl, setMeetingUrl] = useState(null);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMeetingData({ ...meetingData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setMeetingUrl(null);

//     try {
//       const response = await axios.post('http://192.168.29.50:8081/zoom/meeting', meetingData);
//       setMeetingUrl(response.data.join_url);
//     } catch (err) {
//       setError('Failed to create meeting. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Zoom Meeting</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="topic">
//               Topic
//             </label>
//             <input
//               type="text"
//               name="topic"
//               id="topic"
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="start_time">
//               Start Time
//             </label>
//             <input
//               type="datetime-local"
//               name="start_time"
//               id="start_time"
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="duration">
//               Duration (minutes)
//             </label>
//             <input
//               type="number"
//               name="duration"
//               id="duration"
//               min="0"
//               value={meetingData.duration}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-md mt-4 hover:bg-indigo-700 transition"
//           >
//             Create Meeting
//           </button>
//         </form>
//         {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
//         {meetingUrl && (
//           <div className="mt-4">
//             <p className="text-sm text-green-500">Meeting created successfully!</p>
//             <a
//               href={meetingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-indigo-600 hover:underline"
//             >
//               Join Meeting
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };




// export default Zoom;
// 
// import React, { useState } from "react";
// import axios from "axios";

// const Zoom = () => {
//   const [authorizationUrl, setAuthorizationUrl] = useState("");
//   const [userInfo, setUserInfo] = useState(null);
//   const [error, setError] = useState("");

//   // Fetch Zoom authorization URL from the backend  
//   const getAuthorizationUrl = async () => {
//     try {
//       const response = await axios.get("http://192.168.29.50:8081/zoom/auth");
//       setAuthorizationUrl(response.data.authorization_url);
//     } catch (err) {
//       console.error("Error fetching Zoom auth URL:", err);
//       setError("Failed to get Zoom authorization URL.");
//     }
//   };

//   // Handle Zoom callback with the authorization code
//   const handleZoomCallback = async (code) => {
//     try {
//       const response = await axios.get(`http://192.168.29.50:8081/zoom/callback?code=${code}`);
//       setUserInfo(response.data.user_info);
//     } catch (err) {
//       console.error("Error fetching user info:", err);
//       setError("Failed to get user info.");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4">Zoom OAuth Integration</h1>
      
//       {error && <div className="bg-red-100 p-4 rounded text-red-700 mb-4">{error}</div>}

//       {!authorizationUrl && (
//         <button
//           className="bg-blue-500 text-white p-2 rounded"
//           onClick={getAuthorizationUrl}
//         >
//           Get Zoom Authorization URL
//         </button>
//       )}

//       {authorizationUrl && (
//         <div className="mb-4">
//           <a
//             className="text-blue-600"
//             href={authorizationUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Click here to authenticate with Zoom
//           </a>
//         </div>
//       )}

//       {userInfo && (
//         <div className="mt-6 p-4 border rounded bg-gray-100">
//           <h2 className="font-bold text-xl">User Info</h2>
//           <pre>{JSON.stringify(userInfo, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Zoom;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {Link} from 'react-router-dom'

// const Zoom = () => {
//   const [authorizationUrl, setAuthorizationUrl] = useState("");
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [meetingLink, setMeetingLink] = useState("");
//   const [error, setError] = useState("");

//   // Fetch Zoom authorization URL from the backend

//   console.log(authorizationUrl,"____authorizationUrl_____")
//   const getAuthorizationUrl = async () => {
//     try {
//       const response = await axios.get("http://192.168.29.50:8081/zoom/auth");
//       console.log(response.data,"____urldata")
//       setAuthorizationUrl(response.data.msg);
//     } catch (err) {
//       console.error("Error fetching Zoom auth URL:", err);
//       setError("Failed to get Zoom authorization URL.");
//     }
//   };

//   // Check if we have an authorization token
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");
//     if (code) {
//       handleZoomCallback(code);
//     }
//   }, []);

//   const handleZoomCallback = async (code) => {
//     try {
//       const response = await axios.get(`http://192.168.29.50:8081/zoom/callback?code=${code}`);
//       if (response.data) {
//         setIsAuthorized(true);
//       } else {
//         setError("Authorization failed.");
//       }
//     } catch (err) {
//       console.error("Error during callback handling:", err);
//       setError("Failed to process authorization callback.");
//     }
//   };

//   // Create a new meeting
//   const createMeeting = async () => {
//     try {
//       const response = await axios.get("http://192.168.29.50:8081/zoom/create-meeting");
//       if (response.data.link) {
//         setMeetingLink(response.data.link);
//       } else {
//         setError("Failed to create meeting.");
//       }
//     } catch (err) {
//       console.error("Error creating meeting:", err);
//       setError("Failed to create meeting.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Zoom Meeting Scheduler</h1>

//         {error && (
//           <div className="bg-red-100 p-3 rounded text-red-700 mb-4">
//             {error}
//           </div>
//         )}

//         {!isAuthorized ? (
//           <div className="text-center">
//             <p className="text-gray-700 mb-4">Authorize with Zoom to create a meeting.</p>
//             <button
//               onClick={getAuthorizationUrl}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//             >
//               Get Zoom Authorization URL
//             </button>

//           </div>
//         ) : (
//           <div className="text-center">
//             <p className="text-gray-700 mb-4">You are authorized with Zoom!</p>
//             <button
//               onClick={createMeeting}
//               className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
//             >
//               Create Zoom Meeting
//             </button>
//           </div>
//         )}

//         {authorizationUrl && (
//           <div className="mt-4 text-center">
//             <a
//               href={authorizationUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               Click here to authenticate with Zoom
//             </a>
//           </div>
//         )}

//         {meetingLink && (
//           <div className="mt-6 p-4 bg-green-100 rounded text-green-700 text-center">
//             <p className="font-semibold">Meeting Created Successfully!</p>
//             <a
//               href={meetingLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline mt-2 block"
//             >
//               Join Meeting
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Zoom;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, Navigate, useNavigate } from "react-router-dom";

// const Zoom = () => {
//   const [authUrl, setAuthUrl] = useState(""); 
//   const [meetingLink, setMeetingLink] = useState(false);
//   const [meetingURL,setMeetingURL] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Start Zoom OAuth process
//   const handleAuth = async () => {

    
//     try {
//       const authResponse = await axios.get("http://192.168.29.50:8081/zoom/auth");
//       const url = authResponse.data;
//       console.log(authResponse);
//       console.log(url);
//       if (url) {
//         setAuthUrl(url)
//         setMeetingLink(true)
//         setMeetingURL(false)
//         // setAuthUrl(url); // Store the auth URL
//       } else {
//         setErrorMessage("Authorization URL is missing in the response.");
//       }
//     } catch (error) {
//       setErrorMessage("Failed to authenticate with Zoom.");
//     }
//   };

//   // Call this function to create a meeting after authentication
//   const handleCreateMeeting = async () => {
//     try {
//       const response = await axios.get("http://192.168.29.50:8081/zoom/create-meeting");
//       if (response.data.link) {
//         setMeetingURL(response.data.link); 
//         setMeetingURL(true)
//       } else {
//         setErrorMessage("Failed to create a meeting.");
       
//       }
//     } catch (error) {
//       setErrorMessage("Failed to create a meeting.");
//     }
//     Navigate("http://192.168.29.50:8081/zoom")
//   };
// console.log(meetingLink,"___meetignLinkg____")
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-4">
//       <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 space-y-6">
//         <h1 className="text-2xl font-semibold text-center text-blue-500">Zoom Integration</h1>

//         {/* Authentication Button */}
//        { !meetingLink ?  <button
//           onClick={handleAuth}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//         >
//           Get Zoom Authorization URL
//         </button>:
//         <Link
//           to={authUrl}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//         >
//           Meeting URL
//         </Link>}

//         {/* Display Authorization URL Link */}
//         {/* {authUrl && (
//           <a
//             href={authUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Authorize Zoom
//           </a>
//         )} */}

//         {/* Create Meeting Button */}
//         {authUrl && !meetingURL==="" ? 
//           <button
//             onClick={handleCreateMeeting}
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Create Zoom Meeting
//           </button>:
//           <Link
//            to={meetingURL}
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Open Zoom Meeting
//           </Link>
//         }

//         {/* Join Meeting Link */}
//         {/* {meetingLink && (
//           <a
//             href={meetingLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
//           >
//             Join Meeting
//           </a>
//         )} */}

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
//             <p>{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Zoom;
import React from 'react';

const CLIENT_ID = 'UHUTrwMlSxGhSJdZncsQ8w';
const REDIRECT_URI = 'http://198.168.29.94:5173/callback'; 
const AUTH_URL = `https://zoom.us/oauth/authorize?client_id=UHUTrwMlSxGhSJdZncsQ8w&response_type=code&redirect_uri=http%3A%2F%2F192.168.29.50%3A8081%2Fzoom%2Fcallback`;

const Zoom = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center max-w-lg mx-auto p-8 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-lg">
        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
         Welcome To Skillkronos
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Sign in to join a meeting or create your own!
        </p>
        <a
          href={AUTH_URL}
          className="w-full inline-block py-3 px-6 text-center bg-blue-500 text-lg font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 shadow-lg animate__animated animate__zoomIn"
        >
          Join Meeting
        </a>
        <p className="mt-6 text-sm">
          By signing in, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Zoom;
