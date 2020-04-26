import {createSelector, MemoizedSelector} from "@ngrx/store";

import { getPurchasesState, PurchasesState } from "@app/modules/purchases/store/reducers";
import { Product } from "@app/shared/contracts";


export const getPurchasesProducts: MemoizedSelector<PurchasesState, Product[]> = createSelector(
  getPurchasesState,
  (state: PurchasesState) => state.purchasesProducts
);

export const getPurchasesProductsIds: MemoizedSelector<PurchasesState, string[]> = createSelector(
  getPurchasesState,
  (state: PurchasesState) => state.productsIds
);
