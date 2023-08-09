'use client'
import { EditContextProvider } from '@/context/EditContext'
import { MantineProvider } from '@mantine/core'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode}) {
    return (
        <EditContextProvider>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'dark'
                }}
            >
                { children }
            </MantineProvider>
        </EditContextProvider>
    )
}