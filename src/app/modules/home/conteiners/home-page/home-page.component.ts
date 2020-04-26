import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@app/shared/contracts/product';
import { getProductsList } from '@app/modules/home/store/selectors/home-selectors';
import { HomeState } from '@app/modules/home/store/reducers';
import { LoadBestProducts } from '@app/modules/home/store/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private store: Store<HomeState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBestProducts());

    this.products$ = this.store.pipe(select(getProductsList));
  }
}
