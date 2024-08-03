// src/components/Footer.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight < document.body.scrollHeight - 100) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
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
    <footer className={`footer ${showFooter ? 'visible' : 'hidden'}`}>
      <p>&copy; 2024 EventManager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

