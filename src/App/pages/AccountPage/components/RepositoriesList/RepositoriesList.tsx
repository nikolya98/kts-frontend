import { useEffect } from "react";

import { RepoItemModel } from "@models/gitHub";
import ReposListStore from "@store/ReposListStore";
import useLocalStore from "@store/useLocalStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";

import RepoCard from "../RepoCard";

type RepositoriesListProps = {
  onClick: (repo: RepoItemModel) => void;
  account: string;
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  onClick,
  account,
}): JSX.Element => {
  const reposListStore = useLocalStore(() => new ReposListStore());
  useEffect(
    () =>
      runInAction(() => {
        reposListStore.getReposList({ accountName: account });
      }),
    []
  );
  return (
    <ul>
      {reposListStore.reposList.map((repo: RepoItemModel) => {
        return (
          <li key={repo.id} onClick={() => onClick(repo)}>
            <RepoCard repo={repo} />
          </li>
        );
      })}
    </ul>
  );
};

export default observer(RepositoriesList);
