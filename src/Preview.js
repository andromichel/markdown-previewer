import React from 'react';
import { marked } from 'marked';

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    // Replace newlines with <br> tags
    const html = marked(markdown).replace(/\n/g, '<br/>');
    return { __html: html };
  };
  

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default Preview;
