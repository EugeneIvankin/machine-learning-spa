import { AuthState } from "@app/modules/auth/store/reducers/index";

export default function sign(state: AuthState): AuthState {
  return {
    ...state,
    pending: true
  };
}
