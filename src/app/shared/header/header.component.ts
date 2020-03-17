import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { HomeState } from '@app/modules/home/store/reducers';
import { routes } from '@consts';
import { CoreState } from '@core/state/reducers';
import { Go } from '@core/state/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public minLength = 3;
  public form: FormGroup;
  public readonly routes: typeof routes = routes;

  constructor(private store: Store<HomeState & CoreState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      query: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
    });
  }

  public search() {
    if (this.form.valid) {
      this.store.dispatch(new Go({path: [routes.SEARCH], query: {productName: this.form.value.query}}));
    }
  }
}
