import { useEffect } from "react";

import BranchIcon from "@components/BranchIcon";
import { BranchItemModel, RepoItemModel } from "@models/gitHub";
import BranchesStore from "@store/BranchesStore";
import useLocalStore from "@store/useLocalStore";
import { observer } from "mobx-react-lite";

import branchesListStyle from "./BranchesList.module.scss";

type BranchesListProps = {
  repo: RepoItemModel;
  account: string;
};

const BranchesList: React.FC<BranchesListProps> = ({
  repo,
  account,
}): JSX.Element => {
  const branchesStore = useLocalStore(() => new BranchesStore());

  useEffect(() => {
    branchesStore.getBranches({ account: account, repo: repo.name });
  }, [repo]);

  return (
    <section className={branchesListStyle.container}>
      <h2 className={branchesListStyle.title}>{repo.name}</h2>
      <section className={branchesListStyle.description}>
        <h3 className={branchesListStyle.subtitle}>Description</h3>
        <p>{repo.description || "This repository has no description"}</p>
        <ul>
          <li>Language: {repo.language || "Not available"}</li>
          <li>
            Updated: <time>{repo.updatedAt}</time>
          </li>
        </ul>
      </section>
      <section>
        <h3 className={branchesListStyle.subtitle}>Branches</h3>
        <ul>
          {branchesStore.branches.map((branch: BranchItemModel) => {
            return (
              <li className={branchesListStyle.branch} key={branch.name}>
                <BranchIcon className={branchesListStyle["branch-icon"]} />
                <a
                  className={branchesListStyle.link}
                  href={`https://github.com/${account}/${repo.name}/tree/${branch.name}`}
                >
                  {branch.name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default observer(BranchesList);
