import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";

function ModalTemplate() {
  const { handleModal, modalContent, modal } = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div>{modalContent}</div>,
      document.getElementById("modal-root")
    );
  }
  return null;
}

export default ModalTemplate;
