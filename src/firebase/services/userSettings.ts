import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export async function getUserSettings(uid: string) {
  const ref = doc(db, "userSettings", uid)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

export async function setUserSettings(uid: string, settings: any) {
  const ref = doc(db, "userSettings", uid)
  await setDoc(ref, settings, { merge: true })
}
