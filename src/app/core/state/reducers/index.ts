import {ActionReducerMap, createFeatureSelector, MemoizedSelector} from '@ngrx/store';
import { RouterState, reducer as routerReducer } from '@core/state/reducers/router';

export interface CoreState {
  router: RouterState;
}

export const reducers: ActionReducerMap<CoreState> = {
  router: routerReducer,
};

export const getRouterState: MemoizedSelector<CoreState, RouterState> = createFeatureSelector<RouterState>('router');
