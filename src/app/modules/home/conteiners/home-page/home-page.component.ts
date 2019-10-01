import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { LoadBestFoods } from '@app/modules/home/store/actions';
import {HomeState} from '@app/modules/home/store/state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private store: Store<HomeState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBestFoods());
  }

}
