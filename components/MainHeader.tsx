'use client'
import { Burger, Group } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import classes from './styles/HeaderStyles.module.css'
import { useDisclosure } from '@mantine/hooks'

interface MainHeaderProps {
    links: { label: string, link: string} []
}

export function MainHeader(props: MainHeaderProps) {
    const [opened, { toggle }] = useDisclosure(false)
    const { links } = props

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
        >
            {link.label}
        </a>
    ))

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger
                        hiddenFrom="sm"
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                    />
                    <MantineLogo size={28} />
                </Group>

                <Group>
                    <Group
                        ml={50}
                        gap={5}
                        className={classes.links}
                        visibleFrom="sm"
                    >
                        {items}
                    </Group>
                </Group>
            </div>
        </header>
    )
}