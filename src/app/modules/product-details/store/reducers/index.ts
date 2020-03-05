import {createFeatureSelector, MemoizedSelector} from '@ngrx/store';

import { ProductDetails } from '@app/shared/contracts/product-details';
import { LoadProductSuccess, ProductDetailsActions, ProductDetailsActionsTypes } from '@app/modules/product-details/store/actions';
import loadProduct from '@app/modules/product-details/store/reducers/load-product';
import loadProductSuccess from '@app/modules/product-details/store/reducers/load-product-success';
import loadProductFailure from '@app/modules/product-details/store/reducers/load-product-failure';
import { Product } from '@app/shared/contracts/product';

export interface ProductDetailsState {
  product: ProductDetails;
  featureProducts: Product[];
  similarProducts: Product[];
  dishes: any[];
  pending: boolean;
}

export const initialState: ProductDetailsState = {
  product: null,
  featureProducts: null,
  similarProducts: null,
  dishes: null,
  pending: null
};

export function reducer(state: ProductDetailsState = initialState, action: ProductDetailsActions): ProductDetailsState {
  switch (action.type) {
    case ProductDetailsActionsTypes.LoadProduct:
      return loadProduct(state);

    case ProductDetailsActionsTypes.LoadProductSuccess:
      return loadProductSuccess(state, action as LoadProductSuccess);

    case ProductDetailsActionsTypes.LoadProductFailure:
      return loadProductFailure(state);

    default: {
      return state;
    }
  }
}

export const getProductDetailsState: MemoizedSelector<object, ProductDetailsState> =
  createFeatureSelector<ProductDetailsState>('product details');
