import { Action } from '@ngrx/store';

import {Product} from "@app/shared/contracts/product";

export enum PurchasesActionsTypes {
  LoadPurchases = '[Purchase] Load Purchases',
  LoadPurchasesSuccess = '[Purchase] Loaded Purchases Success',
  LoadPurchasesFailure = '[Purchase] Loaded Purchases Failure',
  AddToPurchases = '[Purchase] Add To Purchases',
  DeleteFromPurchases = '[Purchase] Delete From Purchases'
}

export class LoadPurchases implements Action {
  public readonly type: PurchasesActionsTypes = PurchasesActionsTypes.LoadPurchases;

  constructor(public payload: {purchasesIds: string[]}) {}
}

export class LoadPurchasesSuccess implements Action {
  public readonly type: PurchasesActionsTypes = PurchasesActionsTypes.LoadPurchasesSuccess;

  constructor(public payload: { products: Product[] }) {}
}

export class LoadPurchasesFailure implements Action {
  public readonly type: PurchasesActionsTypes = PurchasesActionsTypes.LoadPurchasesFailure;

  constructor(public payload?: any) {}
}

export class AddToPurchases implements Action {
  public readonly type: PurchasesActionsTypes = PurchasesActionsTypes.AddToPurchases;

  constructor(public productId: string) {}
}

export class DeleteFromPurchases implements Action {
  public readonly type: PurchasesActionsTypes = PurchasesActionsTypes.DeleteFromPurchases;

  constructor(public productId: string) {}
}

export type PurchasesActions
  = LoadPurchases
  | LoadPurchasesSuccess
  | LoadPurchasesFailure
  | AddToPurchases
  | DeleteFromPurchases;
