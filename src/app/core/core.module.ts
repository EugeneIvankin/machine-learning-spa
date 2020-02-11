import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {EffectsModule} from '@ngrx/effects';
import {reducers} from '@core/state/reducers';
import {RouterEffects} from '@core/state/effects/router.effect';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RouterEffects]),
  ]
})
export class CoreModule {}
