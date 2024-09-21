// src/components/TeeTimeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeeTimeList = () => {
  const [teeTimes, setTeeTimes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/tee-times')
      .then(response => {
        setTeeTimes(response.data.teeTimes);
      })
      .catch(error => {
        console.error('Error fetching tee times:', error);
      });
  }, []);

  return (
    <div>
      <h1>Tee Times</h1>
      <ul>
        {teeTimes.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeeTimeList;