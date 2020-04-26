import { AuthState } from "@app/modules/auth/store/reducers/index";

export default function loginFailure(state: AuthState): AuthState {
  return {
    ...state,
    pending: true
  };
}
