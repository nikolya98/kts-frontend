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

const gitHubStore = new GitHubStore();

const ReposSearchPage = () => {
  const [state, setState] = useState<ReposSearchPageState>({
    inputValue: "",
    isLoading: false,
    repositories: [],
  });

  useEffect(() => {
    if (!state.isLoading) {
      return;
    }

    gitHubStore
      .getOrganizationReposList({
        organizationName: state.inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setState((prev) => {
            return {
              inputValue: "",
              isLoading: false,
              repositories: result.data,
            };
          });
        } else {
          setState((prev) => {
            return {
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
    if (target) {
      setState((prev) => {
        return {
          ...prev,
          inputValue: target.value,
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
};

export default ReposSearchPage;
