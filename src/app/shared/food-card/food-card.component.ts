import {Component, Input} from '@angular/core';
import {Product} from '@app/shared/contracts/product';
import { routes } from '@consts';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent {
  @Input() product: Product;
  public readonly routes: typeof routes = routes;
}
