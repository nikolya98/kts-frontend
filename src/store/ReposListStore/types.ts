import { GetOrganizationReposListParams } from "@store/GitHubStore/types";

export interface IReposListStore {
  getReposList(params: GetOrganizationReposListParams): Promise<any>;
}
