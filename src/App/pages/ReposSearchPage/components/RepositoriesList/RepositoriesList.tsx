import { memo } from "react";

import RepoTile from "@components/RepoTile";
import { RepoItem } from "@store/GitHubStore/types";

import "./RepositoriesList.css";

type RepositoriesListProps = {
  repositories: RepoItem[];
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repositories,
}) => {
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
