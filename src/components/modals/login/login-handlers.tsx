import { signIn, signUp, logOut } from "../../../firebase/auth"

export async function handleSignUp(
  event: { preventDefault: () => void },
  email: string,
  password: string,
  setError: (msg: string) => void,
  navigate: (path: string) => void
) {
  event.preventDefault()
  setError("")
  try {
    await signUp(email, password)
    navigate("/")
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An unknown error occurred"
    )
  }
}

export async function handleSignIn(
  event: { preventDefault: () => void },
  email: string,
  password: string,
  setError: (msg: string) => void,
  navigate: (path: string) => void
) {
  event.preventDefault()
  setError("")
  try {
    await signIn(email, password)
    navigate("/")
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An unknown error occurred"
    )
  }
}

export async function handleLogout(setError: (msg: string) => void) {
  try {
    await logOut()
  } catch (error) {
    setError(error instanceof Error ? error.message : "Failed to log out")
  }
}
