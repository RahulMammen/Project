import React, { useState } from 'react';
import '../styles/UserProfileEdit.css'; // Import your CSS file

export default function UserProfileEdit() {
  const defaultProfilePhoto = 'https://img.freepik.com/premium-vector/avatar-profile-pink-neon-icon-brick-wall-background-colour-neon-vector-icon_549897-254.jpg'

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    contactNumber: '',
    profilePhoto: defaultProfilePhoto
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, profilePhoto: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="profile-photo-container">
          <img src={formData.profilePhoto} alt="Profile" className="profile-pic2" />
          <label htmlFor="profilePhoto" className="upload-button">ADD </label>
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
        </div>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
