import { Component, OnInit } from '@angular/core';
import {CoreState} from '@core/state/reducers';
import {Store} from '@ngrx/store';
import {select} from '@ngrx/core';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  constructor(private store: Store<CoreState>) {
    this.store
      .pipe();
  }

  ngOnInit() {
  }

}
