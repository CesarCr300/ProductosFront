import { EditorState, convertFromHTML, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";

interface IRichTextEditor {
  content?: string;
}

export const RichTextEditor = ({ content }: IRichTextEditor) => {
  const [state, setState] = useState(
    content == undefined
      ? EditorState.createEmpty()
      : EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(content).contentBlocks
          )
        )
  );

  return (
    <Editor
      toolbar={{
        options: [
          "inline",
          "blockType",
          "list",
          "colorPicker",
          "link",
          "remove",
          "history",
        ],
      }}
      editorState={state}
      onEditorStateChange={setState}
    />
  );
};
