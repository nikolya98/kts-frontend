import Button from "@components/Button";
import Input from "@components/Input";
import SearchIcon from "@components/SearchIcon";

import "./SearchBar.css";

type SearchBarProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  inputValue: string;
  isLoading: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({
  inputValue,
  isLoading,
  onChange,
  onClick,
}) => {
  return (
    <form className="search-bar repositories__search-bar">
      <Input
        className="search-bar__input"
        value={inputValue}
        onChange={onChange}
        placeholder="Введите название организации"
        disabled={isLoading}
      />
      <Button
        className="search-bar__button"
        onClick={onClick}
        disabled={isLoading}
      >
        <SearchIcon className="search-bar__button-icon" />
        <span className="visually-hidden">Найти</span>
      </Button>
    </form>
  );
};

export default SearchBar;
