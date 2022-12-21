import {TState} from "../types/app.types";
import {TListItem} from "../types/listItem.types";
import React from "react";

export type TAppContext = {
  store: TState;
  filteredItems: TListItem[] | null;
  setStore: React.Dispatch<React.SetStateAction<TState>>
  setFilteredItems: React.Dispatch<React.SetStateAction<TListItem[]>>;
};