import {ProductDetailsState} from '@app/modules/product-details/store/reducers/index';
import {LoadProductSuccess} from '@app/modules/product-details/store/actions';

export default function loadProductSuccess(state: ProductDetailsState, action: LoadProductSuccess): ProductDetailsState {
  return {
    ...state,
    product: action.payload.productDetails.product ? action.payload.productDetails.product : null,
    featureProducts: action.payload.productDetails.featureProducts ? action.payload.productDetails.featureProducts : [],
    similarProducts: action.payload.productDetails.similarProducts ? action.payload.productDetails.similarProducts : [],
    dishes: action.payload.productDetails.dishes ? action.payload.productDetails.dishes : [],
    pending: false
  };
}
