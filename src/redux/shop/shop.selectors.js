import {createSelector} from 'reselect';

const selectshop = state => state.shop;

export const selectCollections = createSelector(
  [selectshop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => (
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectshop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectshop],
  shop => !!shop.collections
);