import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthModule } from "@app/modules/auth/auth.module";

const routes: Routes = [
  {
    path: 'product-details',
    loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
  }
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
