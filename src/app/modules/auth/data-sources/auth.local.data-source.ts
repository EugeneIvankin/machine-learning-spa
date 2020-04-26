import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

import {LoginFormCredential, SignFormCredential, User} from "@app/modules/auth/contracts";
import {AppResponse} from "@core/contracts";

@Injectable({
  providedIn: 'root'
})
export class AuthLocalDataSource {
  public login(credential: LoginFormCredential): Observable<AppResponse<User>> {
    return of({
      payload: {
        name: 'Name',
        lastName: 'LastName'
      },
      code: 1000
    });
  }

  public sign(credential: SignFormCredential): Observable<AppResponse<User>> {
    return of({
      payload: {
        name: 'Name',
        lastName: 'LastName'
      },
      code: 1000
    });
  }
}
