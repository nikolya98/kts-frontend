export type GetRepoParams = {
  repositoryId: number;
};

export interface IRepoItemStore {
  getRepo(params: GetRepoParams): Promise<any>;
}
