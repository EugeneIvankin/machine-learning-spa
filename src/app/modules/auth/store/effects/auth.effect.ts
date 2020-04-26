import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import {
  AuthActionsTypes,
  Login,
  LoginFailure,
  LoginSuccess, Sign,
  SignFailure,
  SignSuccess
} from "@app/modules/auth/store/actions";
import { AuthService } from "@app/modules/auth/services";
import { AppResponse } from "@core/contracts";
import { User } from "@app/modules/auth/contracts";
import { Go } from "@core/state/actions";
import { routes } from "@consts";

@Injectable()
export class AuthEffects {
  @Effect()
  public login$: Observable<LoginSuccess | LoginFailure> = this.actions$.pipe(
    ofType(AuthActionsTypes.Login),
    switchMap((action: Login) =>
      this.service
        .login(action.payload)
        .pipe(
          map((response: AppResponse<User>) => new LoginSuccess(response.payload)),
          catchError((error: any) => of(new LoginFailure(error)))
        )
    )
  );

  @Effect()
  public loginRedirect$: Observable<Go> = this.actions$.pipe(
    ofType(AuthActionsTypes.LoginSuccess || AuthActionsTypes.LoginFailure),
    map(() => new Go({path: [routes.HOME]}))
  );

  @Effect()
  public sign$: Observable<SignSuccess | SignFailure> = this.actions$.pipe(
    ofType(AuthActionsTypes.Sign),
    switchMap((action: Sign) =>
      this.service
        .sign(action.payload)
        .pipe(
          map((response: AppResponse<User>) => new SignSuccess(response.payload)),
          catchError((error: any) => of(new SignFailure(error)))
        )
    )
  );

  @Effect()
  public signRedirect$: Observable<Go> = this.actions$.pipe(
    ofType(AuthActionsTypes.SignSuccess || AuthActionsTypes.SignFailure),
    map(() => new Go({path: [routes.HOME]}))
  );

  @Effect()
  public logout$: Observable<Go> = this.actions$.pipe(
    ofType(AuthActionsTypes.Logout),
    map(() => new Go({path: [routes.HOME]}))
  );

  constructor(
    private actions$: Actions,
    private service: AuthService
  ) {}
}
