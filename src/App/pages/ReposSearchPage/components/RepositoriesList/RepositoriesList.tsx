import { memo } from "react";

import RepoTile from "@components/RepoTile";
import { useReposContext } from "@config/contexts/ReposContext";

import "./RepositoriesList.css";

const RepositoriesList = () => {
  const { repositories } = useReposContext();

  return (
    <ul className="repositories-list repositories__repositories-list">
      {repositories.map((repository) => {
        return (
          <li key={repository.id} className="repositories-list__item">
            <RepoTile item={repository} />
          </li>
        );
      })}
    </ul>
  );
};

export default memo(RepositoriesList);
