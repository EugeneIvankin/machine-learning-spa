import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {ProductDetailsPageComponent} from '@app/modules/product-details/conteiners/product-details-page/product-details-page.component';

const routes: Routes = [{
  path: '',
  component: ProductDetailsPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRouterModule {
}
