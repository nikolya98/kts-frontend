import { memo, useEffect } from "react";

import { RepoItemModel } from "@models/gitHub";
import BranchesStore from "@store/BranchesStore";
import useLocalStore from "@store/useLocalStore";
import { autorun } from "mobx";
import { observer } from "mobx-react-lite";

import RepoStyle from "./Repo.module.scss";

type RepoProps = {
  repo: RepoItemModel;
};

const BASE_URL = "https://api.github.com";

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const branchesStore = useLocalStore(() => new BranchesStore());

  useEffect(
    () =>
      autorun(() => {
        branchesStore.getBranches({ owner: repo.owner.login, repo: repo.name });
      }),
    []
  );

  return (
    <article className={RepoStyle.grid}>
      <h1 className={`${RepoStyle.title} ${RepoStyle["main-title"]}`}>
        Repository info
      </h1>
      <section>
        <h2 className={RepoStyle.title}>General</h2>
        <dl>
          <dt className={RepoStyle.defenition}>name:</dt>
          <dd className={RepoStyle.description}>
            <a href={repo.htmlUrl}>{repo.name}</a>
          </dd>
          <dt className={RepoStyle.defenition}>owner:</dt>
          <dd className={RepoStyle.description}>
            <a href={repo.owner.htmlUrl}>{repo.owner.login}</a>
          </dd>
          <dt className={RepoStyle.defenition}>description:</dt>
          <dd className={RepoStyle.description}>{repo.description}</dd>
        </dl>
      </section>
      <section>
        <h2 className={RepoStyle.title}>Branches</h2>
        <ul className={RepoStyle.branches}>
          {branchesStore.branches.map((branch) => {
            return (
              <li key={branch.name}>
                <a
                  className="link"
                  href={`${BASE_URL}/${repo.owner.login}/${repo.name}/tree/${branch.name}`}
                >
                  {branch.name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default memo(observer(Repo));
