import {createSelector, MemoizedSelector} from '@ngrx/store';

import {getProductDetailsState, ProductDetailsState} from '@app/modules/product-details/store/reducers';

export const getProductDetails: MemoizedSelector<ProductDetailsState, any> = createSelector(
  getProductDetailsState,
  (state: ProductDetailsState) => state.product
);
