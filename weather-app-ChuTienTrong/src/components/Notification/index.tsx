import { useNotification } from "providers/NotificationContext";
import React from "react";

const NotificationModal: React.FC = () => {
  const { notification, showNotification } = useNotification();

  if (!notification) return null;

  const { message, type = "info", position = "top-right" } = notification;
  const backgroundColor =
    type === "success" ? "#4CAF50" : type === "error" ? "#F44336" : "#2196F3";

  // Define styles based on position
  const positionStyles = {
    position: "fixed" as const,
    zIndex: 1000,
    padding: "14px",
    borderRadius: "4px",
    backgroundColor,
    color: "#fff",
    transition: "opacity 0.3s ease",
    opacity: 1,
  } as React.CSSProperties;

  switch (position) {
    case "top-left":
      positionStyles.top = "20px";
      positionStyles.left = "20px";
      break;
    case "top-right":
      positionStyles.top = "20px";
      positionStyles.right = "20px";
      break;
    case "bottom-left":
      positionStyles.bottom = "20px";
      positionStyles.left = "20px";
      break;
    case "bottom-right":
      positionStyles.bottom = "20px";
      positionStyles.right = "20px";
      break;
    default:
      break;
  }

  // Handle close notification
  const handleClose = () => {
    showNotification("", "info", 0); // Clear the notification
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={positionStyles}>
        <div
          style={{
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{message}</span>
          <button
            onClick={handleClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
