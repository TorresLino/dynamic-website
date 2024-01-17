'use client'

import { Article } from '@/models/Articles'
import ArticleNavigationLink from './ArticleNavigationLink'
import { ScrollArea } from '@mantine/core'

interface NavbarProps {
    articles: Article[]
    open: boolean
}

export default function NavbarContent({
    articles
}: NavbarProps) {

    return (
        <ScrollArea
            type="scroll"
            w="100%"
        >
            {
                articles.map((a, i) => (
                    <ArticleNavigationLink
                        article={a}
                        key={i}
                    />
                ))
            }
        </ScrollArea>
    )
}