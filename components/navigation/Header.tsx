'use client'

import { Burger, Group } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import ToggleEdit from './ToggleEdit'
import classes from '../styles/HeaderStyles.module.css'

interface HeaderProps {
    links: { label: string, link: string} [],
    opened: boolean,
    toggle: () => void
}

export function Header(props: HeaderProps) {
    const {
        links,
        opened,
        toggle
    } = props

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

                <Group>
                    <ToggleEdit />
                </Group>
            </div>
        </header>
    )
}