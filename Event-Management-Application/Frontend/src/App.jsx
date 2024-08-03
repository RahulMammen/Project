import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';
import EventDetails from './pages/EventDetails';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import UserProfileEdit from './pages/UserProfileEdit';
import Navbar from './components/Navbar';
import AddEvent from './pages/AddEvent';

function App() {
  const location = useLocation();
  const hideNavbarFooter = ['/login', '/signup', '/admin-login', '/admin-dashboard'].includes(location.pathname);

  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Check if user is an admin

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={isAuthenticated ? <HomePage /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/signup' element={<SignUpPage />} />
        {/* <Route path='/admin-dashboard' element={isAdmin ? <AdminDashboard/> : <Navigate to='/admin-login' />} /> */}
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/user-profile' element={isAuthenticated ? <UserProfile /> : <Navigate to='/login' />} />
        <Route path='/event/:eventId' element={isAuthenticated ? <EventDetails /> : <Navigate to='/login' />} />
        <Route path='/user-profile-edit' element={isAuthenticated ? <UserProfileEdit /> : <Navigate to='/login' />} />
        <Route path='/add-event' element={<AddEvent/>} />
        <Route path='*' element={<Navigate to='/' />} /> {/* Redirect unknown routes to home */}
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
