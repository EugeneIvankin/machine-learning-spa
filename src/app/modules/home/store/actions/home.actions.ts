import { Action } from '@ngrx/store';

import { Product } from '@app/shared/contracts/product';

export enum HomeActionsTypes {
  LoadBestProducts = '[Home] Load Best Products',
  LoadedBestProductsSuccess = '[Home] Loaded Best Products Success',
  LoadedBestProductsFailure = '[Home] Loaded Best Products Failure',
  SearchProduct = '[Home] Search Product',
  SearchedProductSuccess = '[Home] Search Product Success',
  SearchedProductFailure = '[Home] Search Product Failure'
}

export class LoadBestProducts implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.LoadBestProducts;

  constructor() {}
}

export class LoadedBestProductsSuccess implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.LoadedBestProductsSuccess;

  constructor(public payload: { products: Product[]}) {}
}

export class LoadedBestProductsFailure implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.LoadedBestProductsFailure;

  constructor(public payload?: any) {}
}

export class SearchProduct implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.SearchProduct;

  constructor(public payload: {query: string}) {}
}

export class SearchedProductSuccess implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.SearchedProductSuccess;

  constructor(public payload: { products: Product[]}) {
  }
}

export class SearchedProductFailure implements Action {
  public readonly type: HomeActionsTypes = HomeActionsTypes.SearchedProductFailure;

  constructor(public payload?: any) {}
}

export type HomeActions
  = LoadBestProducts
  | LoadedBestProductsSuccess
  | LoadedBestProductsFailure
  | SearchProduct
  | SearchedProductSuccess
  | SearchedProductFailure;
