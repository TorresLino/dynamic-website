'use client'

import { AppShell } from '@mantine/core'
import { HeaderContent } from './HeaderContent'
import NavbarContent from './NavbarContent'
import { ReactNode } from 'react'
import { useArticlesContext } from '@/context/ArticlesContext'
import { useDisclosure } from '@mantine/hooks'

interface MainNavigationProps {
    children: ReactNode
}

export default function MainNavigation({
    children
}: MainNavigationProps) {

    const [opened, { toggle }] = useDisclosure(false)
    const [{ articles }] = useArticlesContext()

    return (
        <AppShell
            header={{
                height: 60
            }}
            navbar={{
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
                width: 300
            }}
            padding="xl"
        >
            <AppShell.Header>
                <HeaderContent
                    links={[]}
                    opened={opened}
                    toggle={toggle}
                />
            </AppShell.Header>

            <AppShell.Navbar>
                <NavbarContent
                    articles={articles}
                    open={opened}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                { children }
            </AppShell.Main>
        </AppShell>
    )
}