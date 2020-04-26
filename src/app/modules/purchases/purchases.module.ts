import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PurchasesEffects } from "@app/modules/purchases/store/effects";
import { reducer } from "@app/modules/purchases/store/reducers";
import { PurchasesService } from "@app/modules/purchases/services";
import { PurchasesLocalDataSource } from "@app/modules/purchases/data-sources";
import { PurchasesPageComponent } from '@app/modules/purchases/conteiners';
import { PurchasesRouterModule } from "@app/modules/purchases/purchases-routing.module";
import { PurchasesProductsComponent } from '@app/modules/purchases/components';
import { SharedModule } from "@app/shared/shared.module";


@NgModule({
  declarations: [PurchasesPageComponent, PurchasesProductsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('purchases', reducer),
    EffectsModule.forFeature([PurchasesEffects]),
    PurchasesRouterModule,
    SharedModule
  ],
  providers: [
    PurchasesService,
    PurchasesLocalDataSource
  ]
})
export class PurchasesModule { }
