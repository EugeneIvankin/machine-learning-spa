import { createSelector, MemoizedSelector } from '@ngrx/store';

import { getHomeState, HomeState } from '@app/modules/home/store/reducers';
import { Product } from '@app/shared/contracts/product';

export const getProductsList: MemoizedSelector<HomeState, Product[]> = createSelector(
  getHomeState,
  (state: HomeState) => state.products
);
