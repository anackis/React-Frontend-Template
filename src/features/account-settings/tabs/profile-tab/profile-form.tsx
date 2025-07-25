import {
  Box,
  GridLegacy as Grid,
  TextField,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material"
import { useState, useEffect } from "react"
import { useUserSettings } from "../../../../providers/user-provider"

export function ProfileForm() {
  const { currentUser, userSettings, saveUserSettings } = useUserSettings()
  const [form, setForm] = useState({
    displayName: "",
    name: "",
    surname: "",
  })
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")

  useEffect(() => {
    if (userSettings) {
      setForm({
        displayName: userSettings.displayName || "",
        name: userSettings.name || "",
        surname: userSettings.surname || "",
      })
    }
  }, [userSettings])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (status === "saved") {
      timer = setTimeout(() => setStatus("idle"), 3000)
    }
    return () => clearTimeout(timer)
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("saving")
    try {
      await saveUserSettings({
        ...userSettings,
        ...form,
      })
      setStatus("saved")
    } catch {
      setStatus("idle")
    }
  }

  const StatusChip = () => {
    if (status === "saving")
      return (
        <Chip
          label="Saving..."
          color="info"
          size="small"
          icon={<CircularProgress size={16} />}
        />
      )
    if (status === "saved")
      return <Chip label="Saved!" color="success" size="small" />
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Display Name"
            name="displayName"
            value={form.displayName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            value={currentUser?.email || ""}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Surname"
            name="surname"
            value={form.surname}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 0.5 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={status === "saving"}
            >
              Save
            </Button>
            <StatusChip />
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}
