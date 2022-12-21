import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../core/contexts/appContext";
import { API_BASE } from "../../core/api/api";
import styles from "./Modal.module.css";

const Modal: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const { id } = useParams();
  const { store } = useContext(AppContext);
  const img = store.items?.find((item) => String(item.timestamp) === id);
  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <span className={styles.close} onClick={handleClose}>
        &times;
      </span>
      <img src={`${API_BASE}${img?.image}`} alt={img?.image} />
    </div>
  );
};

export default Modal;
