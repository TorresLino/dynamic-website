'use client'
import parse from 'html-react-parser'

export interface PageHtmlParserProps {
    content: string
}

export default function Page(props: PageHtmlParserProps) {
    const { content } = props

    return parse(content)
}