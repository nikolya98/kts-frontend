import { createContext, useContext } from "react";

import { RepoItem } from "@store/GitHubStore/types";

type ReposContextType = {
  repositories: RepoItem[];
  load: (repoName: string) => Promise<any> | void;
};

export const ReposContext = createContext<ReposContextType>({
  repositories: [],
  load: () => {},
});

export const useReposContext = () => useContext(ReposContext);
