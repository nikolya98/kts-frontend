import { getDate } from "@utils/getDate";

export type AccountDataApi = {
  login: string;
  id: number;
  repos_url: string;
  avatar_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  followers: number;
  type: string;
  email: string;
  location: string;
};

export type AccountDataModel = {
  login: string;
  id: number;
  reposUrl: string;
  avatarUrl: string;
  htmlUrl: string;
  createdAt: string;
  updatedAt: string;
  followers: number;
  type: string;
  email: string;
  location: string;
};

export const normalizeAccountData = (
  from: AccountDataApi
): AccountDataModel => {
  return {
    login: from.login,
    id: from.id,
    reposUrl: from.repos_url,
    avatarUrl: from.avatar_url,
    htmlUrl: from.html_url,
    createdAt: getDate(from.created_at),
    updatedAt: getDate(from.updated_at),
    followers: from.followers,
    type: from.type,
    email: from.email,
    location: from.location,
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

export const isUser = (data: UserDataApi | OrganizationDataApi): boolean => {
  return data.type === "User";
};
