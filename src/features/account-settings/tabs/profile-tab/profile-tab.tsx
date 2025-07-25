import { Box, Typography, Divider } from "@mui/material"
import { ProfileHeader } from "./profile-header"
import { ProfileForm } from "./profile-form"

export const ProfileTab = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Profile
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <ProfileHeader />
    <ProfileForm />
  </Box>
)
