import {Action} from '@ngrx/store';

import {LoadProductResponse} from '@app/modules/product-details/contracts';

export enum ProductDetailsActionsTypes {
  LoadProduct = '[Product Details] Load Product',
  LoadProductSuccess = '[Product Details] Loaded Product Success',
  LoadProductFailure = '[Product Details] Loaded Product Failure',
}

export class LoadProduct implements Action {
  public readonly type: ProductDetailsActionsTypes = ProductDetailsActionsTypes.LoadProduct;

  constructor(public payload: { pn: string }) {}
}

export class LoadProductSuccess implements Action {
  public readonly type: ProductDetailsActionsTypes = ProductDetailsActionsTypes.LoadProductSuccess;

  constructor(public payload: { productDetails: LoadProductResponse }) {}
}

export class LoadProductFailure implements Action {
  public readonly type: ProductDetailsActionsTypes = ProductDetailsActionsTypes.LoadProductFailure;

  constructor(public payload?: any) {}
}

export type ProductDetailsActions
  = LoadProduct
  | LoadProductSuccess
  | LoadProductFailure;
