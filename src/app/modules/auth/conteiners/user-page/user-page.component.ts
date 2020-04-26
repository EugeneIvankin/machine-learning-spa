import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { AuthState } from "@app/modules/auth/store/reducers";
import { User } from "@app/modules/auth/contracts";
import { getUser } from "@app/modules/auth/store/selects/auth.selects";
import { Logout } from "@app/modules/auth/store/actions";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public user$: Observable<User>

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUser));
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }
}
