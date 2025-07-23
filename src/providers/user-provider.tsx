import React, { createContext, useContext, useEffect, useState } from "react"
import { useFirebaseAuth } from "../hooks/firebase-hooks/useFirebaseAuth"
import {
  getUserSettings,
  setUserSettings,
} from "../firebase/services/userSettings"

const UserSettingsContext = createContext<any>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading: authLoading } = useFirebaseAuth()
  const [userSettings, setUserSettingsState] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (currentUser?.uid) {
      setLoading(true)
      getUserSettings(currentUser.uid).then((data) => {
        setUserSettingsState(data)
        setLoading(false)
      })
    } else {
      setUserSettingsState(null)
      setLoading(false)
    }
  }, [currentUser])

  const saveUserSettings = async (settings: any) => {
    if (!currentUser?.uid) return
    await setUserSettings(currentUser.uid, settings)
    setUserSettingsState(settings)
  }

  if (authLoading || loading) return <div>Loading...</div>

  return (
    <UserSettingsContext.Provider
      value={{ currentUser, userSettings, saveUserSettings }}
    >
      {children}
    </UserSettingsContext.Provider>
  )
}

export const useUserSettings = () => useContext(UserSettingsContext)
