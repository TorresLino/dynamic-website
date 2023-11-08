'use client'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'

export default function LexicalEditor() {
    const initialConfig = {
        namespace: 'MyEditor',
        onError: () => {},
        theme: {}
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <PlainTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    )
}