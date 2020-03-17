import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { restEndpoints } from '@consts';
import { RestService } from '@core/services';
import { Product } from '@app/shared/contracts/product';
import { AppResponse } from '@core/contracts';

@Injectable({
  providedIn: 'root'
})
export class HomeDataSource {
  constructor(private restService: RestService) {}

  public loadBestProducts(): Observable<AppResponse<Product[]>> {
    return this.restService.get(restEndpoints.loadBestProducts);
  }

  public search(food: string): Observable<AppResponse<Product[]>> {
    return this.restService.post(restEndpoints.search, {productName: food});
  }
}
