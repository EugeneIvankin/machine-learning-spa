import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HomeState } from '@app/modules/home/store/state';
import { BestFoodsActionsTypes, LoadBestFoodsFailure, LoadBestFoodsSuccess } from '../actions';
import { HomeService } from '@app/modules/home/services';

@Injectable()
export class BestFoodsEffects {
  @Effect()
  public loadBestFoods$: Observable<any> = this.actions$.pipe(
    ofType(BestFoodsActionsTypes.LoadBestFoods),
    switchMap(() => {
      return this.homeService
        .load()
        .pipe(
          map((bestFoods: any) => new LoadBestFoodsSuccess(bestFoods)),
          catchError((error: any) => of(new LoadBestFoodsFailure(error)))
        );
    })
  );

  constructor(
    private store: Store<HomeState>,
    private actions$: Actions,
    private homeService: HomeService
  ) {}
}
