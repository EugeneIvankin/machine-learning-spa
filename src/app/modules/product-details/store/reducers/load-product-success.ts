import {ProductDetailsState} from '@app/modules/product-details/store/reducers/index';
import {LoadProductSuccess} from '@app/modules/product-details/store/actions';

export default function loadProductSuccess(state: ProductDetailsState, action: LoadProductSuccess): ProductDetailsState {
  return {
    ...state,
    product: null,
    pending: false
  };
}
