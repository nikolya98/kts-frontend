import { useEffect, useState } from "react";

import { ApiResponse } from "@shared/store/ApiStore/types";
import GitHubStore from "@store/GitHubStore";
import { BranchItem, RepoItem } from "@store/GitHubStore/types";

type RepoProps = {
  repo: RepoItem;
};

const gitHubStore = new GitHubStore();
const BASE_URL = "https://github.com";

const Repo: React.FC<RepoProps> = ({ repo }) => {
  const [branches, setBranches] = useState<BranchItem[]>([]);

  useEffect(() => {
    gitHubStore
      .getBranches({ repo: repo.name, owner: repo.owner.login })
      .then((result: ApiResponse<BranchItem[], any>) => {
        if (result.success) {
          setBranches(result.data);
        }
      });
  }, []);

  return (
    <article>
      <h1>Repository info</h1>
      <section>
        <h2>General</h2>
        <dl>
          <dt>name</dt>
          <dd>
            <a href={repo.html_url}>{repo.name}</a>
          </dd>
          <dt>owner</dt>
          <dd>
            <a href={repo.owner.html_url}>{repo.owner.login}</a>
          </dd>
          <dt>description</dt>
          <dd>{repo.description}</dd>
        </dl>
      </section>
      <section>
        <h2>Branches</h2>
        <ul>
          {branches.map((branch) => {
            return (
              <li key={branch.name}>
                <a
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

export default Repo;
