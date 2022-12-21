import React, { useContext } from "react";
import { AppContext } from "../../core/contexts/appContext";

import Tree from "react-animated-tree-v2";
import TreeElement from "./TreeElement/TreeElement";
import { ErrorMessage, Spinner } from "../index";

const TreeList = () => {
  const { store } = useContext(AppContext);

  const getCategories = () => {
    const unique: string[] = [];

    store.items?.forEach((item) => {
      if (!unique.includes(item.category)) return unique.push(item.category);
    });
    return unique;
  };

  const categories: string[] = getCategories();
  const View = () => {
    return (
      /* @ts-ignore */
      <Tree content="Categories" style={{ color: "white", fill: "white" }} open>
        {categories &&
          categories.map((item, index) => (
            <TreeElement key={index} item={item} />
          ))}
      </Tree>
    );
  };

  const loader = store.loading ? <Spinner /> : null;
  const errorMessage = store.error ? <ErrorMessage /> : null;
  const content = !(store.loading || store.error) ? <View /> : null;

  return (
    <>
      {loader}
      {errorMessage}
      {content}
    </>
  );
};

export default TreeList;
