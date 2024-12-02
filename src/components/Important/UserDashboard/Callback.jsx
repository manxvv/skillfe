import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const [accessToken, setAccessToken] = useState('');
  const [meeting, setMeeting] = useState(null);

  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  useEffect(() => {
    if (code) {
     
      axios
        .post('http://198.168.29.50:8081/zoom/callback', { code })
        .then(response => {
          setAccessToken(response.data.access_token);
        })
        .catch(error => {
          console.error('Error fetching token:', error);
        });
    }
  }, [code]);

  const createMeeting = () => {
    if (accessToken) {
      axios
        .post('http://198.168.29.50:8081/api/zoom/meetings', {}, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then(response => {
          setMeeting(response.data);
        })
        .catch(error => {
          console.error('Error creating meeting:', error);
        });
    }
  };

  return (
    <div className="callback">
      {accessToken ? (
        <div>
          <button onClick={createMeeting}>Create Meeting</button>
          {meeting && (
            <div>
              <h3>Meeting Created:</h3>
              <p>Meeting ID: {meeting.id}</p>
              <p>Topic: {meeting.topic}</p>
              <p>Start Time: {new Date(meeting.start_time).toLocaleString()}</p>
              <p>
                Join URL:{' '}
                <a href={meeting.join_url} target="_blank" rel="noopener noreferrer">
                  Join the Meeting
                </a>
              </p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Callback;
