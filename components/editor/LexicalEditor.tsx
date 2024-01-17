'use client'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { EditorState } from 'lexical'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import classes from '../styles/Editor.module.css'
import { useEffect } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

const theme = {}

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
        onError,
        theme
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <PlainTextPlugin
                contentEditable={<ContentEditable className={classes['lexical-editor']} />}
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    )
}