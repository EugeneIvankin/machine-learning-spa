import { Component, Input } from '@angular/core';
import { Product } from '@app/shared/contracts/product';
import { Store } from "@ngrx/store";

import { routes } from '@consts';
import { PurchasesState } from "@app/modules/purchases/store/reducers";
import { AddToPurchases, DeleteFromPurchases } from "@app/modules/purchases/store/actions";

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.scss']
})
export class ProductDetailsCardComponent {
  @Input() product: Product;
  @Input() isSelected: boolean;
  public readonly routes: typeof routes = routes;

  constructor(private store: Store<PurchasesState>) {
  }

  public addToPurchases(productId) {
    this.store.dispatch(new AddToPurchases(productId));
  }

  public deletedFromPurchases(productId) {
    this.store.dispatch(new DeleteFromPurchases(productId));
  }
}
