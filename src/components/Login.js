// src/components/LoginBox.js
import React, { useState } from 'react';
import './Auth.css';

const LoginBox = ({ onLogin, onRegisterLinkClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ email, password });
  };

  return (
    <div className="login-box-container">
    <div className="login-box">
      <h2 className="login-box__title"><b>Login</b></h2>
      <form className="login-box__form">
        <label className="login-box__label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-box__input"
          />
        </label>
        <label className="login-box__label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-box__input"
          />
        </label>
        <button type="button" onClick={handleLogin} className="login-box__button">
          Login
        </button>
      </form>
      <p className="login-box__register">
        Don't have an account?{' '}
        <span onClick={onRegisterLinkClick} className="login-box__register-link">
          Register
        </span>
      </p>
    </div>
    </div>
  );
};

export default LoginBox;
