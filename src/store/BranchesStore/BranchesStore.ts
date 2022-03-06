import {
  collectionFromArray,
  CollectionModel,
  getInitialCollection,
  linearizeCollection,
  normalizeCollection,
} from "@models/Collection";
import {
  BranchItemApi,
  BranchItemModel,
  normalizeBranchItemData,
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

import { GetBranchesParams, IBranchesStore } from "./types";

type BranchesStorePrivateFields = "_meta" | "_branches";

class BranchesStore implements IBranchesStore, ILocalStore {
  constructor() {
    makeObservable<BranchesStore, BranchesStorePrivateFields>(this, {
      _branches: observable,
      _meta: observable,
      branches: computed,
      meta: computed,
      getBranches: action,
    });
  }

  private readonly _apiStore = rootStoreInstance.apiStore;
  private _branches: CollectionModel<number, BranchItemModel> =
    getInitialCollection();
  private _meta = Meta.initial;

  get branches() {
    return linearizeCollection(this._branches);
  }

  get meta() {
    return this._meta;
  }

  async getBranches(params: GetBranchesParams): Promise<void> {
    this._meta = Meta.loading;
    this._branches = getInitialCollection();

    try {
      const response = await this._apiStore.request({
        method: HTTPMethod.GET,
        data: {},
        headers: {},
        endpoint: `/repos/${params.owner}/${params.repo}/branches`,
      });

      runInAction(() => {
        if (response.status === StatusHTTP.Ok) {
          const branches = collectionFromArray<number, BranchItemModel>(
            response.data
          );
          this._branches = normalizeCollection<
            number,
            BranchItemApi,
            BranchItemModel
          >(branches, normalizeBranchItemData);
        }
      });
    } catch (error) {
      runInAction(() => {
        this._meta = Meta.error;
        this._branches = getInitialCollection();
      });
    }
  }

  destroy() {}
}

export default BranchesStore;
