'use client'
import { Button, NavLink } from '@mantine/core'
import { Article } from '@/models/Articles'

interface ArticleNavigationLinkProps {
    article: Article
}

export default function ArticleNavigationLink(props: ArticleNavigationLinkProps) {
    const { article } = props

    return (
        <NavLink
            label={<Button variant="subtle">{article.title}</Button>}
            childrenOffset={16}
        >
            {
                article.childArticles.map((c, i) => (
                    <ArticleNavigationLink
                        article={c}
                        key={i}
                    />
                ))
            }
        </NavLink>
    )
}