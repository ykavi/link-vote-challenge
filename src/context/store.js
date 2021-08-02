import { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { getLocalStorageData } from "../utils";
import ENUMS from "../enums";

const initialState = {
  link: getLocalStorageData(ENUMS.localStorageKey),
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
