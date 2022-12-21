import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../core/contexts/appContext";
import ListItem from "./listItem/ListItem";
import { Button, ErrorMessage, Spinner } from "../";
import { getItemParts } from "../../core/api/getItemParts/getItemParts";

import styles from "./List.module.css";
import { Navigate, NavLink, useParams, useNavigate } from "react-router-dom";

const List = () => {
  const { store, filteredItems, setFilteredItems } = useContext(AppContext);
  const { page } = useParams<string>();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(page);

  const itemsAmount = 8;
  const pageNumber = Number(page);

  const itemParts = getItemParts(store.items, pageNumber, itemsAmount);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleBlur = () => {
    navigate(`/cards/${inputValue}`, { replace: true });
  };

  useEffect(() => {
    if (itemParts) {
      setFilteredItems(itemParts);
      setInputValue(page);
    }
    // eslint-disable-next-line
  }, [store.items, page]);

  const isPrevHidden = pageNumber === 1;

  const isNextHidden = !!(filteredItems && filteredItems.length < itemsAmount);

  if (pageNumber === 0) {
    return <Navigate to={"/cards/1"} />;
  }

  if (store.error) {
    return <ErrorMessage />;
  }

  const View = () => (
    <ul className={styles.list}>
      {filteredItems
        ? filteredItems.map((item) => (
            <ListItem key={item.timestamp} {...item} />
          ))
        : null}
    </ul>
  );

  const spinner = store.loading ? <Spinner /> : null;
  const content = !(store.loading || store.error) ? <View /> : null;

  return (
    <>
      {spinner}
      {content}
      <div className={styles.nav}>
        <NavLink hidden={isPrevHidden} to={`/cards/${pageNumber - 1}`} replace>
          <Button>prev page</Button>
        </NavLink>

        <input
          className={styles.input}
          onInput={handleInput}
          onBlur={handleBlur}
          type="text"
          value={inputValue}
        />

        <NavLink hidden={isNextHidden} to={`/cards/${pageNumber + 1}`} replace>
          <Button>next page</Button>
        </NavLink>
      </div>
    </>
  );
};

export default List;
