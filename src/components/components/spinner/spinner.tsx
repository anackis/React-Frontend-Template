import "./spinner.scss"
import { IconComponent } from "../icon/icon"

export const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconComponent name="spinner" size={64} color="#DB5D0F" />
    </div>
  )
}
