import { Box, Typography, Divider, Button } from "@mui/material"

export const AccountActionsTab = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Account Actions
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Button variant="outlined" color="error" fullWidth>
      Delete Account
    </Button>
  </Box>
)
