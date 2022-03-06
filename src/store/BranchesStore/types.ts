export type GetBranchesParams = {
  owner: string;
  repo: string;
};

export interface IBranchesStore {
  getBranches(params: GetBranchesParams): Promise<any>;
}
