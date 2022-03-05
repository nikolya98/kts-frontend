import { useState, useEffect } from "react";

import { ReposContext } from "@config/contexts/ReposContext";
import { SearchBarContext } from "@config/contexts/SearchBarContext";
import { Meta } from "@shared/store/ApiStore/types";
import ReposListStore from "@store/ReposListStore";
import useLocalStore from "@store/useLocalStore";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";

import RepositoriesList from "./components/RepositoriesList";
import SearchBar from "./components/SearchBar";
import searchPageStyle from "./ReposSearchPage.module.scss";

const ReposContextProvider = ReposContext.Provider;
const SearchBarContextProvider = SearchBarContext.Provider;

const ReposSearchPage: React.FC = () => {
  const reposListStore = useLocalStore(() => new ReposListStore());
  const [organization, setOrganization] = useState("");
  const repositories = reposListStore.reposList;
  const load = (): void => {
    reposListStore.setMeta(Meta.loading);
  };
  const isLoading = reposListStore.meta;

  useEffect(
    () =>
      autorun(() => {
        if (reposListStore.meta !== Meta.loading) {
          return;
        }

        reposListStore.getReposList({
          organizationName: organization,
        });
      }),
    [reposListStore.meta, organization, reposListStore]
  );

  return (
    <div className="container">
      <section className={searchPageStyle.repositories}>
        <h2 className="visually-hidden">Репозитории</h2>
        <SearchBarContextProvider
          value={{
            inputValue: organization,
            setInputValue: setOrganization,
            isLoading,
            load,
          }}
        >
          <SearchBar />
        </SearchBarContextProvider>
        <ReposContextProvider value={{ repositories }}>
          <RepositoriesList />
        </ReposContextProvider>
      </section>
    </div>
  );
};

export default observer(ReposSearchPage);
