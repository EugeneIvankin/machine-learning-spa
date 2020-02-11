import {HomeState} from '@app/modules/home/store/reducers/index';

export default function loadBestProductsFailure(state: HomeState): HomeState {
  return {
    ...state,
    pending: false
  };
}
