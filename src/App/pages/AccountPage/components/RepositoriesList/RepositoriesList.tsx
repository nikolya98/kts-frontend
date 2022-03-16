import { useEffect, useState } from "react";

import { RepoItemModel } from "@models/gitHub";
import ReposListStore from "@store/ReposListStore";
import useLocalStore from "@store/useLocalStore";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import InfiniteScroll from "react-infinite-scroll-component";

import RepoCard from "../RepoCard";
import reposListStyle from "./RepositoriesList.module.scss";

type RepositoriesListProps = {
  onClick: (repo: RepoItemModel) => void;
  account: string;
};

const PER_PAGE = 10;

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  onClick,
  account,
}): JSX.Element => {
  const reposListStore = useLocalStore(() => new ReposListStore());
  const [reposList, setReposList] = useState<RepoItemModel[]>([]);
  const [page, setPage] = useState(1);

  useEffect(
    () =>
      runInAction(() => {
        reposListStore.getReposList({
          accountName: account,
          data: {
            page,
            per_page: PER_PAGE,
          },
        });
      }),
    [page]
  );

  useEffect(() => {
    setReposList((prev) => prev.concat(reposListStore.reposList));
  }, [reposListStore.reposList]);

  return (
    <InfiniteScroll
      next={() => setPage((prev) => prev + 1)}
      loader={<li>Loading...</li>}
      hasMore={reposList.length % PER_PAGE === 0}
      dataLength={reposList.length}
    >
      <ul>
        {reposList.map((repo: RepoItemModel) => {
          return (
            <li
              className={reposListStyle.item}
              key={repo.id}
              onClick={() => onClick(repo)}
            >
              <RepoCard repo={repo} />
            </li>
          );
        })}
      </ul>
    </InfiniteScroll>
  );
};

export default observer(RepositoriesList);
