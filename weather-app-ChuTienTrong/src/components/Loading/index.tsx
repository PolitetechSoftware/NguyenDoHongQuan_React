import Spin from "components/Spin";
import React from "react";

interface LoadingModalProps {
  isOpen: boolean;
}

const LoadingModal: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <Spin></Spin>
  </div>
);

export default LoadingModal;
