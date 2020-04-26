import { Component, Input } from '@angular/core';
import { Product } from "@app/shared/contracts/product";

@Component({
  selector: 'app-purchases-table',
  templateUrl: './purchases-products.component.html',
  styleUrls: ['./purchases-products.component.scss']
})
export class PurchasesProductsComponent {
  @Input() public purchasedProducts: Product[];
}
