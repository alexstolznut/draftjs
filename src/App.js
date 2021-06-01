import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  )
  return (
    <div className="container">
      <h2>Welcome to the editor</h2>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="hello"
        />
    </div>
  );
}

export default App;
