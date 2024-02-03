'use client'

import { Burger, Flex, Group } from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import ToggleEdit from './ToggleEdit'
import classes from '../styles/HeaderStyles.module.css'

interface HeaderProps {
    links: { label: string, link: string} [],
    opened: boolean,
    toggle: () => void
}

export function HeaderContent(props: HeaderProps) {
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
        <Flex
            h="100%"
            px="md"
            align="center"
            justify="space-between"
            direction="row"
        >
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
        </Flex>
    )
}