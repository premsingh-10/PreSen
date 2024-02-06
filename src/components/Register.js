// src/components/RegisterBox.js
import React, { useState } from 'react';
import './Auth.css';

const RegisterBox = ({ onRegister, onLoginLinkClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister({ name, email, password });
  };

  return (
    <div className="login-box-container">
    <div className="register-box">
      <h2 className="register-box__title"><b>Register</b></h2>
      <form className="register-box__form">
        <label className="register-box__label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-box__input"
          />
        </label>
        <label className="register-box__label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-box__input"
          />
        </label>
        <label className="register-box__label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-box__input"
          />
        </label>
        <button type="button" onClick={handleRegister} className="register-box__button">
          Register
        </button>
      </form>
      <p className="register-box__login">
        Already have an account?{' '}
        <span onClick={onLoginLinkClick} className="register-box__login-link">
          Login
        </span>
      </p>
    </div>
    </div>
  );
};

export default RegisterBox;
