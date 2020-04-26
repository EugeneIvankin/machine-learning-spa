import { createSelector, MemoizedSelector } from "@ngrx/store";

import { AuthState, getAuthState } from "@app/modules/auth/store/reducers";
import { User } from "@app/modules/auth/contracts";

export const getUser: MemoizedSelector<AuthState, User> = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);
