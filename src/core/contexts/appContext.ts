import {TAppContext} from "./contexts.types";
import {createContext} from "react";


export const initialStore = {
  items: null,
  loading: true,
  error: false,
}


export const AppContext = createContext<TAppContext>({} as TAppContext);