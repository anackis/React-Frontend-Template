import { useTheme } from "@mui/material"
import { getOnPrimaryColor } from "../utils/common/utils"

export function useOnPrimaryColor() {
  const theme = useTheme()
  return getOnPrimaryColor(theme.palette.primary.main)
}
