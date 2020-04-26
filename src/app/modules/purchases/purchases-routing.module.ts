import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PurchasesPageComponent } from "@app/modules/purchases/conteiners/purchases-page/purchases-page.component";

const routes: Routes = [{
  path: 'purchases',
  component: PurchasesPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRouterModule {
}
