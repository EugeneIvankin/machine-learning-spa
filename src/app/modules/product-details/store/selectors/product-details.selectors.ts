import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getProductDetailsState, ProductDetailsState } from '@app/modules/product-details/store/reducers';
import { ProductDetails } from '@app/shared/contracts/product-details';
import { Product } from '@app/shared/contracts/product';

export const getProductDetails: MemoizedSelector<ProductDetailsState, ProductDetails> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.product
);

export const getFeatureProducts: MemoizedSelector<ProductDetailsState, Product[]> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.featureProducts
);

export const getSimilarProducts: MemoizedSelector<ProductDetailsState, Product[]> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.similarProducts
);

export const getDishes: MemoizedSelector<ProductDetailsState, any> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.dishes
);

export const getPending: MemoizedSelector<ProductDetailsState, boolean> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.pending
);

