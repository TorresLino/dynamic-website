'use client'
import { Switch } from '@mantine/core'
import { useAppContext } from '@/context/AppContext'

export default function ToggleEdit() {
    const [appData, setAppData] = useAppContext()

    const toggleEdit = () => {
        setAppData({ ...appData, editing: !appData.editing })
    }

    return (
        <Switch
            label="Toggle Edit"
            onClick={toggleEdit}
            checked={appData.editing}
        />
    )
}