export type BranchItemApi = {
  name: string;
  protected: boolean;
};

export type BranchItemModel = {
  name: string;
  protected: boolean;
};

export const normalizeBranchItemData = (
  from: BranchItemApi
): BranchItemModel => ({
  name: from.name,
  protected: from.protected,
});

/* export type BranchItemInfoApi = {};
export type BranchItemInfoModel = {};
 */
