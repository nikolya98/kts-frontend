import { RepoItemApi, BranchItemApi } from "@models/gitHub";
import ApiStore from "@shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "@shared/store/ApiStore/types";

import {
  GetBranchesParams,
  GetOrganizationReposListParams,
  GetRepositoriesParams,
  IGitHubStore,
} from "./types";

const BASE_URL = "https://api.github.com";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(BASE_URL);

  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItemApi[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/orgs/${params.organizationName}/repos`,
    });
  }

  async getRepositories(
    params: GetRepositoriesParams
  ): Promise<ApiResponse<RepoItemApi[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: params.repositoryId ? { since: params.repositoryId - 1 } : {},
      headers: {},
      endpoint: "/repositories",
    });
  }

  async getBranches(
    params: GetBranchesParams
  ): Promise<ApiResponse<BranchItemApi[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/repos/${params.owner}/${params.repo}/branches`,
    });
  }
}
