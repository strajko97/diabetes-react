import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage';
import Recipe from './pages/RecipesPage';
import RecipeDetail from './pages/RecipeDetail';
import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import DailyIntakePage from './layouts/profile/DailyIntake';
import ResetPasswordSendMail from './pages/ResetPasswordSendMailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profil/dnevni-unos/:datum" element={<DailyIntakePage></DailyIntakePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registracija" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<AboutUs />} />
        <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
        <Route path="/recepti" element={<Recipe />} />
        <Route path="/recepti/:id" element={<RecipeDetail />} />
        <Route path="/reset-lozinke" element={<ResetPasswordSendMail />} />
      </Routes>
    </Router>
  );
}

export default App;





