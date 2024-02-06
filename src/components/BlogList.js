// src/components/BlogList.js
import React from 'react';
import './style.css';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-item">
          {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
          <div className="blog-content">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
