export type GetReposListParams = {
  accountName: string;
};

export interface IReposListStore {
  getReposList(params: GetReposListParams): Promise<any>;
}
