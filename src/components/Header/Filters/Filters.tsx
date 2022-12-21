import React, { useContext, useState } from "react";

import styles from "./Filters.module.css";
import { AppContext } from "../../../core/contexts/appContext";

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState("Category");
  const { setStore } = useContext(AppContext);

  const listData = [
    { name: "category", isActive: activeFilter === "category" },
    { name: "filesize", isActive: activeFilter === "filesize" },
    { name: "timestamp", isActive: activeFilter === "timestamp" },
  ];

  const handleClick = (name: string) => {
    setActiveFilter(name);
    setStore((store) => {
      if (store.items) {
        return {
          ...store,
          // @ts-ignore
          items: [...store.items.sort((a, b) => (a[name] > b[name] ? 1 : -1))],
        };
      } else {
        return store;
      }
    });
  };

  return (
    <span className={styles.dropdown}>
      Filters
      <ul className={styles.dropdown__menu}>
        {listData.map(({ name, isActive }, index) => (
          <li key={index}>
            <label htmlFor={name}>{name}</label>
            <input
              type={"radio"}
              checked={isActive}
              onChange={() => handleClick(name)}
              id={name}
            />
          </li>
        ))}
      </ul>
    </span>
  );
};

export default Filters;
