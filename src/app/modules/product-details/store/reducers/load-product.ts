import { ProductDetailsState } from '@app/modules/product-details/store/reducers/index';

export default function loadProduct(state: ProductDetailsState): ProductDetailsState {
  return {
    ...state,
    pending: true
  };
}
