import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import { Meta } from "@shared/store/ApiStore/types";

import searchBarStyle from "./SearchBar.module.scss";

export type SearchBarProps = {
  initValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: Meta;
};

const SearchBar: React.FC<SearchBarProps> = ({
  initValue,
  onChange,
  onClick,
  isLoading,
}): JSX.Element => {
  return (
    <form className={searchBarStyle["search-bar"]}>
      <Input
        className={searchBarStyle.input}
        value={initValue}
        onChange={onChange}
        placeholder="Search GitHub account..."
        disabled={isLoading === Meta.loading}
      />
      {isLoading === Meta.error && (
        <span className={searchBarStyle["no-result"]}>No results</span>
      )}
      <Button
        className={searchBarStyle.button}
        onClick={onClick}
        disabled={isLoading === Meta.loading}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
