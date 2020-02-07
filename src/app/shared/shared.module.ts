import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './food-card/food-card.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    FoodCardComponent,
    MainLayoutComponent
  ],
  exports: [
    FoodCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
