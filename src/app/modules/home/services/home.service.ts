import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeDataSource } from '@app/modules/home/data-sources';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private dataSource: HomeDataSource) {}

  public load(): Observable<any> {
    return this.dataSource.load();
  }
}
