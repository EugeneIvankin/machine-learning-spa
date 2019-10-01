import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeLocalDataSource {
  public load(): Observable<any> {
    console.log('load best foods');

    return of([]);
  }
}
