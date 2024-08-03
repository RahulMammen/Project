import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import personImage from '../assets/person.png'; // Make sure the path is correct

const Navbar = ({ isAuthenticated, isAdmin, onLogout }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      // Scrolling up
      setShowNavbar(true);
    } else {
      // Scrolling down
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-logo">
        <Link to="/">EventManager</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/user-profile">Profile</Link>
            {isAdmin && <Link to="/admin-dashboard">Admin Dashboard</Link>}
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/user-profile" className="profile-link">
              <button>
                <img src={personImage} alt="Profile" />
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
