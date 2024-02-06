// App.js
import React, { useState } from 'react';
import BlogWriting from './BlogWrite';
import Website from './Website';
import './style.css';

const OpenWrite = () => {
  const [isBlogWritingOpen, setIsBlogWritingOpen] = useState(false);

  const openBlogWriting = () => {
    setIsBlogWritingOpen(true);
  };

  const closeBlogWriting = () => {
    setIsBlogWritingOpen(false);
  };

  return (
    <div>
      {/* Your other components and sections go here */}
      
      <button className='close-tab' onClick={openBlogWriting}>Open Blog Writing</button>

      {isBlogWritingOpen && <BlogWriting onClose={closeBlogWriting} />}

      <Website />
    </div>
  );
};

export default OpenWrite;
