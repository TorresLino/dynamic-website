'use client'

import { Header } from './Header'
import Navbar from './Navbar'
import { useArticlesContext } from '@/context/ArticlesContext'
import { useDisclosure } from '@mantine/hooks'

interface MainNavigationProps {
}

export default function MainNavigation(props: MainNavigationProps) {
    const {
    } = props

    const [opened, { toggle }] = useDisclosure(false)
    const [{ articles }] = useArticlesContext()

    return (
        <>
            <Header
                links={[]}
                opened={opened}
                toggle={toggle}
            />

            <Navbar
                articles={articles}
                open={opened}
            />
        </>
    )
}