import { AuthState } from "@app/modules/auth/store/reducers/index";
import { LoginSuccess } from "@app/modules/auth/store/actions";

export default function loginSuccess(state: AuthState, action: LoginSuccess): AuthState {
  return {
    ...state,
    user: {
      name: action.payload.name,
      lastName: action.payload.lastName
    },
    pending: false
  };
}
