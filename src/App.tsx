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
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useStyleContext } from "./providers/style-provider"
import { Alert, Snackbar } from "@mui/material"
import { IconShowcase } from "./components/components/icon/iconShowcase"
import { AccountSettingsPage } from "./pages/account-page/account-page"

export function App() {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true)
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(false)

  const { primaryColor, themeMode, colorError, setColorError } =
    useStyleContext()
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
        <Navbar toggleSidebar={toggleRightSidebar} />

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
            <Route path="/account-settings" element={<AccountSettingsPage />} />
            <Route path="/icons" element={<IconShowcase />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Snackbar
          open={!!colorError}
          autoHideDuration={3000}
          onClose={() => setColorError("")}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setColorError("")}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {colorError}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  )
}
