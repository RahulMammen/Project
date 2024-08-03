import React, { useState } from 'react';
import '../styles/AdminDashboard.css';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'



function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header  />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  );
}


export default AdminDashboard;
