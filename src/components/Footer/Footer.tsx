import React from "react";
import styles from "./Footer.module.css";
import { Button } from "../";

const Footer = () => {
  const handleClick = () => {
    localStorage.removeItem("deletedItems");
    window.location.reload();
  };
  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="container"
      >
        <Button extraClass={styles.button_footer} onClick={handleClick}>
          reset
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
