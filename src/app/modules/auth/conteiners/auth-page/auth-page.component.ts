import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { AuthState } from "@app/modules/auth/store/reducers";
import { Login, Sign } from "@app/modules/auth/store/actions";
import { LoginFormCredential, SignFormCredential } from "@app/modules/auth/contracts";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
  }

  public sendLoginForm(loginFormCredential: LoginFormCredential): void {
    this.store.dispatch(new Login(loginFormCredential))
  }
  public sendSignForm(signFormCredential: SignFormCredential): void {
    this.store.dispatch(new Sign(signFormCredential))
  }
}
