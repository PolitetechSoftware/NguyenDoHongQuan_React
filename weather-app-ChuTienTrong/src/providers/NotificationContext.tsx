import NotificationModal from "components/Notification";
import React, { createContext, useContext, useState } from "react";

interface Notification {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

interface NotificationContextType {
  showNotification: (
    message: string,
    type?: "success" | "error" | "info",
    duration?: number,
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  ) => void;
  notification: Notification | null;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (
    message: string,
    type: "success" | "error" | "info" = "info",
    duration: number = 3000,
    position:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right" = "top-right"
  ) => {
    setNotification({ message, type, duration, position });

    // Automatically close the notification after the specified duration
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, notification }}>
      {children}
      <NotificationModal></NotificationModal>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
