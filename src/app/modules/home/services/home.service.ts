import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeDataSource } from '@app/modules/home/data-sources';
import { Product } from '@app/shared/contracts/product';
import { AppResponse } from '@core/contracts';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private dataSource: HomeDataSource) {}

  public loadBestProducts(): Observable<AppResponse<Product[]>> {
    return this.dataSource.loadBestProducts();
  }

  public search(food: string): Observable<AppResponse<Product[]>> {
    return this.dataSource.search(food);
  }
}
