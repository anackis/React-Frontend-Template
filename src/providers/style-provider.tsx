import React, { createContext, useContext, useEffect, useState } from "react"
import {
  colorSimilarity,
  darken,
  getOnPrimaryColor,
  lighten,
} from "../utils/common/utils"

interface StyleContextProps {
  primaryColor: string
  setPrimaryColor: (color: string) => void
  themeMode: "light" | "dark"
  setThemeMode: (mode: "light" | "dark") => void
  colorError: string
  setColorError: (msg: string) => void
}

const StyleContext = createContext<StyleContextProps | undefined>(undefined)

interface TStyleProviderProps {
  children: React.ReactNode
}

export function StyleProvider({ children }: TStyleProviderProps) {
  const [primaryColor, _setPrimaryColor] = useState("#DB5D0F")
  const [themeMode, _setThemeMode] = useState<"light" | "dark">("dark")
  const [colorError, setColorError] = useState("")

  const SIMILARITY_THRESHOLD = 0.08

  useEffect(() => {
    document.body.style.setProperty("--primary-color", primaryColor)
    document.body.style.setProperty(
      "--on-primary-color",
      getOnPrimaryColor(primaryColor)
    )
  }, [primaryColor])

  const setPrimaryColor = (color: string) => {
    const background = themeMode === "dark" ? "#262626" : "#F5F5F5"
    const SIMILARITY_THRESHOLD = 0.08
    if (colorSimilarity(color, background) < SIMILARITY_THRESHOLD) {
      const adjusted =
        themeMode === "dark" ? lighten(color, 30) : darken(color, 30)
      _setPrimaryColor(adjusted)
      setColorError(
        "Primary color was adjusted for better visibility in the current theme."
      )
    } else {
      _setPrimaryColor(color)
      setColorError("")
    }
  }

  const setThemeMode = (mode: "light" | "dark") => {
    const background = mode === "dark" ? "#262626" : "#F5F5F5"
    if (colorSimilarity(primaryColor, background) < SIMILARITY_THRESHOLD) {
      const adjusted =
        mode === "dark" ? lighten(primaryColor, 30) : darken(primaryColor, 30)
      _setPrimaryColor(adjusted)
      setColorError(
        "Primary color was adjusted for better visibility in the new theme."
      )
    }
    _setThemeMode(mode)
  }

  return (
    <StyleContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        themeMode,
        setThemeMode,
        colorError,
        setColorError,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export function useStyleContext() {
  const ctx = useContext(StyleContext)
  if (!ctx)
    throw new Error("useStyleContext must be used within a StyleProvider")
  return ctx
}
