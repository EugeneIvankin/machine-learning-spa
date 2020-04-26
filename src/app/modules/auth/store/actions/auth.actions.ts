import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Sign = '[Auth] Sign Up',
  SignSuccess = '[Auth] Sign Up Success',
  SignFailure = '[Auth] Sign Up Failure',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.Login;

  constructor(public payload?: any) {}
}

export class LoginSuccess implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.LoginSuccess;

  constructor(public payload?: any) {}
}

export class LoginFailure implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.LoginFailure;

  constructor(public payload?: any) {}
}

export class Sign implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.Sign;

  constructor(public payload?: any) {}
}

export class SignSuccess implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.SignSuccess;

  constructor(public payload?: any) {}
}

export class SignFailure implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.SignFailure;

  constructor(public payload?: any) {}
}

export class Logout implements Action {
  public readonly type: AuthActionsTypes = AuthActionsTypes.Logout;

  constructor(public payload?: any) {}
}

export type AuthActions
  = Login
  | LoginSuccess
  | LoginFailure
  | Sign
  | SignSuccess
  | SignFailure
  | Logout;
