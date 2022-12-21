import React, { useContext, useState } from "react";
import Tree from "react-animated-tree-v2";
import TreeItem from "../TreeItem/TreeItem";
import { AppContext } from "../../../core/contexts/appContext";

const TreeElement = ({ item }: { item: string }) => {
  const { store } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const handleItemToggle = () => {
    setToggle((state) => !state);
  };
  return (
    <>
      {/* @ts-ignore */}
      <Tree onItemToggle={handleItemToggle} content={item}>
        {toggle &&
          store.items
            ?.filter((value) => value.category === item)
            .map((item) => (
              <Tree
                icons={{ closeIcon: null }}
                key={item.timestamp}
                content={
                  <TreeItem image={item.image} timestamp={item.timestamp} />
                }
              />
            ))}
      </Tree>
    </>
  );
};

export default TreeElement;
