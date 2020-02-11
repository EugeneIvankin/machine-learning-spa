import * as fromRouter from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';

export interface CoreState {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<CoreState> = {
  router: fromRouter.routerReducer,
};
