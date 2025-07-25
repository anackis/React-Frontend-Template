import { Dialog, Box, Button, Slider } from "@mui/material"
import Cropper from "react-easy-crop"
import { useState, useCallback } from "react"

export interface CropperDialogProps {
  open: boolean
  imageSrc: string | null
  onClose: () => void
  onCropComplete: (croppedBlob: Blob) => void
}

export function CropperDialog({
  open,
  imageSrc,
  onClose,
  onCropComplete,
}: CropperDialogProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)

  const handleCropComplete = useCallback((_: any, areaPixels: any) => {
    setCroppedAreaPixels(areaPixels)
  }, [])

  // Utility to get cropped image as Blob
  const getCroppedImg = async (): Promise<Blob | null> => {
    if (!imageSrc || !croppedAreaPixels) return null
    const image = new window.Image()
    image.src = imageSrc
    await new Promise((res) => (image.onload = res))
    const canvas = document.createElement("canvas")
    canvas.width = croppedAreaPixels.width
    canvas.height = croppedAreaPixels.height
    const ctx = canvas.getContext("2d")
    if (!ctx) return null
    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    )
    return await new Promise((resolve) =>
      canvas.toBlob((blob) => resolve(blob!), "image/jpeg")
    )
  }

  const handleSave = async () => {
    const blob = await getCroppedImg()
    if (blob) onCropComplete(blob)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box p={2}>
        {imageSrc && (
          <>
            <Box position="relative" width="100%" height={300} bgcolor="#333">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
              />
            </Box>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(_, value) => setZoom(value as number)}
              sx={{ mt: 2 }}
            />
            <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </Box>
          </>
        )}
      </Box>
    </Dialog>
  )
}
