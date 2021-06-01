import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
export default function ArticleEditor() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      )

      const handleKeyCommand = (command, editorState) => {
          const newState = RichUtils.handleKeyCommand(editorState, command);

          if (newState) {
              setEditorState(newState);
              return 'handled';
          }

          return 'not-handled';
      }
      

      const setToBoldToggle = () => {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
         }
      const setToItalicizeToggle = () => {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
        }
    const setToUnderlineToggle = () => {
            setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
        }
      return (
        <div className="container">
            <button onClick={setToBoldToggle}>Bold</button>
            <button onClick={setToItalicizeToggle}>Italicize</button>
            <button onClick={setToUnderlineToggle}>Underline</button>
          <h2>Welcome to the editor</h2>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="hello"
            />
        </div>
      );
}
