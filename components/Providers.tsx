'use client'
import { MantineProvider } from '@mantine/core'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode}) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark'
            }}
        >
            { children }
        </MantineProvider>
    )
}