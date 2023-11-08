'use client'
import { AppContextProvider } from '@/context/AppContext'
import { ArticlesContextProvider } from '@/context/ArticlesContext'
import { MantineProvider } from '@mantine/core'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode}) {
    return (
        <ArticlesContextProvider>
            <AppContextProvider>
                <MantineProvider defaultColorScheme="dark">
                    { children }
                </MantineProvider>
            </AppContextProvider>
        </ArticlesContextProvider>
    )
}