import { useState } from "react"
import { useFirebaseAuth } from "../../hooks/firebase-hooks/useFirebaseAuth"
import { Container, Paper, Box, Tabs, Tab } from "@mui/material"
import { ProfileTab } from "./tabs/profile-tab"
import { SecurityTab } from "./tabs/security-tab"
import { AccountActionsTab } from "./tabs/account-actions-tab"

export const AccountSettings = () => {
  const { currentUser } = useFirebaseAuth()
  const [tab, setTab] = useState(0)

  return (
    <Container
      maxWidth="md"
      sx={{
        position: "absolute",
        top: "54%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "80%",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, height: "95%" }}>
        <Box display="flex" gap={4} sx={{ height: "100%" }}>
          <Box
            sx={{
              minWidth: 200,
              borderRight: 1,
              borderColor: "divider",
              height: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              value={tab}
              onChange={(_, v) => setTab(v)}
              aria-label="Account Settings Sections"
            >
              <Tab label="Profile" />
              <Tab label="Security" />
              <Tab label="Account Actions" />
            </Tabs>
          </Box>
          <Box flex={1}>
            {tab === 0 && <ProfileTab currentUser={currentUser} />}
            {tab === 1 && <SecurityTab />}
            {tab === 2 && <AccountActionsTab />}
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}
