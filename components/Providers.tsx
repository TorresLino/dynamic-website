'use client'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { ArticlesContextProvider } from '@/context/ArticlesContext'
import { EditContextProvider } from '@/context/EditContext'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode}) {
    return (
        <ArticlesContextProvider>
            <EditContextProvider>
                <MantineProvider defaultColorScheme="dark">
                    { children }
                </MantineProvider>
            </EditContextProvider>
        </ArticlesContextProvider>
    )
}