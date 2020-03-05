import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ProductDetailsDataSource} from '@app/modules/product-details/data-sources';
import {LoadProductResponse} from '@app/modules/product-details/contracts';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  constructor(private dataSource: ProductDetailsDataSource) {}

  public loadProduct(pn: string): Observable<LoadProductResponse> {
    return this.dataSource.loadProduct(pn);
  }
}
