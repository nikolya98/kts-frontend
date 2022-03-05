export type GitHubRepoOwnerApi = {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
};

export type GitHubRepoOwnerModel = {
  id: number;
  htmlUrl: string;
  avatarUrl: string;
  login: string;
};

export const normalizeGitHubRepoOwnerData = (
  from: GitHubRepoOwnerApi
): GitHubRepoOwnerModel => ({
  id: from.id,
  htmlUrl: from.html_url,
  avatarUrl: from.avatar_url,
  login: from.login,
});
