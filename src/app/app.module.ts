import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@core/core.module';
import { ProductDetailsModule } from '@app/modules/product-details/product-details.module';
import { PurchasesModule } from "@app/modules/purchases/purchases.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HomeModule,
    PurchasesModule,
    SharedModule,
    ProductDetailsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
