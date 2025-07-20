import { IconComponent } from "./icon"

export const IconShowcase = () => {
  const icons = [
    "spinner",
    "arrowTo",
    "settings",
    "pencil",
    "moon",
    "sun",
    "account",
  ]

  return (
    <div className="full-width-container">
      <h1>Icon Reference</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {icons.map((iconName) => (
          <div key={iconName} style={{ margin: "10px", textAlign: "center" }}>
            <IconComponent name={iconName} size={48} />
            <p>{iconName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
