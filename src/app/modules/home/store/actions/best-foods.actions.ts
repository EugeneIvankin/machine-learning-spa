import { Action } from '@ngrx/store';

export enum BestFoodsActionsTypes {
  LoadBestFoods = '[BestFoods] Load',
  LoadBestFoodsSuccess = '[BestFoods] Load Success',
  LoadBestFoodsFailure = '[BestFoods] Load Failure'
}

export class LoadBestFoods implements Action {
  public readonly type: BestFoodsActionsTypes = BestFoodsActionsTypes.LoadBestFoods;

  constructor(public payload?: any) {}
}

export class LoadBestFoodsSuccess implements Action {
  public readonly type: BestFoodsActionsTypes = BestFoodsActionsTypes.LoadBestFoodsSuccess;

  constructor(public payload?: any) {}
}

export class LoadBestFoodsFailure implements Action {
  public readonly type: BestFoodsActionsTypes = BestFoodsActionsTypes.LoadBestFoodsFailure;

  constructor(public payload?: any) {}
}

export type BestFoodsActions
  = LoadBestFoods
  | LoadBestFoodsSuccess
  | LoadBestFoodsFailure;
