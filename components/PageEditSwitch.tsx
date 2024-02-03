'use client'
import PageEditor from './editor/PageEditor'
import PageHtmlParser from './PageHtmlParser'
import { useAppContext } from '@/context/AppContext'

interface PageEditSwitch {
    content: string
}

export default function PageEditSwitch(props: PageEditSwitch) {
    const {
        content
    } = props
    const [appData] = useAppContext()

    if (appData.editing) {
        return <PageEditor />
    }

    return (
        <PageHtmlParser content={content} />
    )
}