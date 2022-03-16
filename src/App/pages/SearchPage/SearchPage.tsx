import React, { useState, useCallback } from "react";

import AccountStore from "@store/AccountStore";
import useLocalStore from "@store/useLocalStore";
import { observer } from "mobx-react-lite";

import AccountCard from "./components/AccountCard";
import SearchBar from "./components/SearchBar";
import searchPageStyle from "./SearchPage.module.scss";

const SearchPage: React.FC = (): JSX.Element => {
  const accountStore = useLocalStore(() => new AccountStore());
  const [account, setAccount] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target) {
        const { value } = e.target;
        setAccount(value);
      }
    },
    []
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      accountStore.getAccountData({ accountName: account });
      setAccount("");
    },
    [account]
  );

  return (
    <div className={searchPageStyle.container}>
      <section className={searchPageStyle["search-page"]}>
        <SearchBar
          initValue={account}
          onChange={handleChange}
          onClick={handleClick}
          isLoading={accountStore.meta}
        />
      </section>
      {accountStore.accountData && (
        <AccountCard account={accountStore.accountData} />
      )}
    </div>
  );
};

export default observer(SearchPage);
