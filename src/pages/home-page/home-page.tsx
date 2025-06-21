import { useState } from "react"
import { ErrorComponent } from "../../components/modals/error/error"
import "./home-page.scss"

export function Home() {
  const [openModal, setOpenModal] = useState(true)

  return (
    <main className="home-page">
      <h1>Hello Home</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setOpenModal(true)}>Hello</button>

      {openModal && (
        <ErrorComponent
          message="This is a test error message"
          onRetry={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
        />
      )}
    </main>
  )
}
