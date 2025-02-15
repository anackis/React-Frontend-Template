import { useState } from "react";
import "./error.scss";

interface ErrorComponentProps {
  message: string;
  onRetry?: () => void;
  onCancel?: () => void;
}

export const ErrorComponent = ({
  message,
  onRetry = () => window.location.reload(),
  onCancel,
}: ErrorComponentProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onCancel) {
      onCancel();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="error-modal">
      <div className="error-overlay" onClick={handleClose}></div>

      <div className="error-content">
        <h2>Error!</h2>

        <p>{message}</p>

        <div className="error-actions">
          {onRetry && (
            <button className="button" onClick={onRetry}>
              Retry
            </button>
          )}

          <button className="button close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
