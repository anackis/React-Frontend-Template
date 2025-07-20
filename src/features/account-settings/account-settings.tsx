import { useFirebaseAuth } from "../../hooks/firebase-hooks/useFirebaseAuth"
import {
  Container,
  Paper,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material"

export const AccountSettings = () => {
  const { currentUser } = useFirebaseAuth()

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
            {currentUser?.displayName?.[0] || "U"}
          </Avatar>
          <Typography variant="h5" gutterBottom>
            {currentUser?.displayName || "User"}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {currentUser?.email}
          </Typography>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Display Name"
            defaultValue={currentUser?.displayName}
            fullWidth
          />
          <TextField
            label="Email"
            defaultValue={currentUser?.email}
            fullWidth
            disabled
          />
          <Button variant="contained" color="primary" fullWidth>
            Change Password
          </Button>
          <Button variant="outlined" color="error" fullWidth>
            Delete Account
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
