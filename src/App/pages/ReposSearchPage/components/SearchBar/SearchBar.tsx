import { memo } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import SearchIcon from "@components/SearchIcon";
import { useSearchBarContext } from "@config/contexts/SearchBarContext";

import "./SearchBar.css";

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
    <form className="search-bar repositories__search-bar">
      <Input
        className="search-bar__input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите название организации"
        disabled={isLoading}
      />
      <Button
        className="search-bar__button"
        onClick={handleClick}
        disabled={isLoading}
      >
        <SearchIcon className="search-bar__button-icon" />
        <span className="visually-hidden">Найти</span>
      </Button>
    </form>
  );
};

export default memo(SearchBar);
