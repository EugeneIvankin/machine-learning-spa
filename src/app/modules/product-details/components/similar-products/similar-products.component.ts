import { Component, Input } from '@angular/core';

import { Product } from '@app/shared/contracts/product';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css']
})
export class SimilarProductsComponent {
  @Input() public similarProducts: Product[];
}
