import {createSelector, MemoizedSelector} from '@ngrx/store';
import {Data, Params} from '@angular/router';

import {CoreState, getRouterState} from '@core/state/reducers';
import {RouterState} from '@core/state/reducers/router';
import {RouterHistory} from '@core/contracts';

export const getUrl: MemoizedSelector<CoreState, string> = createSelector(
  getRouterState,
  (state: RouterState) => (state && state.state.url)
);

export const getRouterData: MemoizedSelector<CoreState, Data> = createSelector(
  getRouterState,
  (state: RouterState) => {
    if (state && state.state) {
      return state.state.data;
    }

    return {};
  }
);

export const getQueryParams: MemoizedSelector<CoreState, Data> = createSelector(
  getRouterState,
  (state: RouterState) => (state && state.state.queryParams)
);

export const getParams: MemoizedSelector<CoreState, Params> = createSelector(
  getRouterState,
  (state: RouterState) => {
    if (state && state.state) {
      return state.state.params;
    }

    return {};
  }
);

export const getPreviousUrl: MemoizedSelector<CoreState, RouterHistory> = createSelector(
  getRouterState,
  (state: RouterState) => {
    const minHistoryLength = 2;

    if (state.history && state.history.length >= minHistoryLength) {
      return state.history[state.history.length - minHistoryLength];
    } else {
      return null;
    }
  }
);

