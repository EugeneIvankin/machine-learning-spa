import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AppResponse } from "@core/contracts";
import { PurchasesLocalDataSource } from "@app/modules/purchases/data-sources";
import { Product } from "@app/shared/contracts/product";

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  constructor(private dataSource: PurchasesLocalDataSource) {}

  public loadPurchases(purchasesIds: string[]): Observable<AppResponse<Product[]>> {
    return this.dataSource.loadPurchases(purchasesIds);
  }
}
