import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects';
import {reducers} from '@core/state/reducers';
import {RouterEffects} from '@core/state/effects/router.effect';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class CoreModule {}
