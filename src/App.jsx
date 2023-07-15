import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SlideShow from './components/SlideShow';
import NavBar from './components/NavBar';
import Store from './components/Store';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SlideShow />} />
        <Route path="/store" element={<Store />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Add more Routes as needed */}
      </Routes>
    </Router>
    </>
   );
}

export default App;
