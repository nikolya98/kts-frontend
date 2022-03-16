import { getDate } from "@utils/getDate";

export type AccountDataApi = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
  followers: number;
  type: string;
  email: string;
  location: string;
  public_repos: number;
  twitter_username: string;
  blog: string;
  following: number;
};

export type AccountDataModel = {
  login: string;
  id: number;
  avatarUrl: string;
  htmlUrl: string;
  createdAt: string;
  followers: number;
  type: string;
  email: string;
  location: string;
  publicRepos: number;
  twitterUsername: string;
  blog: string;
  following: number;
};

export const normalizeAccountData = (
  from: AccountDataApi
): AccountDataModel => {
  return {
    login: from.login,
    id: from.id,
    avatarUrl: from.avatar_url,
    htmlUrl: from.html_url,
    createdAt: getDate(from.created_at),
    followers: from.followers,
    type: from.type,
    email: from.email,
    location: from.location,
    publicRepos: from.public_repos,
    twitterUsername: from.twitter_username,
    blog: from.blog,
    following: from.following,
  };
};

export type UserDataApi = AccountDataApi & {
  followers_url: string;
  bio: string;
};

export type UserDataModel = AccountDataModel & {
  followersUrl: string;
  bio: string;
};

export const normalizeUserData = (from: UserDataApi): UserDataModel => {
  const normalizedAccountData = normalizeAccountData(from);

  return {
    ...normalizedAccountData,
    followersUrl: from.followers_url,
    bio: from.bio,
  };
};

export type OrganizationDataApi = AccountDataApi & {
  members_url: string;
  description: string;
};

export type OrganizationDataModel = AccountDataModel & {
  membersUrl: string;
  description: string;
};

export const normalizeOrganizationData = (
  from: OrganizationDataApi
): OrganizationDataModel => {
  const normalizedAccountData = normalizeAccountData(from);

  return {
    ...normalizedAccountData,
    description: from.description,
    membersUrl: from.members_url,
  };
};

export const isUserApi = (data: UserDataApi | OrganizationDataApi): boolean => {
  return data.type === "User";
};

export const isUserModel = (
  data: UserDataModel | OrganizationDataModel
): boolean => {
  return data.type === "User";
};
