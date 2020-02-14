import {
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  RouterAction,
  SerializedRouterStateSnapshot
} from '@ngrx/router-store';
import routerAction from '@core/state/reducers/router/router-action';

class RouterStateUrl {
}

export interface RouterState {
  state: RouterStateUrl;
}

export const initialState: RouterState = {
  state: {
    url: '/',
    queryParams: {},
    params: {},
    data: {}
  }
};

export function reducer(
  state: RouterState = initialState, action: RouterAction<SerializedRouterStateSnapshot, any>
): RouterState {
  switch (action.type) {
    case ROUTER_CANCEL:
    case ROUTER_NAVIGATION:
    case ROUTER_ERROR:
      return routerAction(state, action);

    default: {
      return state;
    }
  }
}
