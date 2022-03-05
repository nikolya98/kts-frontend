import { useState, useEffect, memo } from "react";

import {
  normalizeRepoItemData,
  RepoItemApi,
  RepoItemModel,
} from "@models/gitHub";
import { ApiResponse } from "@shared/store/ApiStore/types";
import GitHubStore from "@store/GitHubStore";
import { useParams } from "react-router-dom";

import Repo from "./components/Repo";

const gitHubStore = new GitHubStore();

const RepoPage: React.FC = () => {
  const [repo, setRepo] = useState<RepoItemModel | null>(null);
  const [error, setError] = useState(false);
  const { repoId } = useParams();

  useEffect(() => {
    const repositoryId = Number(repoId);

    gitHubStore
      .getRepositories({ repositoryId })
      .then((result: ApiResponse<RepoItemApi[], any>) => {
        if (result.success) {
          const [targetRepo] = result.data.filter(
            ({ id }) => id === repositoryId
          );
          if (targetRepo) {
            setRepo(normalizeRepoItemData(targetRepo));
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      });
  }, [repoId]);

  if (repo) {
    return (
      <div className="container">
        <Repo repo={repo} />;
      </div>
    );
  }

  return <h1>{error ? "error" : ""}</h1>;
};

export default memo(RepoPage);
