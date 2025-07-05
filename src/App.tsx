import { Navbar } from "./features/navbar/navbar"
import { Route, Routes } from "react-router-dom"
import { About } from "./pages/about-page/about-page"
import { Home } from "./pages/home-page/home-page"
import { Login } from "./pages/login-page/login-page"
import { LeftSidebar } from "./features/sidebars/left-sidebar/left-sidebar"
import { useState } from "react"
import { NotFoundPage } from "./pages/not-found-page/not-found-page"
import { RightSidebar } from "./features/sidebars/right-sidebar/right-sidebar"
import { getAppTheme } from "./styles/theme"
// import { ThemeProvider } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeCssVarsProvider } from "./components/components/theme-css-vars-provider"

export function App() {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true)
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false)

  const [primaryColor, setPrimaryColor] = useState("#f0650f")
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark")

  const muiTheme = getAppTheme(themeMode, primaryColor)

  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!isLeftSidebarVisible)
  }
  const toggleRightSidebar = () =>
    setIsRightSidebarVisible(!isRightSidebarVisible)

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ThemeCssVarsProvider>
          <Navbar />

          <LeftSidebar
            isVisible={isLeftSidebarVisible}
            toggleSidebar={toggleLeftSidebar}
          />

          <RightSidebar
            isVisible={isRightSidebarVisible}
            toggleSidebar={toggleRightSidebar}
            theme={themeMode}
            setTheme={setThemeMode}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />

          <div
            className="app-content"
            style={{ marginLeft: isLeftSidebarVisible ? "250px" : "0" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/login" element={<Login />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </ThemeCssVarsProvider>
      </ThemeProvider>
    </>
  )
}
