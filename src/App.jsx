import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this line to import Routes and Route
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Recipe from './pages/Recipes';
import RecipeDetail from './components/Recipe/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<AboutUs />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
        <Route path="/recepti" element={<Recipe />} />
        <Route path="/recepti/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;





