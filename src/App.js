
import './App.css';
import React, { useState } from 'react';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginBox from '../src/components/Login';
import RegisterBox from '../src/components/Register';  



function App() {

  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
    // Handle login logic here
  };

  const handleRegister = (userData) => {
    console.log('Register:', userData);
    // Handle registration logic here
  };

  const handleRegisterLinkClick = () => {
    setShowLogin(false);
  };

  const handleLoginLinkClick = () => {
    setShowLogin(true);
  };
  return (
    <Router>
    <div className="App">
      <Particles id="tsparticles" />
      {/* <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer /> */}

{showLogin ? (
        <LoginBox onLogin={handleLogin} onRegisterLinkClick={handleRegisterLinkClick} />
      ) : (
        <RegisterBox onRegister={handleRegister} onLoginLinkClick={handleLoginLinkClick} />
      )}

      
    </div>
    </Router>
  );
}

export default App;
