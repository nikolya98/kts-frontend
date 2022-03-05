import { createContext, useContext } from "react";

import { Meta } from "@shared/store/ApiStore/types";

type SearchBarContextType = {
  inputValue: string;
  setInputValue: (newValue: string) => void;
  isLoading: Meta;
  load: () => void;
};

export const SearchBarContext = createContext<SearchBarContextType>({
  inputValue: "",
  setInputValue: () => {},
  isLoading: Meta.initial,
  load: () => {},
});

export const useSearchBarContext = () => useContext(SearchBarContext);
