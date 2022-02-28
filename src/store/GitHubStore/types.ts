import { ApiResponse } from "../../shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};

export type GetRepositoriesParams = {
  repositoryId?: number;
};
export type GetBranchesParams = {
  owner: string;
  repo: string;
};

export type GitHubRepoOwner = {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
};

export type RepoItem = {
  id: number;
  url: string;
  name: string;
  description: string;
  html_url: string;
  branches_url: string;
  stargazers_count: number;
  owner: GitHubRepoOwner;
  updated_at: string;
};

export type BranchItem = {
  name: string;
  protected: boolean;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
}
