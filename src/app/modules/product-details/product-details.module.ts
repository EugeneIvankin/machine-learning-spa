import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DishesComponent,
  FeaturedProductsComponent,
  ProductDetailsPageComponent,
  SimirarProductsComponent
} from '@app/modules/product-details/conteiners';
import {ProductDetailsRouterModule} from '@app/modules/product-details/product-details-router.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from '@app/modules/product-details/store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductDetailsEffects} from '@app/modules/product-details/store/effects';
import {ProductDetailsService} from '@app/modules/product-details/services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    DishesComponent,
    FeaturedProductsComponent,
    SimirarProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductDetailsRouterModule,
    StoreModule.forFeature('product details', reducer),
    EffectsModule.forFeature([ProductDetailsEffects]),
  ],
  providers: [
    ProductDetailsService
  ]
})
export class ProductDetailsModule { }
