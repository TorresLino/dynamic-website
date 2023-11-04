'use client'

import { Box, ScrollArea } from '@mantine/core'
import { Article } from '@/models/Articles'
import ArticleNavigationLink from './ArticleNavigationLink'
import classes from '../styles/HeaderStyles.module.css'

interface NavbarProps {
    articles: Article[]
    open: boolean
}

export default function Navbar(props: NavbarProps) {
    const {
        articles,
        open
    } = props

    return (
        <nav>
            <Box
                className={classes.navbar}
                display={open ? 'flex' : undefined}
            >
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
            </Box>
        </nav>
    )
}