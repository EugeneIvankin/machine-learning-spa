import { ProductDetails } from '@app/shared/contracts/product-details';
import { Product } from '@app/shared/contracts/product';

export interface LoadProductResponse {
  product: ProductDetails;
  featureProducts: Product[];
  similarProducts: Product[];
  dishes: any[];
}
