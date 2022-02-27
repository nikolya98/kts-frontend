import { createContext, useContext } from "react";

type SearchBarContextType = {
  inputValue: string;
  setInputValue: (newValue: string) => void;

  isLoading: boolean;
  setIsLoading: (newValue: boolean) => void;
};

export const SearchBarContext = createContext<SearchBarContextType>({
  inputValue: "",
  setInputValue: () => {},

  isLoading: false,
  setIsLoading: () => {},
});

export const useSearchBarContext = () => useContext(SearchBarContext);
