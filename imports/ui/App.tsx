import React from 'react';
import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom'
import Navbar from './components/Navbar';

import LandingPage from './pages/LandingPage'
import SignupPage from './pages/SignupPage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => (
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
      <ToastContainer />
  </Router>
);
