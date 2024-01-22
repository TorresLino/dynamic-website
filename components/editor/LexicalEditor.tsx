'use client'
import {
    AutoLinkNode,
    LinkNode
} from '@lexical/link'
import {
    CodeHighlightNode,
    CodeNode
} from '@lexical/code'
import {
    EditorState,
    EditorThemeClasses
} from 'lexical'
import {
    HeadingNode,
    QuoteNode
} from '@lexical/rich-text'
import {
    ListItemNode,
    ListNode
} from '@lexical/list'
import {
    TableCellNode,
    TableNode,
    TableRowNode
} from '@lexical/table'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import ToolbarPlugin from './toolbar/ToolbarPlugin'
import classes from '../styles/Editor.module.css'
import theme from './toolbar/theme'
import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'


const onError = (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error)
}

const OnChangeExample = ({ onChange }: { onChange: (editorState: EditorState) => void }) => {
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState)
        })
    }, [onChange, editor])

    return null
}

export default function LexicalEditor() {
    const initialConfig = {
        namespace: 'MyEditor',
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
        onError,
        theme
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin />
            <RichTextPlugin
                contentEditable={<ContentEditable className={classes['lexical-editor']} />}
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <ListPlugin />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <LinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </LexicalComposer>
    )
}