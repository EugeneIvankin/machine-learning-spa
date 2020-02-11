import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { Product } from '@app/shared/contracts/product';
import loadBestProductsSuccess from '@app/modules/home/store/reducers/loaded-best-products-success';
import loadBestProductsFailure from '@app/modules/home/store/reducers/load-best-products-failure';
import searchProduct from '@app/modules/home/store/reducers/search-product';
import searchedProductSuccess from '@app/modules/home/store/reducers/searched-product-success';
import searchedProductFailure from '@app/modules/home/store/reducers/searched-product-failure';
import { HomeActions, HomeActionsTypes, LoadedBestProductsSuccess, SearchedProductSuccess } from '@app/modules/home/store/actions';
import loadBestProducts from '@app/modules/home/store/reducers/load-best-products';

export interface HomeState {
  products: Product[];
  pending: boolean;
}

export const initialState: HomeState = {
  products: null,
  pending: null
};

export function reducer(state: HomeState = initialState, action: HomeActions): HomeState {
  switch (action.type) {
    case HomeActionsTypes.LoadBestProducts:
      return loadBestProducts(state);

    case HomeActionsTypes.LoadedBestProductsSuccess:
      return loadBestProductsSuccess(state, action as LoadedBestProductsSuccess);

    case HomeActionsTypes.LoadedBestProductsFailure:
      return loadBestProductsFailure(state);

    case HomeActionsTypes.SearchProduct:
      return searchProduct(state);

    case HomeActionsTypes.SearchedProductSuccess:
      return searchedProductSuccess(state, action as SearchedProductSuccess);

    case HomeActionsTypes.SearchedProductFailure:
      return searchedProductFailure(state);

    default: {
      return state;
    }
  }
}

export const getHomeState: MemoizedSelector<object, HomeState> = createFeatureSelector<HomeState>('home');
