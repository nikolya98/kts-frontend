import { useState, useEffect } from "react";

import { ApiResponse } from "@shared/store/ApiStore/types";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";

import RepositoriesList from "./components/RepositoriesList";
import SearchBar from "./components/SearchBar";
import "./ReposSearchPage.css";

type ReposSearchPageState = {
  inputValue: string;
  isLoading: boolean;
  repositories: RepoItem[];
};

function ReposSearchPage() {
  const [state, setState] = useState<ReposSearchPageState>({
    inputValue: "",
    isLoading: false,
    repositories: [],
  });

  useEffect(() => {
    if (!state.isLoading) {
      return;
    }

    const gitHubStore = new GitHubStore();

    gitHubStore
      .getOrganizationReposList({
        organizationName: state.inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setState((prev) => {
            return {
              ...prev,
              inputValue: "",
              isLoading: false,
              repositories: result.data,
            };
          });
        } else {
          setState((prev) => {
            return {
              ...prev,
              inputValue: "",
              isLoading: false,
              repositories: [],
            };
          });
        }
      });
  }, [state.isLoading]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    let value: string;
    if (target) {
      value = target.value;
      setState((prev) => {
        return {
          ...prev,
          inputValue: value,
        };
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setState((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });

    //loadData(state.inputValue);
  };

  return (
    <section className="repositories">
      <h2 className="visually-hidden">Репозитории</h2>
      <SearchBar
        onChange={handleChange}
        onClick={handleClick}
        inputValue={state.inputValue}
        isLoading={state.isLoading}
      />
      <RepositoriesList repositories={state.repositories} />
    </section>
  );
}

export default ReposSearchPage;
