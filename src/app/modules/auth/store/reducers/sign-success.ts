import { AuthState } from "@app/modules/auth/store/reducers/index";
import { SignSuccess } from "@app/modules/auth/store/actions";

export default function signSuccess(state: AuthState, action: SignSuccess): AuthState {
  return {
    ...state,
    user: {
      name: action.payload.name,
      lastName: action.payload.lastName
    },
    pending: false
  };
}
