import "./styles/index.scss"

import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { StyleProvider } from "./providers/style-provider"
import { UserProvider } from "./providers/user-provider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <UserProvider>
        <StyleProvider>
          <App />
        </StyleProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
