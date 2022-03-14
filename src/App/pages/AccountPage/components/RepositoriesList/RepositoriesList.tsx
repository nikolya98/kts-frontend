import { RepoItemModel } from "@models/gitHub";

import RepoCard from "../RepoCard";

type RepositoriesListProps = {
  repositories: RepoItemModel[];
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  repositories,
}): JSX.Element => {
  return (
    <ul>
      {repositories.map((repo: RepoItemModel) => {
        return (
          <li key={repo.id}>
            <RepoCard repo={repo} />
          </li>
        );
      })}
    </ul>
  );
};

export default RepositoriesList;
