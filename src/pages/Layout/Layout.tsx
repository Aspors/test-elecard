import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const Layout = () => {
  return (
    <>
      <Header />
      <section className={styles.layout}>
        <div className="container">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
