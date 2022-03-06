import {
  normalizeRepoItemData,
  RepoItemApi,
  RepoItemModel,
} from "@models/gitHub";
import ApiStore from "@shared/store/ApiStore";
import { HTTPMethod, Meta, StatusHTTP } from "@shared/store/ApiStore/types";
import { GetRepositoryParams } from "@store/GitHubStore/types";
import { ILocalStore } from "@store/useLocalStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

const BASE_URL = "https://api.github.com";

type PrivateRepoItemStoreFields = "_repo" | "_meta";

class RepoItemStore implements ILocalStore {
  constructor() {
    makeObservable<RepoItemStore, PrivateRepoItemStoreFields>(this, {
      _repo: observable,
      _meta: observable,
      repo: computed,
      meta: computed,
      getRepo: action,
    });
  }

  private readonly _apiStore = new ApiStore(BASE_URL);
  private _repo: RepoItemModel | null = null;
  private _meta = Meta.initial;

  get repo() {
    return this._repo;
  }

  get meta() {
    return this._meta;
  }

  async getRepo(params: GetRepositoryParams): Promise<void> {
    this._meta = Meta.loading;
    this._repo = null;

    try {
      const response = await this._apiStore.request({
        method: HTTPMethod.GET,
        data: params.repositoryId ? { since: params.repositoryId - 1 } : {},
        headers: {},
        endpoint: "/repositories",
      });

      runInAction(() => {
        if (response.status === StatusHTTP.Ok) {
          const [targetRepo] = response.data.filter(
            (repo: RepoItemApi) => repo.id === params.repositoryId
          );

          runInAction(() => {
            if (targetRepo) {
              this._meta = Meta.success;
              this._repo = normalizeRepoItemData(targetRepo);
              return;
            }

            this._meta = Meta.error;
            this._repo = null;
          });
        }
      });
    } catch (error) {
      runInAction(() => {
        this._meta = Meta.error;
        this._repo = null;
      });
    }
  }

  destroy() {
    // nothing to do
  }
}

export default RepoItemStore;
