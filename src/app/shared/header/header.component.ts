import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { HomeState } from '@app/modules/home/store/reducers';
import { routes } from '@consts';
import { CoreState } from '@core/state/reducers';
import { Go } from '@core/state/actions';
import { AuthState } from "@app/modules/auth/store/reducers";
import { User } from "@app/modules/auth/contracts";
import { getUser } from "@app/modules/auth/store/selects/auth.selects";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public minLength = 3;
  public form: FormGroup;
  public readonly routes: typeof routes = routes;
  public user$: Observable<User>
  public faUser: typeof faUser = faUser;
  public faShoppingCart: typeof faShoppingCart = faShoppingCart;

  constructor(private store: Store<HomeState & AuthState & CoreState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      query: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(this.minLength)
        ]
      ),
    });

    this.user$ = this.store.pipe(select(getUser));
  }

  public search() {
    if (this.form.valid) {
      this.store.dispatch(
        new Go({
          path: [routes.SEARCH],
          query: {productName: this.form.value.query}
        })
      );
    }
  }
}
