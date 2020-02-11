import {HomeState} from '@app/modules/home/store/reducers/index';
import {LoadedBestProductsSuccess} from '@app/modules/home/store/actions';

export default function loadedBestProductsSuccess(state: HomeState, action: LoadedBestProductsSuccess): HomeState {
  return {
    ...state,
    products: action.payload.products ? action.payload.products : null,
    pending: false
  };
}
