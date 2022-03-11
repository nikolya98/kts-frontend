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

import { GetReposListParams } from "./types";

type ReposListStorePrivateFields = "_reposList" | "_meta";

class ReposListStore implements ILocalStore {
  constructor() {
    makeObservable<ReposListStore, ReposListStorePrivateFields>(this, {
      _reposList: observable.ref,
      _meta: observable,
      reposList: computed,
      meta: computed,
      setMeta: action,
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

  setMeta(newMeta: Meta): void {
    this._meta = newMeta;
  }

  async getReposList(params: GetReposListParams): Promise<void> {
    this._meta = Meta.loading;
    this._reposList = getInitialCollection();

    try {
      const response = await this._apiStore.request<RepoItemApi[]>({
        method: HTTPMethod.GET,
        data: {},
        headers: {},
        endpoint: `/orgs/${params.organizationName}/repos`,
      });

      runInAction(() => {
        if (response.status === StatusHTTP.OK) {
          try {
            this._meta = Meta.success;
            const repositories = collectionFromArray<number, RepoItemApi>(
              response.data
            );
            this._reposList = normalizeCollection<
              number,
              RepoItemApi,
              RepoItemModel
            >(repositories, normalizeRepoItemData);
            return;
          } catch (error) {
            this._meta = Meta.error;
            this._reposList = getInitialCollection();
            return;
          }
        }

        this._meta = Meta.error;
      });
    } catch (error) {
      runInAction(() => {
        this._meta = Meta.error;
        this._reposList = getInitialCollection();
      });
    }
  }

  destroy() {
    // nothing to do
  }
}

export default ReposListStore;
