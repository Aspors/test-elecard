import React from "react";
import { API_BASE } from "../../../core/api/api";
import styles from "./TreeItem.module.css";
import { Link, useLocation } from "react-router-dom";

const TreeItem: React.FC<{ image: string; timestamp: number }> = ({
  image,
  timestamp,
}) => {
  const location = useLocation();
  return (
    <Link
      className={styles["tree-item"]}
      to={`${timestamp}`}
      state={{ background: location }}
    >
      <img src={`${API_BASE}${image}`} alt={image} />
    </Link>
  );
};

export default TreeItem;
