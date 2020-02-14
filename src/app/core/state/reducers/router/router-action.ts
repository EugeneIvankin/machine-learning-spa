import { RouterAction, SerializedRouterStateSnapshot } from '@ngrx/router-store';
import {RouterState} from '@core/state/reducers/router/index';
import { Data, Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}


export default function routerAction(state: RouterState, action: RouterAction<SerializedRouterStateSnapshot, RouterStateUrl>)
  : RouterState {
  return {
    ...state,
    state: action.payload.routerState
  };
}
