import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import {AppRoutingModule} from '@app/app-routing.module';
import {SharedModule} from '@app/shared/shared.module';
import {CoreModule} from '@core/core.module';
import {ProductDetailsModule} from '@app/modules/product-details/product-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HomeModule,
    SharedModule,
    ProductDetailsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
