import { useEffect } from "react";

import { Meta } from "@shared/store/ApiStore/types";
import RepoItemStore from "@store/RepoItemStore";
import useLocalStore from "@store/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import Repo from "./components/Repo";

const RepoPage: React.FC = () => {
  const { repoId } = useParams();
  const repoItemStore = useLocalStore(() => new RepoItemStore());

  useEffect(() => {
    const repositoryId = Number(repoId);
    repoItemStore.getRepo({ repositoryId });
  }, [repoId]);

  if (repoItemStore.repo) {
    return (
      <div className="container">
        <Repo repo={repoItemStore.repo} />;
      </div>
    );
  }

  return <h1>{repoItemStore.meta === Meta.error ? "error" : ""}</h1>;
};

export default observer(RepoPage);
