import React, { useEffect, useState } from "react";

import { List, Modal } from "../components";
import { Layout, Tree, ModalOverlay } from "../pages";

import styles from "./App.module.css";
import { AppContext } from "../core/contexts/appContext";
import Api from "../core/api/api";
import { onError, onSuccess } from "../core/api/utils/onResponse";
import { initialStore } from "../core/contexts/appContext";
import { TListItem } from "../core/types/listItem.types";
import { TModalState, TState } from "../core/types/app.types";

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [store, setStore] = useState<TState>(initialStore);
  const [filteredItems, setFilteredItems] = useState([] as TListItem[]);

  const navigate = useNavigate();

  const deletedItems = localStorage
    .getItem("deletedItems")
    ?.split(",")
    .map((item) => Number(item));

  useEffect(() => {
    Api.getItems()
      .then((res) => onSuccess(res, setStore))
      .catch((res) => onError(res, setStore));
  }, []);

  useEffect(() => {
    if (deletedItems) {
      setStore((store) => {
        if (store.items) {
          return {
            ...store,
            items: store.items.filter(
              (item) => !deletedItems.find((value) => value === item.timestamp)
            ),
          };
        } else {
          return store;
        }
      });
    }
    // eslint-disable-next-line
  }, [store.loading]);

  const location = useLocation();
  const background = location.state as TModalState;

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <div className={styles.app}>
      <AppContext.Provider
        value={{ store, filteredItems, setStore, setFilteredItems }}
      >
        <Routes location={background?.background || location}>
          <Route path={"/"} element={<Layout />}>
            <Route path={"/"} element={<Navigate to={"cards/1"} />} />
            <Route index path={"cards/:page"} element={<List />} />
            <Route
              path={"tree/:id"}
              element={
                <ModalOverlay handleClose={handleCloseModal}>
                  <Modal handleClose={handleCloseModal} />
                </ModalOverlay>
              }
            />
            <Route path={"/tree"} element={<Tree />} />
            <Route path={"*"} element={<Navigate to={"cards/1"} />} />
          </Route>
        </Routes>
        {background?.background && (
          <Routes>
            <Route
              path={"tree/:id"}
              element={
                <ModalOverlay handleClose={handleCloseModal}>
                  <Modal handleClose={handleCloseModal} />
                </ModalOverlay>
              }
            />
          </Routes>
        )}
      </AppContext.Provider>
    </div>
  );
};

export default App;
