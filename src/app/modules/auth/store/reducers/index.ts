import { createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import { User } from "@app/modules/auth/contracts";
import { AuthActions, AuthActionsTypes, LoginSuccess, SignSuccess } from "@app/modules/auth/store/actions";
import login from "@app/modules/auth/store/reducers/login";
import loginSuccess from "@app/modules/auth/store/reducers/login-success";
import loginFailure from "@app/modules/auth/store/reducers/login-failure";
import sign from "@app/modules/auth/store/reducers/sign";
import signSuccess from "@app/modules/auth/store/reducers/sign-success";
import signFailure from "@app/modules/auth/store/reducers/sign-failure";
import logout from "@app/modules/auth/store/reducers/logout";

export interface AuthState {
  user: User;
  pending: boolean;
}

export const initialState: AuthState = {
  user: null,
  pending: null
};

export function reducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionsTypes.Login:
      return login(state);

    case AuthActionsTypes.LoginSuccess:
      return loginSuccess(state, action as LoginSuccess);

    case AuthActionsTypes.LoginFailure:
      return loginFailure(state);

    case AuthActionsTypes.Sign:
      return sign(state);

    case AuthActionsTypes.SignSuccess:
      return signSuccess(state, action as SignSuccess);

    case AuthActionsTypes.SignFailure:
      return signFailure(state);

    case AuthActionsTypes.Logout:
      return logout(initialState);

    default: {
      return state;
    }
  }
}

export const getAuthState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>('user');
