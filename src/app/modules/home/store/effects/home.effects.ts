import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  HomeActionsTypes,
  LoadedBestProductsFailure,
  LoadedBestProductsSuccess,
  SearchedProductFailure,
  SearchedProductSuccess,
  SearchProduct
} from '@app/modules/home/store/actions';
import { HomeService } from '@app/modules/home/services';
import { Product } from '@app/shared/contracts/product';
import { HomeState } from '@app/modules/home/store/reducers';
import { AppResponse } from '@core/contracts';

@Injectable()
export class HomeEffects {
  @Effect()
  public loadBestProducts$: Observable<LoadedBestProductsSuccess | LoadedBestProductsFailure> = this.actions$.pipe(
    ofType(HomeActionsTypes.LoadBestProducts),
    switchMap(() =>
      this.homeService
        .loadBestProducts()
        .pipe(
          map((response: AppResponse<Product[]>) => new LoadedBestProductsSuccess({products: response.payload})),
          catchError((error: any) => of(new LoadedBestProductsFailure(error)))
        )
    )
  );

  @Effect()
  public searchProduct$: Observable<any> = this.actions$.pipe(
    ofType(HomeActionsTypes.SearchProduct),
    switchMap((action: SearchProduct) =>
      this.homeService
        .search(action.payload.query)
        .pipe(
          map((response: AppResponse<Product[]>) => new SearchedProductSuccess({products: response.payload})),
          catchError((error: any) => of(new SearchedProductFailure(error)))
        )
    )
  );

  constructor(
    private store: Store<HomeState>,
    private actions$: Actions,
    private homeService: HomeService
  ) {}
}
