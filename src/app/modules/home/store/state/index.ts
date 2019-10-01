import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { BestFoodsActions, BestFoodsActionsTypes } from '../actions/best-foods.actions';
import loadBestFoods from '../reducers/load-best-foods';
import loadBestFoodsSuccess from '../reducers/load-best-foods-success';
import loadBestFoodsFailure from '../reducers/load-best-foods-failure';

export interface HomeState {
  bestFoods: any;
}

export const initialState: HomeState = {
  bestFoods: null
};

export function reducer(state: HomeState = initialState, action: BestFoodsActions): HomeState {
  switch (action.type) {
    case BestFoodsActionsTypes.LoadBestFoods:
      return loadBestFoods(state);

    case BestFoodsActionsTypes.LoadBestFoodsSuccess:
      return loadBestFoodsSuccess(state);

    case BestFoodsActionsTypes.LoadBestFoodsFailure:
      return loadBestFoodsFailure(state);

    default: {
      return state;
    }
  }
}

export const getHomeState: MemoizedSelector<object, HomeState> = createFeatureSelector<HomeState>('home');
