import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {RestService} from '@core/services';
import {LoadProductResponse} from '@app/modules/product-details/contracts';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsDataSource {
  constructor(private restService: RestService) {}

  public loadProduct(pn: string): Observable<LoadProductResponse> {
    return of({
      product: {
        cost: '130',
        id: '078',
        image: 'image',
        name: 'name',
        pop: '4.5',
        country: 'contry',
        description: 'description',
        nutritionalValue: [],
        packing: 'packing',
        weight: 'weight'
      },
      featureProducts: [
        {
          cost: '130',
          id: '1',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '3',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '2',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '8',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '9',
          image: 'image',
          name: 'name',
          pop: '4.5'
        }
      ],
      similarProducts: [
        {
          cost: '130',
          id: '8',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '7',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '56',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '456',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
        {
          cost: '130',
          id: '45',
          image: 'image',
          name: 'name',
          pop: '4.5'
        },
      ],
      dishes: []
    });

    // return this.restService.post(restEndpoints.loadProduct);
  }
}
