'use client'

import { Button, NavLink } from '@mantine/core'
import { Article } from '@/models/Articles'
import Link from 'next/link'

interface ArticleNavigationLinkProps {
    article: Article,
    parentPath?: string
}

export default function ArticleNavigationLink(props: ArticleNavigationLinkProps) {
    const {
        article,
        parentPath = ''
    } = props
    const path = `${parentPath}/${article.path}`

    return (
        <NavLink
            label={
                <Link
                    href={path}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <Button variant="subtle">
                        {article.title}
                    </Button>
                </Link>
            }
            childrenOffset={16}
        >
            {
                article.childArticles.length > 0 && article.childArticles.map((c, i) => (
                    <ArticleNavigationLink
                        article={c}
                        key={i}
                        parentPath={path}
                    />
                ))
            }
        </NavLink>
    )
}