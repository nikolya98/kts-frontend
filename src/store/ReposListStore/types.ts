export type ReposListData = {
  page: number;
  per_page: number;
};

export type GetReposListParams = {
  accountName: string;
  data: ReposListData;
};

export interface IReposListStore {
  getReposList(params: GetReposListParams): Promise<any>;
}
