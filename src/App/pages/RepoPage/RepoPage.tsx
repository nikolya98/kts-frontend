import { useState, useEffect } from "react";

import { ApiResponse } from "@shared/store/ApiStore/types";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";
import { useParams } from "react-router-dom";

import Repo from "./components/Repo";

const gitHubStore = new GitHubStore();

const RepoPage = () => {
  const [repo, setRepo] = useState<RepoItem | null>(null);
  const [error, setError] = useState(false);
  const { repoId } = useParams();

  useEffect(() => {
    gitHubStore
      .getRepositories({ repositoryId: Number(repoId) })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          const [targetRepo] = result.data.filter(
            ({ id }) => id === Number(repoId)
          );
          if (targetRepo) {
            setRepo(targetRepo);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      });
  }, []);

  if (repo) {
    return <Repo repo={repo} />;
  }

  return <h1>{error ? "error" : ""}</h1>;
};

export default RepoPage;
