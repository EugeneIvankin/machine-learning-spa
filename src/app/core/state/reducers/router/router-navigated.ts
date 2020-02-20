import { RouterAction, SerializedRouterStateSnapshot } from '@ngrx/router-store';


import { RouterStateUrl } from '@core/contracts';
import {RouterState} from '@core/state/reducers/router/index';

export default function routerNavigated(state: RouterState, action: RouterAction<SerializedRouterStateSnapshot, RouterStateUrl>)
  : RouterState {
  return {
    ...state,
    history: [
      ...state.history,
      {
        path: action.payload.routerState.url.indexOf('?') > 0
          ? action.payload.routerState.url.substring(0, action.payload.routerState.url.indexOf('?'))
          : action.payload.routerState.url,
        queryParams: action.payload.routerState.queryParams,
      }
    ]
  };
}
