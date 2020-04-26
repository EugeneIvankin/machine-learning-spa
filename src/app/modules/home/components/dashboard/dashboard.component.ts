import { Component, Input } from '@angular/core';

import { Product } from '@app/shared/contracts/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() products: Product[];
}
