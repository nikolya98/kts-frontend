import { useState, useEffect } from "react";

import { ReposContext } from "@config/contexts/ReposContext";
import { SearchBarContext } from "@config/contexts/SearchBarContext";
import { ApiResponse } from "@shared/store/ApiStore/types";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";

import RepositoriesList from "./components/RepositoriesList";
import SearchBar from "./components/SearchBar";
import searchPageStyle from "./ReposSearchPage.module.scss";

const ReposContextProvider = ReposContext.Provider;
const SearchBarContextProvider = SearchBarContext.Provider;
const gitHubStore = new GitHubStore();

const ReposSearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repositories, setRepositories] = useState<RepoItem[]>([]);

  const load = async (repoId: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/repositories/${repoId}`
      );
      // eslint-disable-next-line no-console
      console.log(response);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error("Whoooa");
      }
    } catch (e) {
      return "Smth went wrong";
    }
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setInputValue("");
          setIsLoading(false);
          setRepositories(result.data);
        } else {
          setInputValue("");
          setIsLoading(false);
          setRepositories([]);
        }
      });
  }, [isLoading]);

  return (
    <div className={searchPageStyle.container}>
      <section className={searchPageStyle.repositories}>
        <h2 className="visually-hidden">Репозитории</h2>
        <SearchBarContextProvider
          value={{ inputValue, setInputValue, isLoading, setIsLoading }}
        >
          <SearchBar />
        </SearchBarContextProvider>
        <ReposContextProvider value={{ repositories, load }}>
          <RepositoriesList />
        </ReposContextProvider>
      </section>
    </div>
  );
};

export default ReposSearchPage;
