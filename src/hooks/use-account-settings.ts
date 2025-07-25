import { useState } from "react"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"

export function useProfileImage(uid: string | undefined) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const uploadProfileImage = async (file: File) => {
    if (!uid) return null
    setUploading(true)
    setError(null)
    try {
      const storage = getStorage()
      const storageRef = ref(storage, `profileImages/${uid}`)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      return url
    } catch (err: any) {
      setError(err.message)
      return null
    } finally {
      setUploading(false)
    }
  }

  return { uploadProfileImage, uploading, error }
}
