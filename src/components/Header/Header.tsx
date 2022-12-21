import React from "react";
import styles from "./Header.module.css";
import { LIST_SWITCH } from "../../core/consts/header.consts";
import { NavLink, useLocation } from "react-router-dom";
import Filters from "./Filters/Filters";

const Header = () => {
  const { pathname } = useLocation();

  const isCards = pathname.includes("cards");
  const isTree = pathname.includes("tree");
  return (
    <header className={styles.header}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ul style={{ display: "flex", flex: 1, listStyle: "none", gap: 20 }}>
          <li>
            <NavLink to={"cards/1"} className={"link"}>
              <input
                name={"cards"}
                type={"radio"}
                id={"cards"}
                onChange={(e) => e.preventDefault()}
                checked={isCards}
              />
              <label htmlFor="cards">{LIST_SWITCH.CARDS}</label>
            </NavLink>
          </li>
          <li>
            <NavLink to={"tree"} className={"link"}>
              <input
                name={"tree"}
                type={"radio"}
                id={"tree"}
                onChange={(e) => e.preventDefault()}
                checked={isTree}
              />
              <label htmlFor="tree">{LIST_SWITCH.TREE}</label>
            </NavLink>
          </li>
        </ul>
        {isCards && <Filters />}
      </div>
    </header>
  );
};

export default Header;
