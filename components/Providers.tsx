'use client'
import { ArticlesContextProvider } from '@/context/ArticlesContext'
import { EditContextProvider } from '@/context/EditContext'
import { MantineProvider } from '@mantine/core'
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