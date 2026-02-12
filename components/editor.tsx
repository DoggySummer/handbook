"use client";

import { HeadingButton } from "@/components/tiptap-ui/heading-button";
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button";

import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";

// import "@/components/tiptap-node/paragraph-node/paragraph-node.scss";

export default function MyEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: `
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
        `,
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      <HeadingButton
        editor={editor}
        level={1}
        text="Heading 1"
        hideWhenUnavailable={true}
        showShortcut={true}
        onToggled={() => console.log(`Heading 1 toggled!`)}
      />
      <HeadingButton
        editor={editor}
        level={2}
        text="Heading 2"
        hideWhenUnavailable={true}
        showShortcut={true}
        onToggled={() => console.log(`Heading 2 toggled!`)}
      />
      <CodeBlockButton
        editor={editor}
        text="Code"
        hideWhenUnavailable={true}
        showShortcut={true}
        onToggled={() => console.log("Code block toggled!")}
      />

      <EditorContent editor={editor} role="presentation" />
    </EditorContext.Provider>
  );
}
