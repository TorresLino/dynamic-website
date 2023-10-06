'use client'

import { Article } from '@/models/Articles'
import ArticleNavigationLink from './ArticleNavigationLink'

interface ArticleNavigationProps {
    articles: Article[]
}

export default function ArticleNavigation(props: ArticleNavigationProps) {
    const { articles } = props

    return (
        <>
            {
                articles.map((a, i) => (
                    <ArticleNavigationLink
                        article={a}
                        key={i}
                    />
                ))
            }
        </>
    )
}