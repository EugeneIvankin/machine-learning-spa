import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { restEndpoints } from '@consts';
import { RestService } from '@core/services';
import {Product} from '@app/shared/contracts/product';

@Injectable({
  providedIn: 'root'
})
export class HomeDataSource {
  constructor(private restService: RestService) {}

  public loadBestProducts(): Observable<Product[]> {
    return this.restService.post(restEndpoints.loadBestProducts);
  }

  public search(food: string): Observable<any> {
    return this.restService.post(restEndpoints.search);
  }
}
