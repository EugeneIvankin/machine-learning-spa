import { HomeState } from '@app/modules/home/store/reducers/index';

export default function loadBestProducts(state: HomeState): HomeState {
  return {
    ...state,
    pending: true
  };
}
