import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Weather from './pages/Weather';
import Crops from './pages/Crops';
import Profile from './pages/Profile';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-earth-50">
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/crops" element={<Crops />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </AnimatePresence>
          <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;