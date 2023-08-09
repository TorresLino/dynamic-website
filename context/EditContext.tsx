import { ReactElement, createContext, useContext, useState } from 'react'

export interface EditContextData {
    editing: boolean
}

export type EditContextValue = [
    editData: EditContextData,
    setEditData: (data: EditContextData) => void
]

const defaultValues = {
    editing: false
} as EditContextData

const EditContext = createContext<EditContextValue>([defaultValues, () => {}])

export function EditContextProvider({ children }: { children: ReactElement }) {
    const [editData, setEditData] = useState<EditContextData>(defaultValues)

    return (
        <EditContext.Provider value={[editData, setEditData]}>
            { children }
        </EditContext.Provider>
    )
}

export function useEditContext() {
    return useContext(EditContext)
}