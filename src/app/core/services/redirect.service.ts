import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { RedirectRoute } from '@core/contracts/redirect-route';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  constructor(
    private injector: Injector,
  ) {}

  public getRouter(): Router {
    return this.injector.get(Router);
  }

  public redirect(route: RedirectRoute): void {
    this.getRouter().navigate(route.path, {queryParams: route.query || null});
  }
}
