import {
  collectionFromArray,
  CollectionModel,
  getInitialCollection,
  linearizeCollection,
  normalizeCollection,
} from "@models/Collection";
import {
  normalizeRepoItemData,
  RepoItemApi,
  RepoItemModel,
} from "@models/gitHub";
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

import { GetReposListParams, IReposListStore } from "./types";

type ReposListStorePrivateFields = "_reposList" | "_meta";

class ReposListStore implements IReposListStore, ILocalStore {
  constructor() {
    makeObservable<ReposListStore, ReposListStorePrivateFields>(this, {
      _reposList: observable.ref,
      _meta: observable,
      reposList: computed,
      meta: computed,
      getReposList: action,
    });
  }

  private readonly _apiStore = rootStoreInstance.apiStore;
  private _reposList: CollectionModel<number, RepoItemModel> =
    getInitialCollection();
  private _meta = Meta.initial;

  get reposList(): RepoItemModel[] {
    return linearizeCollection(this._reposList);
  }

  get meta(): Meta {
    return this._meta;
  }

  async getReposList(params: GetReposListParams): Promise<void> {
    this._meta = Meta.loading;
    this._reposList = getInitialCollection();

    const response = await this._apiStore.request<RepoItemApi[]>({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/users/${params.accountName}/repos`,
    });

    runInAction(() => {
      try {
        if (response.status === StatusHTTP.OK) {
          const repositories = collectionFromArray<number, RepoItemApi>(
            response.data
          );
          this._reposList = normalizeCollection<
            number,
            RepoItemApi,
            RepoItemModel
          >(repositories, normalizeRepoItemData);
          this._meta = Meta.success;
          return;
        }
        this._meta = Meta.error;
        this._reposList = getInitialCollection();
      } catch (error) {
        this._meta = Meta.error;
        this._reposList = getInitialCollection();
      }
    });
  }

  destroy() {
    // nothing to do
  }
}

export default ReposListStore;
