import React from 'react';

const Editor = ({ value, onChange }) => {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        value={value}
        onChange={onChange}
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default Editor;
