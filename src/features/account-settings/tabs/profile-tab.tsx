import {
  Box,
  Typography,
  Divider,
  Avatar,
  TextField,
  Button,
  Grid,
} from "@mui/material"

export const ProfileTab = ({ currentUser }: { currentUser: any }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      Profile
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
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
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Display Name"
          value={currentUser?.displayName || ""}
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
        <TextField label="Name" value={currentUser?.name || ""} fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Surname"
          value={currentUser?.surname || ""}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
)
