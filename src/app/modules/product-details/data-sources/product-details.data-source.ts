import {Injectable} from '@angular/core';
import {RestService} from '@core/services';
import {Observable, of} from 'rxjs';
import {restEndpoints} from '@consts';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsDataSource {
  constructor(private restService: RestService) {}

  public loadProduct(pn: string): Observable<any> {
    return of({name: 'product', anotherProducts: 'anotherProducts'});

    // return this.restService.post(restEndpoints.loadProduct);
  }
}
