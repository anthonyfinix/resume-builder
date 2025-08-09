import React, { ReactNode, FC } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  // Prevent closing modal when clicking inside modal box
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.26)",
        }}
        onClick={handleModalClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
