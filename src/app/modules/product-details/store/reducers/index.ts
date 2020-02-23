import { Product } from '@app/shared/contracts/product';
import { ProductDetails } from '@app/shared/contracts/product-details';

import { MemoizedSelector, createFeatureSelector } from '@ngrx/store';

export interface ProductState {
    product: ProductDetails;
    featureProducts: Product[];
    similarProducts: Product[];
    dishes: any[];
}

export const initialState: ProductState = {
    product: null,
    featureProducts: null,
    similarProducts: null,
    dishes: null
};

export const getProductState: MemoizedSelector<object, ProductState> = createFeatureSelector<ProductState>('product');
