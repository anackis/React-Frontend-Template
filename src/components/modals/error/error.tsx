import { useState } from "react"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"

interface ErrorComponentProps {
  message: string
  onRetry?: () => void
  onCancel?: () => void
}

export const ErrorComponent = ({
  message,
  onRetry = () => window.location.reload(),
  onCancel,
}: ErrorComponentProps) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="error-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle
        id="error-dialog-title"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <ErrorOutlineIcon color="error" />
        <strong>Error!</strong>
      </DialogTitle>
      <DialogContent>
        <strong>{message}</strong>
      </DialogContent>
      <DialogActions>
        {onRetry && (
          <Button variant="contained" color="primary" onClick={onRetry}>
            Retry
          </Button>
        )}
        <Button
          variant="outlined"
          color="error"
          onClick={handleClose}
          style={{ marginLeft: "10px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
