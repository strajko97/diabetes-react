import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this line to import Routes and Route
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nama" element={<AboutUs />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;





