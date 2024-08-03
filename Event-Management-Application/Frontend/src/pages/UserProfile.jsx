import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId'); // Assuming you store userId in localStorage
        if (!token || !userId) {
          throw new Error('User not authenticated');
        }

        const response = await axios.get(`http://localhost:4000/api/auth/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching user details');
      }
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-box">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Contact Number: {user.contactNumber}</p>
        <p>Events Registered: {user.eventsRegistered}</p>
        <Link to="/user-profile-edit">
          <button className="edit-button">Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
