import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { HomePageComponent, SearchPageComponent } from '@app/modules/home/conteiners';
import { HomeDataSource } from './data-sources';
import { HomeService } from '@app/modules/home/services';
import { HomeEffects } from '@app/modules/home/store/effects';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from '@app/modules/home/home-router.module';
import { BannerComponent } from '@app/modules/home/components';
import { reducer } from '@app/modules/home/store/reducers';
import { DashboardComponent } from '@app/modules/home/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BannerComponent,
    DashboardComponent,
    SearchPageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffects]),
    SharedModule,
  ],
  providers: [
    HomeService,
    HomeDataSource
  ]
})
export class HomeModule {}
