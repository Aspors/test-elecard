import React from "react";

import styles from "./ModalOverlay.module.css";
import { createPortal } from "react-dom";
import { TModalOverlay } from "./ModalOverlay.types";

const container = document.getElementById("modal") as HTMLElement;
const ModalOverlay: TModalOverlay = ({ children, handleClose }) =>
  createPortal(
    <div className={styles["modal-overlay"]} onClick={handleClose}>
      {children}
    </div>,
    container
  );

export default ModalOverlay;
