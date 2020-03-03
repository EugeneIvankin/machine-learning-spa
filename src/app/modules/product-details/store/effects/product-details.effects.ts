import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  LoadProduct,
  LoadProductFailure,
  LoadProductSuccess,
  ProductDetailsActionsTypes
} from '@app/modules/product-details/store/actions';
import {ProductDetailsService} from '@app/modules/product-details/services';

@Injectable()
export class ProductDetailsEffects {
  @Effect()
  public loadProduct$: Observable<LoadProductSuccess | LoadProductFailure> = this.actions$.pipe(
    ofType(ProductDetailsActionsTypes.LoadProduct),
    switchMap((action: LoadProduct) =>
      this.productDetailsService
        .loadProduct(action.payload.pn)
        .pipe(
          map((productDetails: any) => new LoadProductSuccess({productDetails})),
          catchError((error: any) => of(new LoadProductFailure(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private productDetailsService: ProductDetailsService
  ) {}
}
