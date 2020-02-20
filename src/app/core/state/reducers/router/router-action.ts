import {RouterState} from '@core/state/reducers/router/index';

export default function routerAction(state: RouterState, action: any): RouterState {
  return {
    ...state,
    state: action.payload.routerState.root
  };
}
