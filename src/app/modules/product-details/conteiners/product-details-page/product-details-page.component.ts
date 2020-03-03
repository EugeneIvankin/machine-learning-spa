import { Component, OnInit } from '@angular/core';
import {CoreState} from '@core/state/reducers';
import {Store} from '@ngrx/store';
import {select} from '@ngrx/store';
import {getQueryParams} from '@core/state/selectors/router.selector';
import {Data} from '@angular/router';
import {LoadProduct} from '@app/modules/product-details/store/actions';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  constructor(private store: Store<CoreState>) {
    this.store
      .pipe(
        select(getQueryParams)
      )
      .subscribe((queryParams: Data) => {
        this.store.dispatch(new LoadProduct({pn: queryParams.pn}));
      });
  }

  ngOnInit() {
  }

}
