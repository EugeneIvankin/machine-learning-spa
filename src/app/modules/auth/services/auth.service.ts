import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {AppResponse} from "@core/contracts";
import {LoginFormCredential, SignFormCredential, User} from "@app/modules/auth/contracts";
import {AuthLocalDataSource} from "@app/modules/auth/data-sources/auth.local.data-source";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private dataSource: AuthLocalDataSource) {}

  public login(credential: LoginFormCredential): Observable<AppResponse<User>> {
    return this.dataSource.login(credential);
  }

  public sign(credential: SignFormCredential): Observable<AppResponse<User>> {
    return this.dataSource.sign(credential);
  }
}
