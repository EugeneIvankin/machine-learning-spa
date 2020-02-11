import { HomeState } from '@app/modules/home/store/reducers/index';
import { SearchedProductSuccess } from '@app/modules/home/store/actions';

export default function searchedProductSuccess(state: HomeState, action: SearchedProductSuccess): HomeState {
  return {
    ...state,
    products: action.payload.products ? action.payload.products : null,
    pending: false
  };
}
