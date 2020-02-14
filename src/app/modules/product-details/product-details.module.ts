import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DishesComponent,
  FeaturedProductsComponent,
  ProductDetailsPageComponent,
  SimirarProductsComponent
} from '@app/modules/product-details/conteiners';
import {ProductDetailsRouterModule} from '@app/modules/product-details/product-details-router.module';

@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    DishesComponent,
    FeaturedProductsComponent,
    SimirarProductsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRouterModule
  ]
})
export class ProductDetailsModule { }
