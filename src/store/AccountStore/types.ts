export interface IAccountStore {
  getAccountData: (params: GetAccountDataParams) => Promise<void>;
}

export type GetAccountDataParams = {
  accountName: string;
};
