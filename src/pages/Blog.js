
// src/App.js
import React, { useState } from 'react';
import BlogForm from '../components/BlogForm';
import BlogPage from '../components/BlogPage';


const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };
  return (
    <div>
      <BlogForm onSubmit={addBlog} />
      <BlogPage/>
    </div>
  )
}

export default Blog