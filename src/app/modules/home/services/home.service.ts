import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeDataSource } from '@app/modules/home/data-sources';
import {Product} from '@app/shared/contracts/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private dataSource: HomeDataSource) {}

  public loadBestProducts(): Observable<Product[]> {
    return this.dataSource.loadBestProducts();
  }

  public search(food: string): Observable<any> {
    return this.dataSource.search(food);
  }
}
