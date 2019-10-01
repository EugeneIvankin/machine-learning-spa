import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { restEndpoints } from '@consts';
import { RestService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class HomeDataSource {
  constructor(private restService: RestService) {}

  public load(): Observable<any> {
    return this.restService.post(restEndpoints.loadBestFoods);
  }
}
