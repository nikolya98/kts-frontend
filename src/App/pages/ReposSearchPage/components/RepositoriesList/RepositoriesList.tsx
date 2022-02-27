import { memo } from "react";

import RepoTile from "@components/RepoTile";
import { useReposContext } from "@config/contexts/ReposContext";

import repositoriesListStyle from "./RepositoriesList.module.scss";

const RepositoriesList = () => {
  const { repositories } = useReposContext();

  return (
    <ul>
      {repositories.map((repository) => {
        return (
          <li key={repository.id} className={repositoriesListStyle.item}>
            <RepoTile item={repository} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(RepositoriesList);
