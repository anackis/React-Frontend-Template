import "./icon-component.scss";

interface IconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
}

const icons = {
  spinner: {
    path: "M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z",
    viewBox: "0 0 24 24",
  },
  arrowFrom: {
    path: "M14.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H4.75a.75.75 0 0 1 0-1.5h7.69l-1.22-1.22a.75.75 0 0 1 1.06-1.06zM2.5 1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z",
    viewBox: "0 0 16 16",
  },
  arrowTo: {
    path: "M4.22 8.53a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L6.56 7.25h7.69a.75.75 0 0 1 0 1.5H6.56l1.22 1.22a.75.75 0 1 1-1.06 1.06zM2.5 1.75a.75.75 0 1 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z",
    viewBox: "0 0 16 16",
  },
};

export const IconComponent = ({
  name,
  size = 24,
  color = "black",
}: IconProps) => {
  const icon = icons[name];
  if (!icon) {
    return null;
  }

  return (
    <svg
      width={size + "px"}
      height={size + "px"}
      viewBox={icon.viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
};
