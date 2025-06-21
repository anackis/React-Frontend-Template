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
import { ThemeProvider } from "@emotion/react"

export function App() {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true)
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false)

  const [mode, setMode] = useState<"light" | "dark">("dark")
  const [primaryColor, setPrimaryColor] = useState("#f0650f")

  const theme = getAppTheme(mode, primaryColor)

  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!isLeftSidebarVisible)
  }
  const toggleRightSidebar = () =>
    setIsRightSidebarVisible(!isRightSidebarVisible)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <LeftSidebar
          isVisible={isLeftSidebarVisible}
          toggleSidebar={toggleLeftSidebar}
        />

        <RightSidebar
          isVisible={isRightSidebarVisible}
          toggleSidebar={toggleRightSidebar}
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
      </ThemeProvider>
    </>
  )
}
