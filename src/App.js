import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';

const defaultMarkdown = `# Heading 1
## Heading 2
[Link to FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleEditorChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <Editor value={markdown} onChange={handleEditorChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
