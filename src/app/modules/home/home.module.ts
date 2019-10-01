import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { HomePageComponent } from '@app/modules/home/conteiners';
import { reducer } from '@app/modules/home/store/state';
import {HomeDataSource, HomeLocalDataSource} from './data-sources';
import { HomeService } from '@app/modules/home/services';
import { BestFoodsEffects } from '@app/modules/home/store/effects';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([BestFoodsEffects]),
  ],
  providers: [
    HomeService,
    {
      provide: HomeDataSource, useClass: HomeLocalDataSource
    }
  ]
})
export class HomeModule { }
