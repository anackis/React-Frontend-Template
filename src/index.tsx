import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.scss"
import { StyleProvider } from "./components/providers/style-provider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleProvider>
        <App />
      </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>
)
