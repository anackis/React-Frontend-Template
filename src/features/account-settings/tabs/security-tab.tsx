import { Box, Typography, Divider, Button } from "@mui/material"

export const SecurityTab = () => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Security
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
      Change Password
    </Button>
  </Box>
)
