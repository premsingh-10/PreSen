// src/components/BlogPage.js
import React from 'react';
import BlogList from './BlogList';

const blogs = [
  {
    title: 'React Hooks: A Deep Dive',
    description: 'Explore the power of React Hooks and how they simplify state management.',
    image: 'https://placekitten.com/300/200',
  },
  {
    title: 'Building Responsive UIs with Flexbox',
    description: 'Learn how to create flexible and responsive user interfaces using Flexbox.',
    image: 'https://placekitten.com/300/201',
  },
  {
    title: 'Introduction to GraphQL',
    description: 'Discover the basics of GraphQL and how it revolutionizes API development.',
    image: 'https://placekitten.com/300/202',
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1>Welcome to the Blog Page</h1>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default BlogPage;
