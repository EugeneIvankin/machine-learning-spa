import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductDetailsDataSource} from '@app/modules/product-details/data-sources';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  constructor(private dataSource: ProductDetailsDataSource) {}

  public loadProduct(pn: string): Observable<any> {
    return this.dataSource.loadProduct(pn);
  }
}
