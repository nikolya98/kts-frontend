export type GetReposListParams = {
  organizationName: string;
};

export interface IReposListStore {
  getReposList(params: GetReposListParams): Promise<any>;
}
