import { NavigationExtras } from '@angular/router';

export interface RedirectRoute {
  path: any[];
  query?: any;
  extras?: NavigationExtras;
}
