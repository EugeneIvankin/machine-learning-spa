import { AuthState } from "@app/modules/auth/store/reducers/index";

export default function login(state: AuthState): AuthState {
  return {
    ...state,
    pending: true
  };
}
