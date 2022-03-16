export type CollectionModel<K extends number | string, T> = {
  order: K[];
  records: Record<K, T>;
};

export const getInitialCollection = (): CollectionModel<any, any> => ({
  order: [],
  records: {},
});

export const linearizeCollection = <K extends number | string, T>(
  collection: CollectionModel<K, T>
): T[] => {
  const linearized: T[] = [];

  collection.order.forEach((key) => {
    linearized.push(collection.records[key]);
  });

  return linearized;
};

export const collectionFromArray = <K extends number | string, T>(
  arr: T[]
): CollectionModel<K, T> => {
  const collection = getInitialCollection();
  const collectionLength = arr.length;

  for (let i = 0; i < collectionLength; i += 1) {
    collection.order.push(i);
    collection.records[i] = arr[i];
  }

  return collection;
};

export const normalizeCollection = <K extends number | string, S, T>(
  collection: CollectionModel<K, S>,
  normalizer: (item: S) => T
): CollectionModel<K, T> => {
  const normalized = getInitialCollection();

  collection.order.forEach((key) => {
    normalized.order.push(key);
    normalized.records[key] = normalizer(collection.records[key]);
  });

  return normalized;
};
