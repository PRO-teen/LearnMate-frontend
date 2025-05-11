// src/pages/Courses.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the basics of React.js from scratch.',
      details: 'This course includes JSX, components, props, state, and more.',
    },
    {
      id: 2,
      title: 'Node.js Advanced',
      description: 'Master backend development with Node.js.',
      details: 'Includes Express, MongoDB, REST APIs, and deployment tips.',
    },
  ];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid gray',
            borderRadius: '8px',
          }}
        >
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button
            style={{
              padding: '6px 12px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() =>
              navigate('/course-details', {
                state: { course },
              })
            }
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
