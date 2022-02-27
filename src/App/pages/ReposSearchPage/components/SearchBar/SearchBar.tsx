import { memo } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import SearchIcon from "@components/SearchIcon";
import { useSearchBarContext } from "@config/contexts/SearchBarContext";

import searchBarStyle from "./SearchBar.module.scss";

const SearchBar = () => {
  const { inputValue, setInputValue, isLoading, setIsLoading } =
    useSearchBarContext();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    if (target) {
      setInputValue(target.value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsLoading(true);
  };

  return (
    <form className={searchBarStyle["search-bar"]}>
      <Input
        className={searchBarStyle.input}
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите название организации"
        disabled={isLoading}
      />
      <Button
        className={searchBarStyle.button}
        onClick={handleClick}
        disabled={isLoading}
      >
        <SearchIcon className={searchBarStyle["button-icon"]} />
        <span className="visually-hidden">Найти</span>
      </Button>
    </form>
  );
};

export default memo(SearchBar);
