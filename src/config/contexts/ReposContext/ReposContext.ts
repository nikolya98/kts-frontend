import { createContext, useContext } from "react";

import { RepoItemModel } from "@models/gitHub";

type ReposContextType = {
  repositories: RepoItemModel[];
  load?: (repoName: string) => Promise<any> | void;
};

export const ReposContext = createContext<ReposContextType>({
  repositories: [],
  load: () => {},
});

export const useReposContext = () => useContext(ReposContext);
