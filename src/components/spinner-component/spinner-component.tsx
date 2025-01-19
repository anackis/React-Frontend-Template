import { IconComponent } from "../icon-component/icon-component";
import "./spinner-component.scss";

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
      <IconComponent name="spinner" size={64} color="#F0650F" />
    </div>
  );
};
