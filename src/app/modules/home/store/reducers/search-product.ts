import { HomeState } from '@app/modules/home/store/reducers/index';

export default function searchProduct(state: HomeState): HomeState {
  return {
    ...state,
    pending: true
  };
}
