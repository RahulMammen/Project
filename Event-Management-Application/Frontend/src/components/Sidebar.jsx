import React from 'react';
import { Link } from 'react-router-dom';
import { BsCalendarEvent, BsFillPeopleFill, BsFillPlusCircleFill, BsFillGearFill, BsBoxArrowRight } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCalendarEvent className='icon_header' /> EVENTS
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/admin-dashboard">
            <BsCalendarEvent className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/events">
            <BsCalendarEvent className='icon' /> Events
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/add-event">
            <BsFillPlusCircleFill className='icon' /> Add Event
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/users">
            <BsFillPeopleFill className='icon' /> Users
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings">
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/logout" onClick={() => alert('Logged out')}>
            <BsBoxArrowRight className='icon' /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
