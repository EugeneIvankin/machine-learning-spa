import { Component, Input } from '@angular/core';

import { Product } from '@app/shared/contracts/product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  @Input() public featureProducts: Product[];
}
