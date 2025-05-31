import { IconComponent } from "../../../../components/components/icon/icon"
import "./color-pickers.scss"

interface ColorPickersProps {
  primaryColor: string
  predefinedColors: string[]
  handleSetPrimaryColor: (color: string) => void
}

export const ColorPickers = ({
  primaryColor,
  predefinedColors,
  handleSetPrimaryColor,
}: ColorPickersProps) => {
  return (
    <div className="color-options">
      {predefinedColors.map((color) => (
        <div
          key={color}
          className="color-swatch-wrapper"
          style={{ borderColor: primaryColor }}
        >
          <button
            className={`color-swatch ${primaryColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => handleSetPrimaryColor(color)}
          />
        </div>
      ))}

      <div
        className="color-swatch-wrapper"
        style={{ borderColor: primaryColor }}
      >
        <div
          className={`color-swatch custom-picker ${
            predefinedColors.includes(primaryColor) ? "" : "active"
          }`}
          style={{ backgroundColor: primaryColor }}
        >
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => handleSetPrimaryColor(e.target.value)}
          />
          <span className="edit-icon">
            <IconComponent
              name="pencil"
              size={14}
              color="var(--secondary-color)"
            />
          </span>
        </div>
      </div>
    </div>
  )
}
