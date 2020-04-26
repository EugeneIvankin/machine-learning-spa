import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import {
  AddToPurchases,
  DeleteFromPurchases,
  LoadPurchasesSuccess,
  PurchasesActionsTypes
} from "@app/modules/purchases/store/actions";
import addToPurchases from "@app/modules/purchases/store/reducers/add-to-purchases";
import { Product } from "@app/shared/contracts/product";
import loadPurchasesSuccess from "@app/modules/purchases/store/reducers/load-purchases-success";
import deleteFromPurchases from "@app/modules/purchases/store/reducers/delete-from-purchases";

export interface PurchasesState {
  purchasesProducts: Product[];
  productsIds: string[];
  pending: boolean;
}

export const initialState: PurchasesState = {
  purchasesProducts: [],
  productsIds: [],
  pending: null
};

export function reducer(state: PurchasesState = initialState, action: any): PurchasesState {
  switch (action.type) {
    case PurchasesActionsTypes.AddToPurchases:
      return addToPurchases(state, action as AddToPurchases);

    case PurchasesActionsTypes.LoadPurchasesSuccess:
      return loadPurchasesSuccess(state, action as LoadPurchasesSuccess);

    case PurchasesActionsTypes.DeleteFromPurchases:
      return deleteFromPurchases(state, action as DeleteFromPurchases);

    default: {
      return state;
    }
  }
}

export const getPurchasesState: MemoizedSelector<object, PurchasesState> =
  createFeatureSelector<PurchasesState>('purchases');
