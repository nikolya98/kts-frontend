import ApiStore from "@shared/store/ApiStore";

const BASE_URL = "https://api.github.com";

export class RootStore {
  private readonly _apiStore = new ApiStore(BASE_URL);

  get apiStore() {
    return this._apiStore;
  }
}
