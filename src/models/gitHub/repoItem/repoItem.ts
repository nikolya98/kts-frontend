import { getDate } from "@utils/getDate";

export type RepoItemApi = {
  id: number;
  url: string;
  name: string;
  description: string;
  html_url: string;
  branches_url: string;
  stargazers_count: number;
  updated_at: string;
  language: string;
  visibility: string;
};

export type RepoItemModel = {
  id: number;
  url: string;
  name: string;
  description: string;
  htmlUrl: string;
  branchesUrl: string;
  stargazersCount: number;
  updatedAt: string;
  language: string;
  visibility: string;
};

export const normalizeRepoItemData = (from: RepoItemApi): RepoItemModel => ({
  id: from.id,
  url: from.url,
  name: from.name,
  description: from.description,
  htmlUrl: from.html_url,
  branchesUrl: from.branches_url,
  stargazersCount: from.stargazers_count,
  updatedAt: getDate(from.updated_at),
  language: from.language,
  visibility: from.visibility,
});
