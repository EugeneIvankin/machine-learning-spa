import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Product} from '@app/shared/contracts/product';

@Injectable({
  providedIn: 'root'
})
export class HomeLocalDataSource {
  public loadBestProducts(): Observable<Product[]> {
    return of([
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      }
    ]);
  }

  public search(): Observable<Product[]> {
    return of([
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      },
      {
        cost: '130',
        id: '077',
        image: 'image',
        name: 'name',
        pop: '4.5'
      }
    ]);
  }
}
