import {
  isUser,
  normalizeOrganizationData,
  normalizeUserData,
  OrganizationDataModel,
  UserDataModel,
} from "@models/gitHub/accountInfo/accountInfo";
import { HTTPMethod, Meta, StatusHTTP } from "@shared/store/ApiStore/types";
import rootStoreInstance from "@store/RootStore";
import { ILocalStore } from "@store/useLocalStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import { GetAccountDataParams, IAccountStore } from "./types";

type AccountStorePrivateFields = "_accountData" | "_meta";

export default class AccountStore implements IAccountStore, ILocalStore {
  constructor() {
    makeObservable<AccountStore, AccountStorePrivateFields>(this, {
      _accountData: observable,
      _meta: observable,
      accountData: computed,
      meta: computed,
      getAccountData: action,
    });
  }

  private readonly _apiStore = rootStoreInstance.apiStore;
  private _accountData: UserDataModel | OrganizationDataModel | null = null;
  private _meta: Meta = Meta.initial;

  get accountData() {
    return this._accountData;
  }

  get meta() {
    return this._meta;
  }

  async getAccountData(params: GetAccountDataParams): Promise<void> {
    this._meta = Meta.loading;
    this._accountData = null;

    try {
      const response = await this._apiStore.request<
        UserDataModel | OrganizationDataModel
      >({
        method: HTTPMethod.GET,
        data: {},
        headers: {},
        endpoint: `/users/${params.accountName}`,
      });

      runInAction(() => {
        try {
          if (response.status === StatusHTTP.OK) {
            this._meta = Meta.success;
            if (isUser(response.data)) {
              this._accountData = normalizeUserData(response.data);
            } else {
              this._accountData = normalizeOrganizationData(response.data);
            }
            return;
          }
        } catch (error) {
          this._meta = Meta.error;
          this._accountData = null;
        }
      });
    } catch (error) {
      this._meta = Meta.error;
      this._accountData = null;
    }
  }

  destroy() {
    // nothing to do
  }
}
