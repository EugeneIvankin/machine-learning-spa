import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { RedirectRoute } from '@core/contracts/redirect-route';
import { Go, RouterActionsTypes } from '@core/state/actions';
import { RedirectService } from '@core/services/redirect.service';

@Injectable()
export class RouterEffects {
  @Effect({dispatch: false})
  public navigate$: Observable<RedirectRoute> = this.actions$.pipe(
    ofType(RouterActionsTypes.Go),
    map((action: Go) => action.payload),
    tap((route: RedirectRoute) => {
      this.redirectService.redirect(route);
    })
  );

  constructor(
    private actions$: Actions,
    private redirectService: RedirectService
  ) {}
}
