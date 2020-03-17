import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RestService } from '@core/services';
import { LoadProductResponse } from '@app/modules/product-details/contracts';
import { restEndpoints } from '@consts';
import { AppResponse } from '@core/contracts';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsDataSource {
  constructor(private restService: RestService) {}

  public loadProduct(pn: string): Observable<AppResponse<LoadProductResponse>> {
    return this.restService.post(restEndpoints.loadProduct, {pn});
  }
}
