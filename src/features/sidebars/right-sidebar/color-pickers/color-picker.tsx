import "./color-picker.scss"

import { IconComponent } from "../../../../components/components/icon/icon"

interface ColorPickerProps {
  primaryColor: string
  predefinedColors: string[]
  handleSetPrimaryColor: (color: string) => void
  colorError?: string
}

export const ColorPicker = ({
  primaryColor,
  predefinedColors,
  handleSetPrimaryColor,
}: ColorPickerProps) => {
  return (
    <div className="color-options">
      {predefinedColors.map((color) => (
        <div
          key={color}
          className="color-switch-wrapper"
          style={{ borderColor: primaryColor }}
        >
          <button
            className={`color-switch ${primaryColor === color ? "active" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => handleSetPrimaryColor(color)}
          />
        </div>
      ))}

      <div
        className="color-switch-wrapper"
        style={{ borderColor: primaryColor }}
      >
        <div
          className={`color-switch custom-picker ${
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
            <IconComponent name="pencil" size={14} />
          </span>
        </div>
      </div>
    </div>
  )
}
