import { Component, OnInit } from '@angular/core';
import {CoreState} from '@core/state/reducers';
import {Store} from '@ngrx/store';
import {select} from '@ngrx/store';
import {getQueryParams} from '@core/state/selectors/router.selector';

import { ProductState } from '../../store/reducers';
import { take, filter, map } from 'rxjs/operators';
import { Data } from '@angular/router';
import { LoadProductDetails } from '../../store/actions';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  constructor(private store: Store<CoreState & ProductState>) {
    this.store
      .pipe(
        select(getQueryParams),
        take(1),
        filter((query: Data) => !!query && query.pn),
        map((query: Data) => query.pn)
      )
      .subscribe((productNumber: string) => {
        this.store.dispatch(new LoadProductDetails({pn: productNumber}));
      });
  }

  ngOnInit() {
  }

}
