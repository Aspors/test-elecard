import React, { useContext } from "react";
import { TListItem } from "../../../core/types/listItem.types";
import { API_BASE } from "../../../core/api/api";

import styles from "./ListItem.module.css";
import { AppContext } from "../../../core/contexts/appContext";

const ListItem: React.FC<TListItem> = ({
  category,
  filesize,
  image,
  timestamp,
}): JSX.Element => {
  const date = new Date(timestamp);
  const day = date.getUTCDay() + 1;
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const { setStore } = useContext(AppContext);

  const handleClick = () => {
    const deletedItems = localStorage.getItem("deletedItems");
    if (deletedItems) {
      localStorage.setItem("deletedItems", `${deletedItems},${timestamp}`);
    } else {
      localStorage.setItem("deletedItems", `${timestamp}`);
    }
    setStore((store) => {
      if (store.items) {
        return {
          ...store,
          items: store.items.filter((item) => item.timestamp !== timestamp),
        };
      } else {
        return store;
      }
    });
  };

  return (
    <li className={styles["list-item"]}>
      <div className={styles.close} onClick={handleClick}>
        &times;
      </div>
      <img src={`${API_BASE}${image}`} alt={category} />
      <p>
        <span>Category:</span> {category}
      </p>
      <p>
        <span>Filesize:</span> {filesize}
      </p>
      <p>
        <span>Date:</span> {day < 10 ? `0${day}` : day}/
        {month < 10 ? `0${month}` : month}/{year}
      </p>
    </li>
  );
};

export default ListItem;
