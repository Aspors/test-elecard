import React from "react";
import { TState } from "../../types/app.types";
import { TListItem } from "../../types/listItem.types";

export const onSuccess = (
  response: TListItem[],
  setState: React.Dispatch<React.SetStateAction<TState>>
) => {
  setState({ items: response, loading: false, error: false });
};

export const onError = (
  response: any,
  setState: React.Dispatch<React.SetStateAction<TState>>
) => {
  setState({ items: null, loading: false, error: true });
};
