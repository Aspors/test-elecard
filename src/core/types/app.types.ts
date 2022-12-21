import {TListItem} from "./listItem.types";
import * as H from "history";

export type TState = {
  items: TListItem[] | null,
  loading: boolean,
  error: boolean
}

export type TModalState = {
  background?: H.Location;
}