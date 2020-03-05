import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductDetailsPageComponent } from '@app/modules/product-details/conteiners';
import { ProductDetailsRouterModule } from '@app/modules/product-details/product-details-router.module';
import { reducer } from '@app/modules/product-details/store/reducers';
import { ProductDetailsEffects } from '@app/modules/product-details/store/effects';
import { ProductDetailsService } from '@app/modules/product-details/services';
import { DishesComponent, FeaturedProductsComponent, SimilarProductsComponent } from '@app/modules/product-details/components';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ProductDetailsPageComponent,
    DishesComponent,
    FeaturedProductsComponent,
    SimilarProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductDetailsRouterModule,
    StoreModule.forFeature('product details', reducer),
    EffectsModule.forFeature([ProductDetailsEffects]),
    SharedModule,
  ],
  providers: [
    ProductDetailsService
  ]
})
export class ProductDetailsModule { }
