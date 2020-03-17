import { Action } from '@ngrx/store';

import { RedirectRoute } from '@core/contracts/redirect-route';

export enum RouterActionsTypes {
  Go = '[Router] Go',
}

export class Go implements Action {
  public readonly type: RouterActionsTypes = RouterActionsTypes.Go;

  constructor(public payload: RedirectRoute) {}
}

export type RouterActions = Go;
