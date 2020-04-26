import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {filter, take} from "rxjs/operators";

import { PurchasesState } from "@app/modules/purchases/store/reducers";
import { Product } from "@app/shared/contracts/product";
import {
  getPurchasesProducts,
  getPurchasesProductsIds
} from "@app/modules/purchases/store/selectors/purchases.selectors";
import { LoadPurchases} from "@app/modules/purchases/store/actions";

@Component({
  selector: 'app-purchases-page',
  templateUrl: './purchases-page.component.html',
  styleUrls: ['./purchases-page.component.scss']
})
export class PurchasesPageComponent implements OnInit {
  public purchasedProducts: Observable<Product[]>

  constructor(private store: Store<PurchasesState>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getPurchasesProductsIds),
        filter((purchasesIds: string[]) =>purchasesIds.length > 0),
        take(1)
      )
      .subscribe((purchasesIds: string[]) =>
        this.store.dispatch(new LoadPurchases({purchasesIds: purchasesIds}))
      )


    this.purchasedProducts = this.store.pipe(select(getPurchasesProducts));
  }
}
