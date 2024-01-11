'use client'
// import ExampleTheme from './themes/ExampleTheme'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { ListItemNode, ListNode } from '@lexical/list'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { EditorState } from 'lexical'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
// import TreeViewPlugin from './plugins/TreeViewPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
// import ToolbarPlugin from '@/lib/lexical/ToolbarPlugin'
import { useState } from 'react'

// import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
// import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
// import AutoLinkPlugin from './plugins/AutoLinkPlugin'

// TODO: https://codesandbox.io/s/lexical-rich-text-example-5tncvy?file=/src/Editor.js
// TODO: https://blog.logrocket.com/build-rich-text-editor-lexical-react/

export default function LexicalEditor() {
    const [editorState, setEditorState] = useState<EditorState>()
    const initialConfig = {
        namespace: 'MyEditor',
        onError: () => {},
        theme: {}
    }

    const editorConfig = {
        // The editor theme
        // theme: ExampleTheme,
        // Handling of errors during update
        namespace: 'test',
        nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode
        ],
        onError(error: any) {
            throw error
        }
    }

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                {/* <ToolbarPlugin /> */}
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={<ContentEditable className="editor-input" />}
                        placeholder={<>editor placeholder</>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                    {/* <TreeViewPlugin /> */}
                    <AutoFocusPlugin />
                    {/* <CodeHighlightPlugin /> */}
                    <ListPlugin />
                    <LinkPlugin />
                    {/* <AutoLinkPlugin /> */}
                    {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
            </div>
        </LexicalComposer>
    )
}