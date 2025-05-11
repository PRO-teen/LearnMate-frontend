// src/pages/CourseDetails.jsx
import React from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state;

  // const selectedCourseId = course._id; // Set this before calling handleBuyNow
  // const navigate = useNavigate();


  const handleBuyNow = async () => {
    try {
      const API = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API}/api/payment/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 100 }), // ₹1 = 100 paise
      });
  
      const data = await res.json();
  
      const options = {
        key: 'rzp_test_ZqLWtR9P9GLn3s', // replace with actual key
        amount: data.amount,
        currency: data.currency,
        name: 'Course Purchase',
        description: 'Demo Course Access',
        order_id: data.id,
        handler: async function (response) {
          const verifyRes = await fetch(`${API}/api/payment/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
          });
  
          const result = await verifyRes.json();
  
          if (result.success) {
            // ✅ Redirect to My Courses page after payment
            window.location.href = '/my-courses';
          } else {
            alert('Payment failed verification');
          }
        },
        theme: {
          color: '#000',
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
    }
  };
  
  
  
  
  

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h3>More Details</h3>
      <p>{course.details || "This course will help you master the topic in-depth."}</p>
      <p>₹1</p>

      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CourseDetails;
