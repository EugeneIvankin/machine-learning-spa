import { ProductDetailsState } from '@app/modules/product-details/store/reducers/index';

export default function loadProductFailure(state: ProductDetailsState): ProductDetailsState {
  return {
    ...state,
    pending: false
  };
}
