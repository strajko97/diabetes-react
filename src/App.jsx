import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./layouts/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Footer/>
    </Router>
  );
}

export default App;
