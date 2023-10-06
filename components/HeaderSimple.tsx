'use client'
import {
    Burger,
    Container,
    Group,
    Header,
    Switch,
    createStyles,
    rem
} from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { useDisclosure } from '@mantine/hooks'
import { useEditContext } from '@/context/EditContext'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none'
        }
    },

    header: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between'
    },

    link: {
        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
        },
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        display: 'block',
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        textDecoration: 'none'
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({
                color: theme.primaryColor,
                variant: 'light'
            }).background,
            color: theme.fn.variant({
                color: theme.primaryColor,
                variant: 'light'
            }).color
        }
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none'
        }
    }
}))

interface HeaderSimpleProps {
  links: {
    link: string
    label: string
  }[]
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(links[0]?.link ?? '')
    const { classes, cx } = useStyles()
    const [edit, setEdit] = useEditContext()

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                setActive(link.link)
            }}
        >
            {link.label}
        </a>
    ))

    return (
        <Header
            height={60}
            mb={120}
        >
            <Container className={classes.header}>
                <MantineLogo size={28} />
                <Group
                    spacing={5}
                    className={classes.links}
                >
                    {items}
                    <Switch
                        checked={edit.editing}
                        onClick={() => {
                            setEdit({ ...edit, editing: !edit.editing })
                        }}
                    />
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />
            </Container>
        </Header>
    )
}