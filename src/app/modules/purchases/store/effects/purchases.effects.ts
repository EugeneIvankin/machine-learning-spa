import {Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import {AppResponse } from "@core/contracts";
import {
  LoadPurchases,
  LoadPurchasesFailure,
  LoadPurchasesSuccess,
  PurchasesActionsTypes
} from "@app/modules/purchases/store/actions";
import { ProductDetails } from "@app/shared/contracts/product-details";
import { PurchasesService } from "@app/modules/purchases/services";

@Injectable()
export class PurchasesEffects {
  @Effect()
  public loadPurchases$: Observable<LoadPurchasesSuccess | LoadPurchasesFailure> = this.actions$.pipe(
    ofType(PurchasesActionsTypes.LoadPurchases),
    switchMap((action: LoadPurchases) =>
      this.purchasesService
        .loadPurchases(action.payload.purchasesIds)
        .pipe(
          map((response: AppResponse<ProductDetails[]>) => new LoadPurchasesSuccess({products: response.payload})),
          catchError((error: any) => of(new LoadPurchasesFailure(error)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private purchasesService: PurchasesService
  ) {}
}
