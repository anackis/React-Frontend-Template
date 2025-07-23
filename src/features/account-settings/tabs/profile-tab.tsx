import {
  Box,
  Typography,
  Divider,
  Avatar,
  TextField,
  Button,
  GridLegacy as Grid,
} from "@mui/material"
import { useState, useEffect } from "react"
import { useUserSettings } from "../../../providers/user-provider"

export const ProfileTab = () => {
  const { currentUser, userSettings, saveUserSettings } = useUserSettings()
  const [form, setForm] = useState({
    displayName: "",
    name: "",
    surname: "",
  })
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (userSettings) {
      setForm({
        displayName: userSettings.displayName || "",
        name: userSettings.name || "",
        surname: userSettings.surname || "",
      })
    }
  }, [userSettings])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSuccess(false)
    try {
      await saveUserSettings(form)
      setSuccess(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Profile
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
          {userSettings?.displayName?.[0] || "U"}
        </Avatar>
        <Typography variant="h5" gutterBottom>
          {userSettings?.displayName || "User"}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {currentUser?.email}
        </Typography>
      </Box>
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
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap={2}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save"}
              </Button>
              {success && <Typography color="success.main">Saved!</Typography>}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
