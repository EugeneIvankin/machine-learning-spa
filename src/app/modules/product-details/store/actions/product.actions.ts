import { Action } from '@ngrx/store';

import { ProductDetails } from '@app/shared/contracts/product-details';

export enum ProductActionsTypes {
    LoadProductDetails = '[Home] Load Product Details',
    LoadProductDetailsSuccess = '[Home] Loaded Product Details Success',
    LoadProductDetailsFailure = '[Home] Loaded Product Details Failure'
  }

export class LoadProductDetails implements Action {
  public readonly type: ProductActionsTypes = ProductActionsTypes.LoadProductDetails;

  constructor(public payload: {pn: string}) {}
}

export class LoadProductDetailsSuccess implements Action {
  public readonly type: ProductActionsTypes = ProductActionsTypes.LoadProductDetailsSuccess;

  constructor(public payload: { productDetails: ProductDetails }) {}
}

export class LoadProductDetailsFailure implements Action {
  public readonly type: ProductActionsTypes = ProductActionsTypes.LoadProductDetailsFailure;

 constructor(public payload?: any) {}
}

export type HomeActions
  = LoadProductDetails
  | LoadProductDetailsSuccess
  | LoadProductDetailsFailure;
