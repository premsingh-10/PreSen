// src/components/BlogForm.js
import React, { useState } from 'react';
import './style.css'; // Import the CSS file for styling

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, image });
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Image URL (optional):
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="form-input"
        />
      </label>
      <br />
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
