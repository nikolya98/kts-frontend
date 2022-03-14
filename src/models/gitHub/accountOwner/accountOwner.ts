import { OrganizationDataModel, UserDataModel } from "@models/gitHub";
import { getDate } from "@utils/getDate";

export type AccountOwnerModel = {
  login: string;
  id: number;
  avatarUrl: string;
  htmlUrl: string;
  createdAt: string;
  followers: number;
  following: number;
};

export const getOwnerInfo = (
  account: UserDataModel | OrganizationDataModel
): AccountOwnerModel => ({
  login: account.login,
  id: account.id,
  avatarUrl: account.avatarUrl,
  htmlUrl: account.htmlUrl,
  createdAt: getDate(account.createdAt),
  followers: account.followers,
  following: account.following,
});
