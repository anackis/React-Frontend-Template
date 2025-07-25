import { Box, Typography, Avatar, IconButton } from "@mui/material"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import { useRef, useState } from "react"
import { useUserSettings } from "../../../../providers/user-provider"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import imageCompression from "browser-image-compression"
import { CropperDialog } from "../../../cropper-dialog/cropper-dialog"

export function ProfileHeader() {
  const { currentUser, userSettings, saveUserSettings } = useUserSettings()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle")
  const [cropDialogOpen, setCropDialogOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  // Open cropper dialog when file selected
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageSrc(URL.createObjectURL(file))
    setCropDialogOpen(true)
    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // After cropping, upload and save
  const handleCropComplete = async (croppedBlob: Blob) => {
    if (!currentUser?.uid) return
    setStatus("saving")
    setCropDialogOpen(false)
    const storage = getStorage()
    // Upload full-size cropped image
    const storageRef = ref(storage, `profileImages/${currentUser.uid}`)
    await uploadBytes(storageRef, croppedBlob)
    const url = await getDownloadURL(storageRef)
    // Compress and upload thumbnail
    const croppedFile = new File([croppedBlob], "cropped.jpg", {
      type: "image/jpeg",
    })
    const compressedFile = await imageCompression(croppedFile, {
      maxWidthOrHeight: 40,
      maxSizeMB: 0.05,
    })
    const thumbRef = ref(storage, `profileImages/${currentUser.uid}_thumb`)
    await uploadBytes(thumbRef, compressedFile)
    const thumbUrl = await getDownloadURL(thumbRef)
    await saveUserSettings({
      ...userSettings,
      photoURL: url,
      photoThumbURL: thumbUrl,
    })
    setStatus("saved")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2} mb={3}>
      {/* Avatar */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          sx={{ width: 80, height: 80 }}
          src={
            userSettings?.photoURL || userSettings?.photoThumbURL || undefined
          }
        >
          {userSettings?.displayName?.[0] || "U"}
        </Avatar>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box>
          <IconButton
            color="primary"
            component="span"
            onClick={() => fileInputRef.current?.click()}
            disabled={status === "saving"}
            sx={{ right: 10 }}
          >
            <PhotoCamera />
          </IconButton>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <CropperDialog
            open={cropDialogOpen}
            imageSrc={imageSrc}
            onClose={() => setCropDialogOpen(false)}
            onCropComplete={handleCropComplete}
          />
          {status === "saving" && (
            <Typography variant="caption" color="info.main" mt={1}>
              Uploading...
            </Typography>
          )}
          {status === "saved" && (
            <Typography variant="caption" color="success.main" mt={1}>
              Saved!
            </Typography>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {currentUser?.email}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {userSettings?.displayName || "User"}
        </Typography>
      </Box>
    </Box>
  )
}
