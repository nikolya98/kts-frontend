import {
  GitHubRepoOwnerApi,
  GitHubRepoOwnerModel,
  normalizeGitHubRepoOwnerData,
} from "@models/gitHub";

export type RepoItemApi = {
  id: number;
  url: string;
  name: string;
  description: string;
  html_url: string;
  branches_url: string;
  stargazers_count: number;
  owner: GitHubRepoOwnerApi;
  updated_at: string;
};

export type RepoItemModel = {
  id: number;
  url: string;
  name: string;
  description: string;
  htmlUrl: string;
  branchesUrl: string;
  stargazersCount: number;
  owner: GitHubRepoOwnerModel;
  updatedAt: string;
};

export const normalizeRepoItemData = (from: RepoItemApi): RepoItemModel => ({
  id: from.id,
  url: from.url,
  name: from.name,
  description: from.description,
  htmlUrl: from.html_url,
  branchesUrl: from.branches_url,
  stargazersCount: from.stargazers_count,
  owner: normalizeGitHubRepoOwnerData(from.owner),
  updatedAt: from.updated_at,
});
