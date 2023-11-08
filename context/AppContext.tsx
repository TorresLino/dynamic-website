import { ReactElement, createContext, useContext, useState } from 'react'

export interface AppContextData {
    editing: boolean
}

export type AppContextValue = [
    appData: AppContextData,
    setAppData: (data: AppContextData) => void
]

const defaultValues = {
    editing: false
} as AppContextData

const AppContext = createContext<AppContextValue>([defaultValues, () => {}])

export function AppContextProvider({ children }: { children: ReactElement }) {
    const [appData, setAppData] = useState<AppContextData>(defaultValues)

    return (
        <AppContext.Provider value={[ appData, setAppData ]}>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}