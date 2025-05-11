// MyCourses.jsx
import React from 'react';

const MyCourses = () => {
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Your Purchased Course</h2>
      <p>Thank you for purchasing!</p>
      <video width="100%" controls>
        <source src="/client/public/harvard.mkv" type="video/mp4" />
        Your browser does not support video playback.
      </video>
    </div>
  );
};

export default MyCourses;
