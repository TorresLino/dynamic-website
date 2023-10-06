'use client'

import { Box, ScrollArea } from '@mantine/core'
import { Article } from '@/models/Articles'
import ArticleNavigation from './ArticleNavigation'
import { useDisclosure } from '@mantine/hooks'

interface NavbarProps {
    articles: Article[]
}

export default function Navbar(props: NavbarProps) {
    const { articles } = props

    const [opened, { toggle }] = useDisclosure(false)

    return (
        <Box>
            <ScrollArea type="scroll">

                <ArticleNavigation articles={articles} />
            </ScrollArea>
        </Box>
    )
}