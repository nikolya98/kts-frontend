export type GetBranchesParams = {
  account: string;
  repo: string;
};

export interface IBranchesStore {
  getBranches(params: GetBranchesParams): Promise<any>;
}
