import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Data } from '@angular/router';
import { filter, take } from 'rxjs/operators';

import { CoreState } from '@core/state/reducers';
import { getQueryParams } from '@core/state/selectors/router.selector';
import { LoadProduct } from '@app/modules/product-details/store/actions';
import { ProductDetails } from '@app/shared/contracts/product-details';
import { Product } from '@app/shared/contracts/product';
import { getDishes, getFeatureProducts, getProductDetails, getSimilarProducts } from '@app/modules/product-details/store/selectors';
import { ProductDetailsState } from '@app/modules/product-details/store/reducers';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent {
  public product: ProductDetails;
  public featureProducts$: Observable<Product[]>;
  public similarProducts$: Observable<Product[]>;
  public dishes$: Observable<any>;

  constructor(private store: Store<CoreState & ProductDetailsState>) {
    this.store
      .pipe(
        select(getQueryParams)
      )
      .subscribe((queryParams: Data) => {
        this.store.dispatch(new LoadProduct({pn: queryParams.pn}));
      });

    this.featureProducts$ = this.store.pipe(select(getFeatureProducts));
    this.similarProducts$ = this.store.pipe(select(getSimilarProducts));
    this.dishes$ = this.store.pipe(select(getDishes));

    this.store
      .pipe(
        select(getProductDetails),
        filter((product: ProductDetails) => !! product),
        take(1)
      )
      .subscribe((product: ProductDetails) => {
        this.product = product;
      });
  }
}
