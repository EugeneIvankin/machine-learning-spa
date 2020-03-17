import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Data } from '@angular/router';

import { Product } from '@app/shared/contracts/product';
import { getProductsList } from '@app/modules/home/store/selectors/home-selectors';
import { HomeState } from '@app/modules/home/store/reducers';
import { SearchProduct } from '@app/modules/home/store/actions';
import { CoreState } from '@core/state/reducers';
import { getQueryParams } from '@core/state/selectors/router.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private store: Store<HomeState & CoreState>) {}

  ngOnInit() {
    this.store.pipe(
      take(1),
      select(getQueryParams),
      filter((queryParams: Data) => !!queryParams && !!queryParams.productName),
      map((queryParams: Data) => queryParams.productName)
    ).subscribe((productName: string) => {
      this.store.dispatch(new SearchProduct({query: productName}));
    });

    this.products$ = this.store.pipe(select(getProductsList));
  }

}
